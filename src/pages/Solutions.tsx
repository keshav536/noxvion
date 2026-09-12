import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code2, Wifi, Settings2, FlaskConical, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { FoldText } from '../components/effects/FoldText';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
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
    <PageContainer>
      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 border-b border-[#D9E7F5]/20 bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_60%,#3B82F6_100%)] text-white overflow-hidden" aria-label="Solutions overview">
        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-4">
            NOXVION / CAPABILITY DIRECTORY
          </p>
          <FoldText
            as="h1"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6 max-w-4xl"
          >
            Technology Systems Built for{' '}
            <span className="text-[#60A5FA]">Real-World Problems</span>
          </FoldText>
          <p className="text-[#D9E7F5] text-base md:text-xl leading-relaxed max-w-3xl">
            Engineering precision solutions across domains. We architect systems that scale,
            secure, and optimize complex operations.
          </p>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section className="nox-section bg-[#F8FAFC]" aria-label="Solutions list">
        <div className="nox-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, index) => {
              const Icon = iconMap[sol.icon] || Brain;
              const isLarge = index === 1; // Web & Software can take 2 cols on lg if desired, or 3-col uniform

              return (
                <Card3D
                  key={sol.id}
                  intensity="low"
                  glowColor="rgba(59, 130, 246, 0.08)"
                  className={`h-full ${isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="h-full bg-white border border-[#D9E7F5] rounded-2xl hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group shadow-[0_12px_30px_rgba(10,37,64,0.06)]"
                  >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-12 h-12 rounded-xl border border-[#BBD3F2] bg-[#EFF6FF] flex items-center justify-center text-[#1E3A8A]">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <div className="flex items-center gap-3">
                        {sol.tags &&
                          sol.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] tracking-widest font-mono text-[#334E68] uppercase border border-[#D9E7F5] bg-[#F8FAFC] px-2.5 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        <span className="text-[11px] font-mono font-bold tracking-widest text-[#1E3A8A]">
                          {sol.id}
                        </span>
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <h2 className="text-xl md:text-2xl font-bold text-[#0A2540] mb-4 group-hover:text-[#1E3A8A] transition-colors duration-200">
                      {sol.title}
                    </h2>
                    <p className="text-sm md:text-base text-[#334E68] leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    {/* Core Capabilities */}
                    <div className="mb-6">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-[#627D98] mb-3">
                        CAPABILITY PARAMETERS
                      </p>
                      <ul className="space-y-2">
                        {sol.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="text-xs text-[#334E68] flex items-start gap-2">
                            <span className="text-[#1E3A8A] font-bold mt-0.5">•</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Tools & CTA */}
                  <div className="pt-6 border-t border-[#D9E7F5] mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {sol.tools.map((t) => (
                        <Badge key={t} variant="cyan">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <Link
                      to={`/solutions/${sol.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1E3A8A] hover:text-[#3B82F6] transition-colors duration-200"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative nox-section border-t border-[#D9E7F5] bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_100%)] text-white overflow-hidden">
        <AmbientScene variant="cta" />
        <div className="nox-container relative z-10 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-3">
            BESPOKE ARCHITECTURE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto">
            Require Custom Engineering Integration?
          </h2>
          <p className="text-[#D9E7F5] text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Our multi-disciplinary team collaborates directly with technical leadership to architect, prototype, and scale specialized solutions.
          </p>
          <Button to="/contact" variant="primary" size="lg" className="!bg-white !text-[#0A2540] hover:!bg-[#EFF6FF] shadow-lg">
            Request Solution Integration
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};
