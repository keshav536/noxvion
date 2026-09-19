import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Brain, Code2, Wifi, Settings2, FlaskConical, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Badge, TechBadge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Card3D } from '../../components/effects/Card3D';
import { AmbientScene } from '../../components/effects/AmbientOrb';
import { MagneticButton } from '../../components/effects/MagneticButton';
import { AccentHalo } from '../../components/effects/AccentHalo';
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
      <section className="relative py-20 md:py-28 bg-black text-white border-b border-white/10 overflow-hidden" aria-label="Solution Hero">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none -z-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <div className="flex items-center gap-3 mb-4 font-mono">
            <Link to="/solutions" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 hover:text-white transition-colors">
              SOLUTIONS
            </Link>
            <span className="text-zinc-600 text-xs">/</span>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400">
              {solution.id}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6">
                {solution.title}
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                {solution.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton strength={8}>
                  <AccentHalo intensity="normal">
                    <Button to="/contact" variant="primary" size="md">
                      {solution.cta}
                    </Button>
                  </AccentHalo>
                </MagneticButton>
                <Button to="/solutions" variant="secondary" size="md">
                  View All Solutions
                </Button>
              </div>
            </div>

            {/* Right Tech Card with 3D Depth */}
            <div className="lg:col-span-4">
              <Card3D intensity="low" glowColor="rgba(59, 130, 246, 0.15)">
                <div className="bg-[#0e0e12] text-white border border-white/10 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.8)] rounded-2xl">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon size={18} className="text-blue-400" />
                      <span className="text-xs font-mono font-bold text-white">{solution.id} SPEC</span>
                    </div>
                    <Badge variant="cyan">PRODUCTION</Badge>
                  </div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 font-semibold mb-3">
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
      <section className="nox-section border-b border-white/10 bg-[#070709]" aria-label="Core Capabilities">
        <div className="nox-container">
          <SectionHeader
            eyebrow="CAPABILITY SPECIFICATION"
            title="Core Technical Capabilities"
            description="Production-grade engineering standards designed to meet high-concurrency and mission-critical specifications."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.capabilities.map((cap, i) => (
              <Card3D key={i} intensity="low" glowColor="rgba(59, 130, 246, 0.12)" className="h-full">
                <div className="h-full bg-[#0e0e12] border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-blue-500/40 hover:shadow-[0_16px_36px_rgba(59,130,246,0.12)] transition-all duration-300">
                  <div className="p-2.5 rounded-lg border border-white/10 bg-white/[0.04] text-blue-400 shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-zinc-500 font-semibold">CAP-{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{cap}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
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
      <section className="nox-section border-b border-white/10 bg-black" aria-label="Technology Matrix">
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
                className="bg-[#0e0e12] border border-white/10 rounded-xl p-5 text-center flex flex-col items-center justify-center gap-2 hover:border-blue-500/40 hover:shadow-[0_8px_20px_rgba(59,130,246,0.1)] transition-all duration-200"
              >
                <Terminal size={20} className="text-blue-400 mb-1" />
                <span className="text-sm font-bold text-white">{tool}</span>
                <span className="text-[10px] font-mono text-zinc-500 font-semibold">STABLE</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATION CTA ── */}
      <section className="nox-section bg-black text-white relative overflow-hidden border-t border-white/10" aria-label="Solution CTA">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.16) 0%, transparent 70%)',
          }}
        />

        <AmbientScene variant="cta" />
        <div className="nox-container text-center relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4 font-mono">
            INITIATE DEPLOYMENT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto">
            Ready to integrate {solution.title}?
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Engage directly with our engineering syndicate to scope architecture, prototyping timeline, and integration milestones.
          </p>
          <MagneticButton strength={10}>
            <AccentHalo intensity="normal">
              <Button to="/contact" variant="primary" size="lg">
                {solution.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </AccentHalo>
          </MagneticButton>
        </div>
      </section>
    </PageContainer>
  );
};
