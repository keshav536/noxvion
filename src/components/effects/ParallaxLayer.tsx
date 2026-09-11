import React, { useRef, useEffect, useCallback } from 'react';

interface ParallaxLayerProps {
  children: React.ReactNode;
  /** Parallax speed factor. Positive = slower, negative = faster than scroll. Range: -0.5 to 0.5 */
  speed?: number;
  /** Max translation in pixels */
  maxOffset?: number;
  className?: string;
}

/**
 * ParallaxLayer — Scroll-driven depth translation.
 * - GPU-only transform (translateY)
 * - Disabled on mobile (< 768px) and prefers-reduced-motion
 * - Pauses via IntersectionObserver when off-screen
 * - Max offset capped to avoid content leaving view
 */
export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  children,
  speed = 0.08,
  maxOffset = 24,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const isReducedRef = useRef(false);
  const isMobileRef = useRef(false);

  const updateTransform = useCallback(() => {
    const el = ref.current;
    if (!el || !isVisibleRef.current || isReducedRef.current || isMobileRef.current) return;

    const rect = el.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const elementCenter = rect.top + rect.height / 2;
    const offset = (viewportCenter - elementCenter) * speed;
    const clamped = Math.max(-maxOffset, Math.min(maxOffset, offset));

    el.style.transform = `translateY(${clamped}px) translateZ(0)`;
  }, [speed, maxOffset]);

  useEffect(() => {
    isReducedRef.current =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'true';
    isMobileRef.current = window.innerWidth < 768;

    if (isReducedRef.current || isMobileRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);

    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const newScrollY = window.scrollY;
      if (Math.abs(newScrollY - lastScrollY) < 0.5) return;
      lastScrollY = newScrollY;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateTransform(); // Initial position

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [updateTransform]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
};
