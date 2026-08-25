import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
  className?: string;
  id?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  titleClassName = '',
  className = '',
  id,
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`} id={id}>
      {eyebrow && (
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-nox-cyan">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] text-nox-text ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className="text-nox-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
