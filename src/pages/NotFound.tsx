import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';

export const NotFound: React.FC = () => {
  useSEO({
    title: '404 // Node Not Found — NOXVION',
    description: 'The requested resource or node coordinates cannot be resolved within the Noxvion system.',
  });

  return (
    <PageContainer>
      <section className="min-h-[70vh] flex items-center justify-center grid-bg py-20">
        <div className="nox-container text-center max-w-xl">
          <div className="w-16 h-16 border border-nox-cyan/40 bg-nox-layer flex items-center justify-center text-nox-cyan mx-auto mb-6">
            <AlertTriangle size={28} />
          </div>

          <p className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-2">
            ERR_CODE // 404
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-nox-text mb-4">
            Node Not Found
          </h1>
          <p className="text-nox-text-muted text-base leading-relaxed mb-8">
            The telemetry coordinate or page URL you requested is unresolved or has been relocated within the network architecture.
          </p>

          <div className="flex justify-center gap-4">
            <Button to="/" variant="primary" size="md">
              <ArrowLeft size={16} />
              Return to System Root
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
