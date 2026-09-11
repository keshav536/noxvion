/**
 * NewSvgPathDraw — NEW-04
 * ─────────────────────────────────────────────────────────────────
 * Decorative SVG path that draws itself once when its section
 * enters the viewport.
 *
 * NEW EFFECT — confirmed absent from codebase after audit 2026-09-11.
 * Protected existing effects must not be modified.
 *
 * Implementation notes:
 * - Uses IntersectionObserver (threshold 0.4, once: true)
 * - stroke-dashoffset technique via CSS class toggle
 * - Path length measured via getTotalLength() → CSS custom property
 * - GPU-only: only stroke-dashoffset and opacity are animated
 * - Respects prefers-reduced-motion and data-reduced-motion
 * - Cleans up observer on unmount
 * - No global scroll listeners
 * - aria-hidden: purely decorative
 */

import React, { useRef, useEffect } from 'react';
import '../../styles/new-effects.css';

interface NewSvgPathDrawProps {
  className?: string;
}

export const NewSvgPathDraw: React.FC<NewSvgPathDrawProps> = ({ className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    // Respect reduced motion — show complete path statically, no animation
    const isReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'true';

    if (isReduced) {
      // Static: show path fully drawn, no dashoffset animation
      path.style.strokeDasharray = 'none';
      path.style.strokeDashoffset = '0';
      path.style.opacity = '0.5';
      return;
    }

    // Measure path length and apply to CSS custom property
    const pathLength = path.getTotalLength();
    path.style.setProperty('--new-path-length', String(pathLength));

    // IntersectionObserver — trigger once when 40% of SVG enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.classList.add('new-svg-is-visible');
          observer.unobserve(svg);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(svg);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    /*
     * The SVG acts as a visual section accent — a single flowing
     * geometric line consistent with the existing NOXVION design language
     * (angular, circuit-like, cyan stroke).
     */
    <svg
      ref={svgRef}
      viewBox="0 0 900 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full block pointer-events-none select-none ${className}`}
      aria-hidden="true"
      role="presentation"
      style={{ overflow: 'visible' }}
    >
      {/* Circuit-trace decorative path — angular, brand-consistent */}
      <path
        ref={pathRef}
        d="M 0 24 L 60 24 L 80 6 L 140 6 L 160 24 L 380 24 L 400 38 L 420 24 L 500 24 L 520 6 L 580 6 L 600 24 L 840 24 L 860 38 L 880 24 L 900 24"
        stroke="rgba(0,240,255,0.35)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="new-svg-draw-path"
        aria-hidden="true"
      />
      {/* Accent nodes at the angular peaks */}
      <circle cx="80"  cy="6"  r="2" fill="rgba(0,240,255,0.5)" aria-hidden="true" />
      <circle cx="160" cy="24" r="2" fill="rgba(0,240,255,0.3)" aria-hidden="true" />
      <circle cx="400" cy="38" r="2" fill="rgba(0,240,255,0.5)" aria-hidden="true" />
      <circle cx="520" cy="6"  r="2" fill="rgba(0,240,255,0.3)" aria-hidden="true" />
      <circle cx="860" cy="38" r="2" fill="rgba(0,240,255,0.5)" aria-hidden="true" />
    </svg>
  );
};
