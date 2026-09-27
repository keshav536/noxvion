import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
  className?: string;
  id?: string;
  useFoldText?: boolean;
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
    <div className={`flex flex-col gap-3.5 ${alignClass} ${className}`} id={id}>
      {eyebrow && (
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] font-mono">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-[38px] font-bold leading-[1.2] tracking-[-0.02em] text-[#0A2540] ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p className="text-[#4A6080] text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
