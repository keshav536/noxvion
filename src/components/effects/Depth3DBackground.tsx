import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const springConfig = { stiffness: 55, damping: 28, mass: 1.2 };

/**
 * Depth3DBackground
 *
 * A fixed, full-viewport CSS 3D parallax depth layer that sits behind all page
 * content. Creates the illusion of spatial depth using 4 blurred gradient blobs
 * at different Z-planes, each responding to mouse movement at distinct speeds.
 *
 * - z-index: -10  (never interferes with UI)
 * - pointer-events: none  (fully non-interactive)
 * - prefers-reduced-motion: static navy→blue gradient fallback
 * - Mobile (<768px): no mouse animation, static gradient blobs
 * - GPU-composited via will-change: transform
 */
export const Depth3DBackground: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // start conservative

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  // Layer 0 — farthest, slowest (navy depth)
  const x0 = useTransform(smoothX, v => v * 0.006);
  const y0 = useTransform(smoothY, v => v * 0.006);
  // Layer 1 — mid-far (royal blue)
  const x1 = useTransform(smoothX, v => v * 0.014);
  const y1 = useTransform(smoothY, v => v * 0.014);
  // Layer 2 — near (blue-500)
  const x2 = useTransform(smoothX, v => v * 0.024);
  const y2 = useTransform(smoothY, v => v * 0.024);
  // Layer 3 — closest, fastest (sky blue accent)
  const x3 = useTransform(smoothX, v => v * 0.038);
  const y3 = useTransform(smoothY, v => v * 0.038);

  useEffect(() => {
    const checkMotion = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const dataAttr = document.documentElement.getAttribute('data-reduced-motion') === 'true';
      setReducedMotion(prefersReduced || dataAttr);
    };
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMotion();
    checkMobile();

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    mq.addEventListener('change', checkMotion);
    window.addEventListener('resize', checkMobile, { passive: true });

    const observer = new MutationObserver(checkMotion);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-reduced-motion'],
    });

    return () => {
      mq.removeEventListener('change', checkMotion);
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  // Mouse tracking (desktop + motion only)
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    let rafId: number;
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        rawX.set(e.clientX - cx);
        rawY.set(e.clientY - cy);
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion, isMobile, rawX, rawY]);

  const animated = !reducedMotion && !isMobile;

  // Static fallback for reduced-motion
  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: -10 }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 80% 10%, rgba(10,37,64,0.05) 0%, transparent 60%),' +
              'radial-gradient(ellipse 60% 50% at 20% 80%, rgba(30,58,138,0.06) 0%, transparent 60%),' +
              'radial-gradient(ellipse 50% 40% at 50% 40%, rgba(59,130,246,0.07) 0%, transparent 70%)',
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -10 }}
      aria-hidden="true"
    >
      {/* Layer 0 — farthest navy depth blob (top-right) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '75vw',
          height: '75vh',
          top: '-20%',
          right: '-15%',
          background:
            'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(10,37,64,0.06) 0%, transparent 70%)',
          filter: 'blur(35px)',
          willChange: 'transform',
          x: animated ? x0 : 0,
          y: animated ? y0 : 0,
        }}
      />

      {/* Layer 1 — mid-far royal blue blob (bottom-left) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '65vw',
          height: '65vh',
          bottom: '-15%',
          left: '-15%',
          background:
            'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(30,58,138,0.08) 0%, transparent 70%)',
          filter: 'blur(55px)',
          willChange: 'transform',
          x: animated ? x1 : 0,
          y: animated ? y1 : 0,
        }}
      />

      {/* Layer 2 — near blue-500 haze (center) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '55vw',
          height: '55vh',
          top: '15%',
          left: '22%',
          background:
            'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(59,130,246,0.09) 0%, transparent 70%)',
          filter: 'blur(70px)',
          willChange: 'transform',
          x: animated ? x2 : 0,
          y: animated ? y2 : 0,
        }}
      />

      {/* Layer 3 — closest sky-blue accent (top-right offset) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '38vw',
          height: '38vh',
          top: '5%',
          right: '8%',
          background:
            'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(96,165,250,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)',
          willChange: 'transform',
          x: animated ? x3 : 0,
          y: animated ? y3 : 0,
        }}
      />

      {/* Subtle dot-grid texture (static depth anchor) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(10,37,64,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 20%, black 20%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 20%, black 20%, transparent 80%)',
        }}
      />
    </div>
  );
};

export default Depth3DBackground;
