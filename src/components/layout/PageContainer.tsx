import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-nox-base">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-[70px]" id="main-content" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};
