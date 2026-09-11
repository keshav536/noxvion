import React from 'react';

interface AmbientOrbProps {
  /** Color of the orb (CSS color) */
  color?: string;
  /** Size in pixels */
  size?: number;
  /** Position — top offset */
  top?: string;
  /** Position — left offset */
  left?: string;
  /** Position — right offset */
  right?: string;
  /** Position — bottom offset */
  bottom?: string;
  /** Opacity (0–1) */
  opacity?: number;
  /** Animation delay in seconds */
  delay?: number;
  /** Blur radius in pixels */
  blur?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AmbientOrb — CSS-only atmospheric background glow.
 * Pure decorative. Reduced-motion: static, no animation.
 * Very low opacity — purely atmospheric depth.
 */
export const AmbientOrb: React.FC<AmbientOrbProps> = ({
  color = '#00F0FF',
  size = 400,
  top,
  left,
  right,
  bottom,
  opacity = 0.06,
  delay = 0,
  blur = 80,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`absolute pointer-events-none select-none ambient-orb ${className}`}
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        filter: `blur(${blur}px)`,
        animationDelay: `${delay}s`,
        willChange: 'opacity, transform',
        ...style,
      }}
    />
  );
};

interface AmbientSceneProps {
  variant?: 'hero' | 'section' | 'cta' | 'subtle';
  className?: string;
}

/**
 * AmbientScene — preset orb combinations for common section types.
 */
export const AmbientScene: React.FC<AmbientSceneProps> = ({
  variant = 'section',
  className = '',
}) => {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        {/* Primary glow — top right */}
        <AmbientOrb
          size={600}
          top="-15%"
          right="-10%"
          opacity={0.07}
          blur={100}
          delay={0}
        />
        {/* Secondary glow — bottom left */}
        <AmbientOrb
          size={400}
          bottom="-5%"
          left="-5%"
          opacity={0.04}
          blur={80}
          delay={2}
        />
        {/* Accent node — center right */}
        <AmbientOrb
          size={200}
          top="40%"
          right="20%"
          opacity={0.05}
          blur={60}
          delay={1}
        />
      </div>
    );
  }

  if (variant === 'cta') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        {/* Central glow */}
        <AmbientOrb
          size={500}
          top="50%"
          left="50%"
          opacity={0.06}
          blur={120}
          style={{ transform: 'translate(-50%, -50%)' } as React.CSSProperties}
        />
        <AmbientOrb
          size={300}
          top="30%"
          left="40%"
          opacity={0.04}
          blur={80}
          delay={1.5}
        />
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        <AmbientOrb
          size={300}
          top="20%"
          right="10%"
          opacity={0.04}
          blur={80}
          delay={0.5}
        />
      </div>
    );
  }

  // Default 'section' variant
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <AmbientOrb
        size={400}
        top="-10%"
        left="-5%"
        opacity={0.05}
        blur={90}
        delay={0}
      />
      <AmbientOrb
        size={300}
        bottom="-10%"
        right="-5%"
        opacity={0.04}
        blur={70}
        delay={2.5}
      />
    </div>
  );
};
