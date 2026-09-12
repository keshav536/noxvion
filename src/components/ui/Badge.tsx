import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'dim';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variantClasses = {
    default: 'bg-[#EFF6FF] border border-[#BBD3F2] text-[#1E3A8A]',
    cyan: 'bg-[#EFF6FF] border border-[#3B82F6] text-[#1E3A8A]',
    dim: 'bg-[#F8FAFC] border border-[#D9E7F5] text-[#627D98]',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase ${variantClasses[variant]} ${className}`}
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
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase border ${
        accent
          ? 'bg-[#EFF6FF] border-[#3B82F6] text-[#1E3A8A]'
          : 'bg-[#F8FAFC] border-[#D9E7F5] text-[#334E68]'
      }`}
    >
      {accent && <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] block" aria-hidden="true" />}
      {label}
    </span>
  );
};
