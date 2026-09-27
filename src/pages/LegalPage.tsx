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
    <PageContainer className="bg-white">
      <section className="py-16 md:py-24 border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] text-[#0A2540] relative overflow-hidden">
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] mb-4 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4">{title}</h1>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">VERSION 2.0 // GOVERNANCE DOCUMENT</p>
        </div>
      </section>

      <section className="nox-section bg-[#F8FAFC]">
        <div className="nox-container max-w-4xl">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 space-y-6 text-sm text-[#4A6080] leading-relaxed shadow-sm">
            {content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
