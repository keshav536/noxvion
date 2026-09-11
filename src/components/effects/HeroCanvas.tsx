import React, { useRef, useEffect, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface HeroCanvasProps {
  className?: string;
}

const NODE_COUNT_DESKTOP = 28;
const NODE_COUNT_MOBILE = 12;
const CONNECTION_DISTANCE = 160;
const CURSOR_INFLUENCE_RADIUS = 120;
const CURSOR_FORCE = 0.018;
const MAX_FPS = 60;

/**
 * HeroCanvas — animated network node graph using Canvas 2D
 * No WebGL, no Three.js. Supports cursor influence, IntersectionObserver pausing,
 * and prefers-reduced-motion static fallback.
 */
export const HeroCanvas: React.FC<HeroCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const cursorRef = useRef({ x: -9999, y: -9999 });
  const isVisibleRef = useRef(true);
  const lastFrameTimeRef = useRef(0);
  const isMobileRef = useRef(false);
  const prefersReducedRef = useRef(false);

  const initNodes = useCallback((width: number, height: number, count: number): Node[] => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.8,
      opacity: Math.random() * 0.5 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: (Math.random() * 0.008 + 0.004),
    }));
  }, []);

  const draw = useCallback(function render(timestamp: number) {
    const canvas = canvasRef.current;
    if (!canvas || !isVisibleRef.current) {
      animFrameRef.current = requestAnimationFrame(render);
      return;
    }

    // FPS cap
    const elapsed = timestamp - lastFrameTimeRef.current;
    const frameDuration = 1000 / MAX_FPS;
    if (elapsed < frameDuration) {
      animFrameRef.current = requestAnimationFrame(render);
      return;
    }
    lastFrameTimeRef.current = timestamp - (elapsed % frameDuration);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const nodes = nodesRef.current;
    const cursor = cursorRef.current;
    const isReduced = prefersReducedRef.current;

    ctx.clearRect(0, 0, width, height);

    // Update and draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      if (!isReduced) {
        // Cursor influence — subtle attraction
        if (!isMobileRef.current) {
          const dx = cursor.x - node.x;
          const dy = cursor.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CURSOR_INFLUENCE_RADIUS && dist > 0) {
            const force = ((CURSOR_INFLUENCE_RADIUS - dist) / CURSOR_INFLUENCE_RADIUS) * CURSOR_FORCE;
            node.vx += dx * force;
            node.vy += dy * force;
          }
        }

        // Velocity damping
        node.vx *= 0.985;
        node.vy *= 0.985;

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce at edges
        if (node.x < 0) { node.x = 0; node.vx = Math.abs(node.vx); }
        if (node.x > width) { node.x = width; node.vx = -Math.abs(node.vx); }
        if (node.y < 0) { node.y = 0; node.vy = Math.abs(node.vy); }
        if (node.y > height) { node.y = height; node.vy = -Math.abs(node.vy); }

        // Pulse
        node.pulse += node.pulseSpeed;
      }

      // Draw connections
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j];
        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.18;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }

      // Draw node
      const pulseSize = isReduced ? 0 : Math.sin(node.pulse) * 0.4;
      const r = node.radius + pulseSize;
      const opacity = isReduced ? node.opacity : node.opacity * (0.7 + Math.sin(node.pulse) * 0.3);

      // Outer glow ring for primary nodes
      if (node.radius > 1.8) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${opacity * 0.06})`;
        ctx.fill();
      }

      // Main node
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${opacity})`;
      ctx.fill();
    }

    animFrameRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check mobile and reduced motion
    isMobileRef.current = window.innerWidth < 768;
    prefersReducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Also check data attribute
    if (document.documentElement.getAttribute('data-reduced-motion') === 'true') {
      prefersReducedRef.current = true;
    }

    const nodeCount = isMobileRef.current ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);
        nodesRef.current = initNodes(width, height, nodeCount);
      }
    });

    resizeObserver.observe(canvas.parentElement || canvas);

    // Intersection Observer — pause when off-screen
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    intersectionObserver.observe(canvas);

    // Cursor tracking (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobileRef.current) return;
      const rect = canvas.getBoundingClientRect();
      cursorRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      cursorRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Start animation loop
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [draw, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full ${className}`}
      aria-hidden="true"
      role="presentation"
    />
  );
};
