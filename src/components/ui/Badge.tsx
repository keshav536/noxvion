import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'dim';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variantClasses = {
    default: 'bg-blue-500/10 border border-blue-500/30 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.15)]',
    cyan: 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.15)]',
    dim: 'bg-white/[0.05] border border-white/10 text-zinc-400',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase font-mono ${variantClasses[variant]} ${className}`}
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
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase font-mono border ${
        accent
          ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.15)]'
          : 'bg-white/[0.04] border-white/10 text-zinc-400'
      }`}
    >
      {accent && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)] block" aria-hidden="true" />}
      {label}
    </span>
  );
};
