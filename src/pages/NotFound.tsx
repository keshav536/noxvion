import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { MagneticButton } from '../components/effects/MagneticButton';
import { AccentHalo } from '../components/effects/AccentHalo';
import { useSEO } from '../hooks/useSEO';

export const NotFound: React.FC = () => {
  useSEO({
    title: '404 // Node Not Found — NOXVION',
    description: 'The requested resource or node coordinates cannot be resolved within the Noxvion system.',
  });

  return (
    <PageContainer>
      <section className="min-h-[75vh] flex items-center justify-center bg-black py-20 relative overflow-hidden text-white">
        {/* Subtle radial ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="nox-container text-center max-w-xl relative z-10">
          <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-blue-400 mx-auto mb-6 shadow-[0_0_24px_rgba(59,130,246,0.25)]">
            <AlertTriangle size={32} />
          </div>

          <p className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">
            ERR_CODE // 404
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Node Not Found
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed mb-8">
            The telemetry coordinate or page URL you requested is unresolved or has been relocated within the network architecture.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <MagneticButton strength={8}>
              <AccentHalo intensity="normal">
                <Button to="/" variant="primary" size="md">
                  <ArrowLeft size={16} />
                  Return to System Root
                </Button>
              </AccentHalo>
            </MagneticButton>
            <Button to="/solutions" variant="secondary" size="md">
              Browse Solutions
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
