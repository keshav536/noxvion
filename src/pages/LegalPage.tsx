import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { useSEO } from '../hooks/useSEO';

interface LegalPageProps {
  title: string;
  eyebrow: string;
  content: string[];
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, eyebrow, content }) => {
  useSEO({
    title: `${title} — NOXVION`,
    description: `Official ${title} and regulatory compliance standards for NOXVION technology operations.`,
  });

  return (
    <PageContainer>
      <section className="py-20 md:py-28 border-b border-white/10 bg-black text-white relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none -z-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xs font-mono text-zinc-500">VERSION 1.0.4 // EFFECTIVE 2024</p>
        </div>
      </section>

      <section className="nox-section bg-[#070709]">
        <div className="nox-container max-w-4xl">
          <div className="bg-[#0e0e12] border border-white/10 rounded-2xl p-8 md:p-12 space-y-6 text-sm text-zinc-300 leading-relaxed shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
            {content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
