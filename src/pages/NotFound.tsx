import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';

export const NotFound: React.FC = () => {
  useSEO({
    title: '404 — Page Not Found | NOXVION',
    description: 'The requested resource cannot be found within the Noxvion system.',
  });

  return (
    <PageContainer className="bg-white">
      <section className="min-h-[75vh] flex items-center justify-center bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] py-20 relative overflow-hidden text-[#0A2540]">
        <div className="nox-container text-center max-w-xl relative z-10">
          <div className="w-16 h-16 rounded-2xl border border-blue-200 bg-blue-50 flex items-center justify-center text-[#1E3A8A] mx-auto mb-6 shadow-sm">
            <AlertTriangle size={30} />
          </div>

          <p className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#1E3A8A] mb-2">
            ERROR 404
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
            Page Not Found
          </h1>
          <p className="text-[#4A6080] text-base leading-relaxed mb-8">
            The page you requested could not be located or has been relocated to another section of the site.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button to="/" variant="primary" size="md">
              <ArrowLeft size={16} />
              Return to Home
            </Button>
            <Button to="/solutions" variant="secondary" size="md">
              Browse Solutions
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default NotFound;
