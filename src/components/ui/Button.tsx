import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  id?: string;
  'aria-label'?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#1E3A8A] text-white font-semibold hover:bg-[#172554] shadow-sm hover:shadow transition-all duration-200 active:scale-[0.99]',
  secondary:
    'bg-white text-[#0A2540] border border-slate-200 hover:border-[#1E3A8A] hover:bg-slate-50 hover:text-[#1E3A8A] shadow-sm transition-all duration-200 active:scale-[0.99]',
  ghost:
    'bg-transparent text-[#0A2540] hover:text-[#1E3A8A] hover:bg-blue-50/60 transition-colors duration-200 active:scale-[0.99]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs tracking-wider uppercase',
  md: 'px-5 py-2.5 text-xs tracking-wider uppercase',
  lg: 'px-7 py-3.5 text-sm tracking-wider uppercase',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  id,
  'aria-label': ariaLabel,
}) => {
  const base =
    'cursor-target inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2';
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} id={id} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} id={id} className={classes} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      id={id}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {loading ? (
        <>
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true" />
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
};
