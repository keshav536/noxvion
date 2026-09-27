import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Brain, Code2, Wifi, Settings2, FlaskConical, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { Badge, TechBadge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
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
    <PageContainer className="bg-white">
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
        aria-label="Solution Hero"
      >
        <div className="nox-container relative z-10">
          <div className="flex items-center gap-2 mb-5 font-mono">
            <Link
              to="/solutions"
              className="text-xs font-semibold tracking-wider uppercase text-[#1E3A8A] hover:underline"
            >
              SOLUTIONS
            </Link>
            <span className="text-slate-400 text-xs">/</span>
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-500">
              {solution.id}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0A2540] mb-5">
                {solution.title}
              </h1>
              <p className="text-[#4A6080] text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
                {solution.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary" size="md">
                  {solution.cta}
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>
                <Button to="/solutions" variant="secondary" size="md">
                  View All Solutions
                </Button>
              </div>
            </div>

            {/* Right Tech Card */}
            <div className="lg:col-span-4">
              <div className="nox-card p-6 bg-white border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Icon size={20} className="text-[#1E3A8A]" />
                    <span className="text-xs font-mono font-bold text-[#0A2540]">
                      {solution.id} SPEC
                    </span>
                  </div>
                  <Badge variant="default">PRODUCTION</Badge>
                </div>

                <p className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-semibold mb-3">
                  INTEGRATED TOOLSET
                </p>
                <div className="flex flex-wrap gap-2">
                  {solution.tools.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ── */}
      <section className="nox-section border-b border-slate-200/80 bg-[#F8FAFC]" aria-label="Core Capabilities">
        <div className="nox-container">
          <SectionHeader
            eyebrow="CAPABILITY SPECIFICATION"
            title="Core Technical Capabilities"
            description="Production-grade engineering standards designed to meet high-concurrency and mission-critical specifications."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.capabilities.map((cap, i) => (
              <div
                key={i}
                className="nox-card p-6 md:p-7 flex items-start gap-4 bg-white"
              >
                <div className="p-2.5 rounded-lg bg-blue-50 text-[#1E3A8A] shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold block mb-1">
                    CAP-{String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-bold text-[#0A2540] mb-1.5">{cap}</h3>
                  <p className="text-xs text-[#4A6080] leading-relaxed">
                    Engineered according to rigorous validation benchmarks, failsafe redundancies, and clean modular APIs.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY MATRIX ── */}
      <section className="nox-section border-b border-slate-200/80 bg-white" aria-label="Technology Matrix">
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
                className="nox-card p-5 text-center flex flex-col items-center justify-center gap-2 bg-[#F8FAFC]"
              >
                <Terminal size={20} className="text-[#1E3A8A] mb-1" />
                <span className="text-sm font-bold text-[#0A2540]">{tool}</span>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">VERIFIED</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATION CTA ── */}
      <section className="nox-section bg-gradient-to-b from-white to-blue-50/50 text-center" aria-label="Solution CTA">
        <div className="nox-container max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1E3A8A] mb-3 font-mono">
            DEPLOYMENT READINESS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Ready to integrate {solution.title}?
          </h2>
          <p className="text-[#4A6080] text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Engage directly with our engineering team to scope architecture, prototyping timelines, and integration milestones.
          </p>
          <div className="flex justify-center">
            <Button to="/contact" variant="primary" size="lg">
              {solution.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default SolutionDetailPage;
