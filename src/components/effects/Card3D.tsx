import React, { useRef, useCallback, useEffect } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;       // degrees, default 6
  intensity?: 'low' | 'medium' | 'high';
  glowColor?: string;     // CSS color
  disabled?: boolean;
}

/**
 * Card3D — Reusable pointer-tracked 3D tilt card.
 * - Smooth tilt on pointer position (max 6 degrees)
 * - Dynamic gradient highlight following cursor
 * - Soft elevation on hover
 * - Touch-friendly: no tilt on touch, only scale
 * - Respects prefers-reduced-motion and data-reduced-motion
 * - No layout shifts, GPU-only transforms
 */
export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  maxTilt = 6,
  intensity,
  glowColor = 'rgba(0, 240, 255, 0.08)',
  disabled = false,
}) => {
  const effectiveMaxTilt = intensity === 'low' ? 4 : intensity === 'high' ? 9 : intensity === 'medium' ? 6 : maxTilt;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ rotX: 0, rotY: 0, lightX: 50, lightY: 50 });
  const currentRef = useRef({ rotX: 0, rotY: 0, lightX: 50, lightY: 50 });
  const isTouchRef = useRef(false);
  const isHoveredRef = useRef(false);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'true';
  }, []);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(function anim() {
    const inner = innerRef.current;
    const light = lightRef.current;
    if (!inner) return;

    const t = 0.1; // lerp factor — controls smoothness
    currentRef.current.rotX = lerp(currentRef.current.rotX, targetRef.current.rotX, t);
    currentRef.current.rotY = lerp(currentRef.current.rotY, targetRef.current.rotY, t);
    currentRef.current.lightX = lerp(currentRef.current.lightX, targetRef.current.lightX, t);
    currentRef.current.lightY = lerp(currentRef.current.lightY, targetRef.current.lightY, t);

    const { rotX, rotY, lightX, lightY } = currentRef.current;

    inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;

    if (light) {
      light.style.background = `radial-gradient(circle at ${lightX}% ${lightY}%, ${glowColor} 0%, transparent 65%)`;
      light.style.opacity = isHoveredRef.current ? '1' : '0';
    }

    // Continue animating if not fully rested
    const notAtRest =
      Math.abs(currentRef.current.rotX) > 0.01 ||
      Math.abs(currentRef.current.rotY) > 0.01;

    if (notAtRest || isHoveredRef.current) {
      rafRef.current = requestAnimationFrame(anim);
    }
  }, [glowColor]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || reducedRef.current || isTouchRef.current) return;

      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Clamp to 0–1, map to -effectiveMaxTilt..+effectiveMaxTilt
      targetRef.current.rotX = -(y - 0.5) * 2 * effectiveMaxTilt;
      targetRef.current.rotY = (x - 0.5) * 2 * effectiveMaxTilt;
      targetRef.current.lightX = x * 100;
      targetRef.current.lightY = y * 100;
    },
    [disabled, effectiveMaxTilt]
  );

  const handleMouseEnter = useCallback(() => {
    if (disabled || reducedRef.current) return;
    isHoveredRef.current = true;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [disabled, animate]);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    targetRef.current = { rotX: 0, rotY: 0, lightX: 50, lightY: 50 };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const handleTouchStart = useCallback(() => {
    isTouchRef.current = true;
  }, []);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="card-3d-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      style={{ display: 'contents' }}
    >
      <div
        ref={innerRef}
        className={`card-3d-inner relative ${className}`}
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        {/* Dynamic light reflection overlay */}
        <div
          ref={lightRef}
          className="card-3d-light"
          aria-hidden="true"
        />
        {children}
      </div>
    </div>
  );
};
