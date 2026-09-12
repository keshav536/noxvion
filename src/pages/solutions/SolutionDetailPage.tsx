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
      <section className="relative py-20 md:py-28 bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_60%,#3B82F6_100%)] text-white border-b border-[#D9E7F5]/20 overflow-hidden" aria-label="Solution Hero">
        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/solutions" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] hover:text-white transition-colors">
              SOLUTIONS
            </Link>
            <span className="text-[#93C5FD]/60 text-xs">/</span>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white">
              {solution.id}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6">
                {solution.title}
              </h1>
              <p className="text-[#D9E7F5] text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="md" className="!bg-white !text-[#0A2540] hover:!bg-[#EFF6FF] shadow-lg">
                  {solution.cta}
                </Button>
                <Button to="/solutions" variant="secondary" size="md" className="!border-white/40 !text-white hover:!bg-white/10">
                  View All Solutions
                </Button>
              </div>
            </div>

            {/* Right Tech Card with 3D Depth */}
            <div className="lg:col-span-4">
              <Card3D intensity="low" glowColor="rgba(59, 130, 246, 0.12)">
                <div className="bg-white text-[#0A2540] border border-[#D9E7F5] p-6 shadow-2xl rounded-2xl">
                  <div className="flex items-center justify-between border-b border-[#D9E7F5] pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Icon size={18} className="text-[#1E3A8A]" />
                      <span className="text-xs font-mono font-bold text-[#0A2540]">{solution.id} SPEC</span>
                    </div>
                    <Badge variant="cyan">PRODUCTION</Badge>
                  </div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[#627D98] font-semibold mb-3">
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
      <section className="nox-section border-b border-[#D9E7F5] bg-white" aria-label="Core Capabilities">
        <div className="nox-container">
          <SectionHeader
            eyebrow="CAPABILITY SPECIFICATION"
            title="Core Technical Capabilities"
            description="Production-grade engineering standards designed to meet high-concurrency and mission-critical specifications."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.capabilities.map((cap, i) => (
              <Card3D key={i} intensity="low" glowColor="rgba(59, 130, 246, 0.08)" className="h-full">
                <div className="h-full bg-[#F8FAFC] border border-[#D9E7F5] rounded-2xl p-6 flex items-start gap-4 hover:border-[#3B82F6] hover:shadow-lg transition-all duration-300">
                  <div className="p-2.5 rounded-lg border border-[#BBD3F2] bg-[#EFF6FF] text-[#1E3A8A] shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#627D98] font-semibold">CAP-{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0A2540] mb-1">{cap}</h3>
                    <p className="text-xs text-[#334E68] leading-relaxed">
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
      <section className="nox-section border-b border-[#D9E7F5] bg-[#F8FAFC]" aria-label="Technology Matrix">
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
                className="bg-white border border-[#D9E7F5] rounded-xl p-5 text-center flex flex-col items-center justify-center gap-2 hover:border-[#3B82F6] hover:shadow-md transition-all duration-200"
              >
                <Terminal size={20} className="text-[#1E3A8A] mb-1" />
                <span className="text-sm font-bold text-[#0A2540]">{tool}</span>
                <span className="text-[10px] font-mono text-[#627D98] font-semibold">STABLE</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATION CTA ── */}
      <section className="nox-section bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_100%)] text-white" aria-label="Solution CTA">
        <div className="nox-container text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-4">
            INITIATE DEPLOYMENT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl mx-auto">
            Ready to integrate {solution.title}?
          </h2>
          <p className="text-[#D9E7F5] text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Engage directly with our engineering syndicate to scope architecture, prototyping timeline, and integration milestones.
          </p>
          <Button to="/contact" variant="primary" size="lg" className="!bg-white !text-[#0A2540] hover:!bg-[#EFF6FF] shadow-lg">
            {solution.cta}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};
