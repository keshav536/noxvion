import React, { useEffect, useRef, useState, useMemo } from 'react';
import './TargetCursor.css';

export interface TargetCursorProps {
  dotSize?: number;
  ringSize?: number;
}

export const TargetCursor: React.FC<TargetCursorProps> = ({
  dotSize = 12,
  ringSize = 32,
}) => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Check touch / mobile capability
  const isTouchDevice = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches
    );
  }, []);

  useEffect(() => {
    // If on a touch device or window is undefined, don't initialize custom cursor
    if (isTouchDevice || typeof window === 'undefined') return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'true';

    document.body.classList.add('has-custom-cursor');

    // Positions: target (mouse) and current (trailing ring)
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const lerpFactor = prefersReducedMotion ? 1 : 0.18; // ~0.15s ease

    const renderLoop = () => {
      if (prefersReducedMotion) {
        ringX = targetX;
        ringY = targetY;
      } else {
        ringX += (targetX - ringX) * lerpFactor;
        ringY += (targetY - ringY) * lerpFactor;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      setIsVisible(true);

      // Check if hovering an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, select, textarea, [role="button"], .cursor-target, .nox-card, [data-interactive]'
        );
        setIsHovering(Boolean(interactive));
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    rafId = requestAnimationFrame(renderLoop);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      className="custom-cursor-container"
      aria-hidden="true"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.25s ease' }}
    >
      {/* Outer trailing soft ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovering ? 'is-hovering' : ''}`}
        style={{
          width: ringSize,
          height: ringSize,
          marginTop: -ringSize / 2,
          marginLeft: -ringSize / 2,
        }}
      />

      {/* Inner royal blue dot */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovering ? 'is-hovering' : ''}`}
        style={{
          width: dotSize,
          height: dotSize,
          marginTop: -dotSize / 2,
          marginLeft: -dotSize / 2,
        }}
      />
    </div>
  );
};

export default TargetCursor;
