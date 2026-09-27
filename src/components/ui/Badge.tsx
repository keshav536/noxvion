import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'dim';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variantClasses = {
    default: 'bg-blue-50 border border-blue-200/80 text-[#1E3A8A]',
    cyan: 'bg-sky-50 border border-sky-200 text-[#0284C7]',
    dim: 'bg-slate-100 border border-slate-200 text-slate-700',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase font-mono ${variantClasses[variant]} ${className}`}
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
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase font-mono border ${
        accent
          ? 'bg-blue-50 border-blue-200 text-[#1E3A8A]'
          : 'bg-slate-50 border-slate-200 text-slate-700'
      }`}
    >
      {accent && <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] block" aria-hidden="true" />}
      {label}
    </span>
  );
};
