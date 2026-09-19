import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <main className={`flex-1 pt-16 md:pt-[72px] bg-black text-white ${className}`} id="main-content" role="main">
      {children}
    </main>
  );
};
