import React, { useRef, useEffect, useCallback } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Max pixel displacement. Default 10. Keep ≤ 14 for restraint. */
  strength?: number;
  /** Lerp factor — controls spring feel. 0.08–0.12 recommended. */
  lerpFactor?: number;
  /** If true, the effect is disabled regardless of device. */
  disabled?: boolean;
}

/**
 * MagneticButton — Effect 1 of 3
 *
 * A restrained magnetic pointer-following interaction for selected primary
 * CTAs and important cards. Uses requestAnimationFrame + transform only.
 * No React state updates on pointer events. No layout shift.
 *
 * Protected behavior:
 * - Disabled on touch devices (detected on first touchstart)
 * - Disabled for reduced-motion users (prefers-reduced-motion or data-reduced-motion)
 * - Pointer events are never blocked — click/keyboard behavior preserved
 * - Cleans up on unmount
 *
 * Usage: Wrap only selected elements (hero CTA, closing CTA, nav CTA).
 * Do NOT apply globally to every button.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 10,
  lerpFactor = 0.09,
  disabled = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const isTouchRef = useRef(false);
  const reducedRef = useRef(false);

  // Check reduced motion once on mount
  useEffect(() => {
    reducedRef.current =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'true';

    // Also listen for OS preference changes
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => {
      reducedRef.current = e.matches;
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(function tick() {
    const el = wrapperRef.current;
    if (!el) return;

    currentRef.current.x = lerp(currentRef.current.x, targetRef.current.x, lerpFactor);
    currentRef.current.y = lerp(currentRef.current.y, targetRef.current.y, lerpFactor);

    el.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px)`;

    const notAtRest =
      Math.abs(currentRef.current.x - targetRef.current.x) > 0.05 ||
      Math.abs(currentRef.current.y - targetRef.current.y) > 0.05;

    if (notAtRest || isHoveredRef.current) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [lerpFactor]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (disabled || reducedRef.current || isTouchRef.current) return;
    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    // Normalize to -1…1, then clamp to strength pixels
    const rawX = (e.clientX - cx) / (rect.width / 2);
    const rawY = (e.clientY - cy) / (rect.height / 2);

    targetRef.current.x = Math.max(-strength, Math.min(strength, rawX * strength));
    targetRef.current.y = Math.max(-strength, Math.min(strength, rawY * strength));
  }, [disabled, strength]);

  const handleMouseEnter = useCallback(() => {
    if (disabled || reducedRef.current || isTouchRef.current) return;
    isHoveredRef.current = true;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [disabled, animate]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    targetRef.current = { x: 0, y: 0 };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const handleTouchStart = useCallback(() => {
    isTouchRef.current = true;
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleTouchStart]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ display: 'inline-flex', willChange: 'transform' }}
    >
      {children}
    </div>
  );
};
