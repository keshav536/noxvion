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
    'bg-[#1E3A8A] text-white font-semibold border border-[#1E3A8A] hover:bg-[#3B82F6] hover:border-[#3B82F6] shadow-[0_4px_14px_rgba(30,58,138,0.2)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] active:scale-[0.98]',
  secondary:
    'bg-white text-[#1E3A8A] border border-[#1E3A8A] hover:bg-[#EFF6FF] hover:border-[#3B82F6] hover:text-[#1E3A8A] active:scale-[0.98]',
  ghost:
    'bg-transparent text-[#334E68] border border-transparent hover:text-[#1E3A8A] hover:bg-[#EFF6FF] active:scale-[0.98]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs tracking-widest uppercase',
  md: 'px-6 py-3 text-xs tracking-widest uppercase',
  lg: 'px-8 py-4 text-sm tracking-widest uppercase',
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
    'inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2';
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
