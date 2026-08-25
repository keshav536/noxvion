import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'dim';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variantClasses = {
    default: 'bg-nox-layer border border-nox-border text-nox-text-muted',
    cyan: 'bg-nox-cyan/10 border border-nox-cyan/30 text-nox-cyan',
    dim: 'bg-nox-border/30 border border-transparent text-nox-text-dim',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

interface TechBadgeProps {
  label: string;
  accent?: boolean;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ label, accent = false }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase border ${
        accent
          ? 'bg-nox-cyan/10 border-nox-cyan/40 text-nox-cyan'
          : 'bg-nox-layer border-nox-border text-nox-text-muted'
      }`}
    >
      {accent && <span className="w-1.5 h-1.5 bg-nox-cyan block" aria-hidden="true" />}
      {label}
    </span>
  );
};
