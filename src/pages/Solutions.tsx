import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code2, Wifi, Settings2, FlaskConical, ArrowRight } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';
import { solutions } from '../data/solutions';

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Wifi,
  Settings2,
  FlaskConical,
};

export const Solutions: React.FC = () => {
  useSEO({
    title: 'Solutions — Technology Systems Built for Real-World Problems',
    description:
      'Engineering precision solutions across domains. We architect systems that scale, secure, and optimize complex operations.',
  });

  return (
    <PageContainer className="bg-white">
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] text-[#0A2540] overflow-hidden"
        aria-label="Solutions overview"
      >
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] mb-4 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
            NOXVION / CAPABILITY DIRECTORY
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0A2540] mb-6 max-w-4xl">
            Technology Systems Built for{' '}
            <span className="text-[#1E3A8A]">Real-World Problems</span>
          </h1>
          <p className="text-[#4A6080] text-base md:text-xl leading-relaxed max-w-3xl">
            Engineering precision solutions across domains. We architect systems that scale,
            secure, and optimize complex real-world operations.
          </p>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section className="nox-section bg-[#F8FAFC] border-b border-slate-200/80" aria-label="Solutions list">
        <div className="nox-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, index) => {
              const Icon = iconMap[sol.icon] || Brain;
              const isLarge = index === 1;

              return (
                <div
                  key={sol.id}
                  className={`nox-card p-8 flex flex-col justify-between bg-white ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                        <Icon size={24} aria-hidden="true" />
                      </div>
                      <div className="flex items-center gap-2">
                        {sol.tags &&
                          sol.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] tracking-wider font-mono text-slate-500 uppercase bg-slate-100 px-2.5 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        <span className="text-xs font-mono font-bold text-[#1E3A8A]">
                          {sol.id}
                        </span>
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <h2 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-3">
                      {sol.title}
                    </h2>
                    <p className="text-sm md:text-base text-[#4A6080] leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    {/* Core Capabilities */}
                    <div className="mb-6">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-3 font-mono">
                        CAPABILITY PARAMETERS
                      </p>
                      <ul className="space-y-2">
                        {sol.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="text-xs text-slate-700 flex items-start gap-2">
                            <span className="text-[#1E3A8A] font-bold mt-0.5">•</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Tools & CTA */}
                  <div className="pt-6 border-t border-slate-100 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {sol.tools.map((t) => (
                        <Badge key={t} variant="default">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <Link
                      to={`/solutions/${sol.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#1E3A8A] hover:text-[#172554] font-mono"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nox-section bg-gradient-to-b from-white to-blue-50/40 text-center">
        <div className="nox-container max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1E3A8A] mb-3 font-mono">
            BESPOKE ARCHITECTURE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
            Require Custom Engineering Integration?
          </h2>
          <p className="text-[#4A6080] text-base md:text-lg mb-8 leading-relaxed">
            Our multidisciplinary team collaborates directly with technical leadership to architect, prototype, and scale specialized solutions.
          </p>
          <div className="flex justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Request Solution Integration
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Solutions;
