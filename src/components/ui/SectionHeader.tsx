import React from 'react';
import { FoldText } from '../effects/FoldText';

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
  useFoldText = false,
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className}`} id={id}>
      {eyebrow && (
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-400 font-mono">
          {eyebrow}
        </p>
      )}
      {useFoldText ? (
        <FoldText
          as="h2"
          splitBy="word"
          hinge="top"
          trigger="scroll"
          className={`text-3xl md:text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white ${titleClassName}`}
        >
          {title}
        </FoldText>
      ) : (
        <h2 className={`text-3xl md:text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white ${titleClassName}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
