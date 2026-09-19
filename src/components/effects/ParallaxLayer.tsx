import React, { useRef, useEffect, useCallback } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  /** Parallax scroll speed factor. Range: -0.5 to 0.5. Default: 0.08 */
  speed?: number;
  /** Max vertical translation in pixels. Default: 32 */
  maxOffset?: number;
  /** Pointer movement parallax factor (horizontal and vertical drift). Default: 0 */
  pointerFactor?: number;
  /** Depth scale factor: subtle scaling with scroll (e.g. 0.04). Default: 0 */
  scaleDepth?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * ParallaxLayer — High-performance multi-layer parallax engine.
 * Inspired by the cinematic scroll mathematics:
 * - GPU-only 3D transforms (translate3d, scale)
 * - Lerped smoothing for scroll and cursor coordinates
 * - Inertial responsiveness
 * - Automatically disabled on mobile (< 768px) and prefers-reduced-motion
 * - Viewport intersection observer to pause when offscreen
 */
export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.08,
  maxOffset = 32,
  pointerFactor = 0,
  scaleDepth = 0,
  className = '',
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const isReducedRef = useRef(false);
  const isMobileRef = useRef(false);

  // Physics state
  const targetScrollY = useRef(0);
  const currentScrollY = useRef(0);
  const targetMouseX = useRef(0);
  const targetMouseY = useRef(0);
  const currentMouseX = useRef(0);
  const currentMouseY = useRef(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const update = useCallback(() => {
    const el = ref.current;
    if (!el || !isVisibleRef.current || isReducedRef.current || isMobileRef.current) {
      return;
    }

    currentScrollY.current = lerp(currentScrollY.current, targetScrollY.current, 0.12);
    currentMouseX.current = lerp(currentMouseX.current, targetMouseX.current, 0.1);
    currentMouseY.current = lerp(currentMouseY.current, targetMouseY.current, 0.1);

    const rect = el.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const elementCenter = rect.top + rect.height / 2;
    const scrollDelta = (viewportCenter - elementCenter) * speed;
    const clampedY = Math.max(-maxOffset, Math.min(maxOffset, scrollDelta));

    // Pointer parallax offsets
    const pointerX = currentMouseX.current * pointerFactor;
    const pointerY = currentMouseY.current * pointerFactor;

    // Depth scale based on proximity to center of viewport
    const normDist = Math.min(1, Math.abs(viewportCenter - elementCenter) / (window.innerHeight / 2));
    const scale = scaleDepth !== 0 ? 1 + (1 - normDist) * scaleDepth : 1;

    const totalX = pointerX;
    const totalY = clampedY + pointerY;

    el.style.transform = `translate3d(${totalX.toFixed(2)}px, ${totalY.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;

    // Keep animating if still settling
    const needsTick =
      Math.abs(currentScrollY.current - targetScrollY.current) > 0.1 ||
      Math.abs(currentMouseX.current - targetMouseX.current) > 0.001 ||
      Math.abs(currentMouseY.current - targetMouseY.current) > 0.001;

    if (needsTick) {
      rafRef.current = requestAnimationFrame(update);
    }
  }, [speed, maxOffset, pointerFactor, scaleDepth]);

  const requestTick = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(update);
  }, [update]);

  useEffect(() => {
    isReducedRef.current =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'true';
    isMobileRef.current = window.innerWidth < 768;

    if (isReducedRef.current || isMobileRef.current) return;

    targetScrollY.current = window.scrollY;
    currentScrollY.current = window.scrollY;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          requestTick();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);

    const onScroll = () => {
      targetScrollY.current = window.scrollY;
      requestTick();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (pointerFactor !== 0) {
        targetMouseX.current = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY.current = (e.clientY / window.innerHeight - 0.5) * 2;
        requestTick();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    if (pointerFactor !== 0) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }

    requestTick(); // initial paint

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (pointerFactor !== 0) {
        window.removeEventListener('mousemove', onMouseMove);
      }
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [pointerFactor, requestTick]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
};
