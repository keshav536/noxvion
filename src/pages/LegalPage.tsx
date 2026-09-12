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
      <section className="py-20 md:py-28 border-b border-[#D9E7F5]/20 bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_60%,#3B82F6_100%)] text-white">
        <div className="nox-container">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xs font-mono text-[#D9E7F5]">VERSION 1.0.4 // EFFECTIVE 2024</p>
        </div>
      </section>

      <section className="nox-section bg-[#F8FAFC]">
        <div className="nox-container max-w-4xl">
          <div className="bg-white border border-[#D9E7F5] rounded-2xl p-8 md:p-12 space-y-6 text-sm text-[#334E68] leading-relaxed shadow-[0_12px_30px_rgba(10,37,64,0.06)]">
            {content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
