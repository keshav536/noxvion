import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Code2, Wifi, Settings2, FlaskConical, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
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
      <section className="relative py-20 md:py-28 border-b border-nox-border grid-bg overflow-hidden" aria-label="Solutions overview">
        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4">
            NOXVION / CAPABILITY DIRECTORY
          </p>
          <FoldText
            as="h1"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-nox-text mb-6 max-w-4xl"
          >
            Technology Systems Built for{' '}
            <span className="text-nox-cyan">Real-World Problems</span>
          </FoldText>
          <p className="text-nox-text-muted text-base md:text-xl leading-relaxed max-w-3xl">
            Engineering precision solutions across domains. We architect systems that scale,
            secure, and optimize complex operations.
          </p>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section className="nox-section" aria-label="Solutions list">
        <div className="nox-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, index) => {
              const Icon = iconMap[sol.icon] || Brain;
              const isLarge = index === 1; // Web & Software can take 2 cols on lg if desired, or 3-col uniform

              return (
                <Card3D
                  key={sol.id}
                  intensity="low"
                  glowColor="rgba(0, 240, 255, 0.08)"
                  className={`h-full ${isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="h-full bg-nox-layer border border-nox-border hover:border-nox-border-active transition-all duration-300 p-8 flex flex-col justify-between group"
                  >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-10 h-10 border border-nox-border bg-nox-base flex items-center justify-center text-nox-cyan">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <div className="flex items-center gap-3">
                        {sol.tags &&
                          sol.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] tracking-widest font-mono text-nox-text-dim uppercase border border-nox-border px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        <span className="text-[11px] font-mono font-semibold tracking-widest text-nox-cyan">
                          {sol.id}
                        </span>
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <h2 className="text-xl md:text-2xl font-semibold text-nox-text mb-4 group-hover:text-nox-cyan transition-colors duration-200">
                      {sol.title}
                    </h2>
                    <p className="text-sm md:text-base text-nox-text-muted leading-relaxed mb-6">
                      {sol.description}
                    </p>

                    {/* Core Capabilities */}
                    <div className="mb-6">
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-nox-text-dim mb-3">
                        CAPABILITY PARAMETERS
                      </p>
                      <ul className="space-y-2">
                        {sol.capabilities.map((cap, cIdx) => (
                          <li key={cIdx} className="text-xs text-nox-text flex items-start gap-2">
                            <span className="text-nox-cyan mt-0.5">•</span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Tools & CTA */}
                  <div className="pt-6 border-t border-nox-border mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {sol.tools.map((t) => (
                        <Badge key={t} variant="dim">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <Link
                      to={`/solutions/${sol.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-nox-cyan hover:text-nox-text transition-colors duration-200"
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
      <section className="relative nox-section border-t border-nox-border bg-nox-layer/30 overflow-hidden">
        <AmbientScene variant="cta" />
        <div className="nox-container relative z-10 text-center">
          <SectionHeader
            align="center"
            eyebrow="BESPOKE ARCHITECTURE"
            title="Require Custom Engineering Integration?"
            description="Our multi-disciplinary team collaborates directly with technical leadership to architect, prototype, and scale specialized solutions."
            className="mb-8"
          />
          <Button to="/contact" variant="primary" size="lg">
            Request Solution Integration
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};
