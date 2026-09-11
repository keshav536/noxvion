import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Brain, Code2, Wifi, Settings2, FlaskConical, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Badge, TechBadge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Card3D } from '../../components/effects/Card3D';
import { AmbientScene } from '../../components/effects/AmbientOrb';
import { useSEO } from '../../hooks/useSEO';
import { solutions } from '../../data/solutions';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Wifi,
  Settings2,
  FlaskConical,
};

interface SolutionDetailPageProps {
  customSlug?: string;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ customSlug }) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const slug = customSlug || routeSlug;

  const solution = solutions.find((s) => s.slug === slug);

  useSEO({
    title: solution ? `${solution.title} — NOXVION Solutions` : 'Solutions — NOXVION',
    description: solution?.description || 'Engineered solutions across computing, intelligence, and edge architectures.',
  });

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const Icon = iconMap[solution.icon] || Brain;

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 grid-bg border-b border-nox-border overflow-hidden" aria-label="Solution Hero">
        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/solutions" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-text-dim hover:text-nox-cyan transition-colors">
              SOLUTIONS
            </Link>
            <span className="text-nox-text-dim text-xs">/</span>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan">
              {solution.id}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-nox-text mb-6">
                {solution.title}
              </h1>
              <p className="text-nox-text-muted text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="md">
                  {solution.cta}
                </Button>
                <Button to="/solutions" variant="secondary" size="md">
                  View All Solutions
                </Button>
              </div>
            </div>

            {/* Right Tech Card with 3D Depth */}
            <div className="lg:col-span-4">
              <Card3D intensity="low" glowColor="rgba(0, 240, 255, 0.12)">
                <div className="bg-nox-layer border border-nox-border p-6 shadow-card rounded-sm">
                  <div className="flex items-center justify-between border-b border-nox-border/60 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon size={18} className="text-nox-cyan" />
                      <span className="text-xs font-mono text-nox-text">{solution.id} SPEC</span>
                    </div>
                    <Badge variant="cyan">PRODUCTION</Badge>
                  </div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-nox-text-dim mb-3">
                    INTEGRATED TOOLSET
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.tools.map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ── */}
      <section className="nox-section border-b border-nox-border" aria-label="Core Capabilities">
        <div className="nox-container">
          <SectionHeader
            eyebrow="CAPABILITY SPECIFICATION"
            title="Core Technical Capabilities"
            description="Production-grade engineering standards designed to meet high-concurrency and mission-critical specifications."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.capabilities.map((cap, i) => (
              <Card3D key={i} intensity="low" glowColor="rgba(0, 240, 255, 0.08)" className="h-full">
                <div className="h-full bg-nox-layer border border-nox-border p-6 flex items-start gap-4 hover:border-nox-border-active transition-colors">
                  <div className="p-2 border border-nox-border bg-nox-base text-nox-cyan shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-nox-text-dim">CAP-{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-base font-semibold text-nox-text mb-1">{cap}</h3>
                    <p className="text-xs text-nox-text-muted leading-relaxed">
                      Engineered according to rigorous validation benchmarks, failsafe redundancies, and clean modular APIs.
                    </p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY MATRIX ── */}
      <section className="nox-section border-b border-nox-border bg-nox-layer/20" aria-label="Technology Matrix">
        <div className="nox-container">
          <SectionHeader
            eyebrow="STACK INTEGRATION"
            title="Primary Toolchain & Frameworks"
            className="mb-10"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {solution.tools.map((tool) => (
              <div
                key={tool}
                className="bg-nox-base border border-nox-border p-5 text-center flex flex-col items-center justify-center gap-2 hover:border-nox-cyan/40 transition-colors"
              >
                <Terminal size={20} className="text-nox-cyan mb-1" />
                <span className="text-sm font-semibold text-nox-text">{tool}</span>
                <span className="text-[10px] font-mono text-nox-text-dim">STABLE</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATION CTA ── */}
      <section className="nox-section" aria-label="Solution CTA">
        <div className="nox-container text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4">
            INITIATE DEPLOYMENT
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-nox-text mb-4 max-w-2xl mx-auto">
            Ready to integrate {solution.title}?
          </h2>
          <p className="text-nox-text-muted text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Engage directly with our engineering syndicate to scope architecture, prototyping timeline, and integration milestones.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            {solution.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};
