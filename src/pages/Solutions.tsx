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
import { MagneticButton } from '../components/effects/MagneticButton';
import { AccentHalo } from '../components/effects/AccentHalo';
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
      <section className="relative py-20 md:py-28 border-b border-white/10 bg-black text-white overflow-hidden" aria-label="Solutions overview">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none -z-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" aria-hidden="true" />
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
            <span className="text-blue-400">Real-World Problems</span>
          </FoldText>
          <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-3xl">
            Engineering precision solutions across domains. We architect systems that scale,
            secure, and optimize complex operations.
          </p>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section className="nox-section bg-[#070709]" aria-label="Solutions list">
        <div className="nox-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, index) => {
              const Icon = iconMap[sol.icon] || Brain;
              const isLarge = index === 1;

              return (
                <Card3D
                  key={sol.id}
                  intensity="low"
                  glowColor="rgba(59, 130, 246, 0.15)"
                  className={`h-full ${isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.5 }}
                    className="h-full bg-[#0e0e12] border border-white/10 rounded-2xl hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-300 p-8 flex flex-col justify-between group shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors duration-200">
                          <Icon size={22} aria-hidden="true" />
                        </div>
                        <div className="flex items-center gap-3">
                          {sol.tags &&
                            sol.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] tracking-widest font-mono text-zinc-400 uppercase border border-white/10 bg-white/[0.04] px-2.5 py-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          <span className="text-[11px] font-mono font-bold tracking-widest text-blue-400">
                            {sol.id}
                          </span>
                        </div>
                      </div>

                      {/* Title & Desc */}
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-200">
                        {sol.title}
                      </h2>
                      <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
                        {sol.description}
                      </p>

                      {/* Core Capabilities */}
                      <div className="mb-6">
                        <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mb-3 font-mono">
                          CAPABILITY PARAMETERS
                        </p>
                        <ul className="space-y-2">
                          {sol.capabilities.map((cap, cIdx) => (
                            <li key={cIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                              <span className="text-blue-400 font-bold mt-0.5">•</span>
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer Tools & CTA */}
                    <div className="pt-6 border-t border-white/10 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {sol.tools.map((t) => (
                          <Badge key={t} variant="cyan">
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <Link
                        to={`/solutions/${sol.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono"
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
      <section className="relative nox-section border-t border-white/10 bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.16) 0%, transparent 70%)',
          }}
        />

        <AmbientScene variant="cta" />
        <div className="nox-container relative z-10 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3 font-mono">
            BESPOKE ARCHITECTURE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto">
            Require Custom Engineering Integration?
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Our multi-disciplinary team collaborates directly with technical leadership to architect, prototype, and scale specialized solutions.
          </p>
          <MagneticButton strength={10}>
            <AccentHalo intensity="normal">
              <Button to="/contact" variant="primary" size="lg">
                Request Solution Integration
              </Button>
            </AccentHalo>
          </MagneticButton>
        </div>
      </section>
    </PageContainer>
  );
};
