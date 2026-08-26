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
      <section className="py-20 md:py-28 border-b border-nox-border grid-bg">
        <div className="nox-container">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-nox-text mb-6">{title}</h1>
          <p className="text-xs font-mono text-nox-text-dim">VERSION 1.0.4 // EFFECTIVE 2024</p>
        </div>
      </section>

      <section className="nox-section">
        <div className="nox-container max-w-4xl">
          <div className="bg-nox-layer border border-nox-border p-8 md:p-12 space-y-6 text-sm text-nox-text-muted leading-relaxed">
            {content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
