import React, { useEffect, useState } from 'react';

interface AccentHaloProps {
  children: React.ReactNode;
  className?: string;
  /** Intensity of the breathing halo glow */
  intensity?: 'subtle' | 'normal' | 'strong';
  /** If true, halo is completely disabled */
  disabled?: boolean;
}

/**
 * AccentHalo — Effect 3 of 3
 *
 * An ambient breathing accent glow anchored directly behind primary CTA buttons.
 * Uses two staggered pseudo-layers with CSS keyframe animation (scale + opacity).
 * Distinct from AmbientOrb: this is tightly bound to an action component, with
 * dual-layer oscillation and zero layout footprint.
 *
 * Protected behavior:
 * - pointer-events: none on decorative layers (CTAs remain fully interactive)
 * - aria-hidden="true" on decorative glow elements
 * - Respects prefers-reduced-motion and data-reduced-motion
 */
export const AccentHalo: React.FC<AccentHaloProps> = ({
  children,
  className = '',
  intensity = 'normal',
  disabled = false,
}) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkMotion = () => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const dataAttr = document.documentElement.getAttribute('data-reduced-motion') === 'true';
      setReducedMotion(prefersReduced || dataAttr);
    };

    checkMotion();

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => checkMotion();
    mq.addEventListener('change', handler);

    const observer = new MutationObserver(checkMotion);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-reduced-motion'],
    });

    return () => {
      mq.removeEventListener('change', handler);
      observer.disconnect();
    };
  }, []);

  if (disabled) {
    return <>{children}</>;
  }

  const opacityMultiplier = {
    subtle: 'opacity-60',
    normal: 'opacity-100',
    strong: 'opacity-130',
  }[intensity];

  return (
    <div className={`accent-halo-wrapper inline-flex relative ${className}`}>
      {!reducedMotion ? (
        <>
          <div
            aria-hidden="true"
            className={`accent-halo-layer1 ${opacityMultiplier}`}
          />
          <div
            aria-hidden="true"
            className={`accent-halo-layer2 ${opacityMultiplier}`}
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-[-20%] rounded-full bg-blue-500/15 blur-xl pointer-events-none -z-10"
        />
      )}
      {children}
    </div>
  );
};

export default AccentHalo;
