import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Cpu, Layers, CheckCircle, GitMerge, Wrench, ArrowRight } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { TechBadge } from '../components/ui/Badge';
import { useSEO } from '../hooks/useSEO';

const methodology = [
  {
    num: '01',
    title: 'Research',
    description: 'Academic algorithm validation and emerging technology exploration.',
    icon: FlaskConical,
  },
  {
    num: '02',
    title: 'Prototype',
    description: 'Rapid physical prototyping, layouts, and experimental systems.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Engineering',
    description: 'Hardware, software, firmware, and system architecture.',
    icon: Cpu,
  },
  {
    num: '04',
    title: 'Validation',
    description: 'Proof-of-concept feasibility and technical validation.',
    icon: CheckCircle,
  },
  {
    num: '05',
    title: 'Integration',
    description: 'Connecting software, AI, hardware, sensors, and systems.',
    icon: GitMerge,
  },
  {
    num: '06',
    title: 'Build',
    description: 'Moving validated concepts toward production-ready environments.',
    icon: Wrench,
  },
];

const rAndDTools = ['ROS2', 'ARDUINO', 'PYTHON', 'CAD MODELLING', 'MATLAB', 'C++ / EMBEDDED'];

export const ResearchBuild: React.FC = () => {
  useSEO({
    title: 'Research & Build — Research. Prototype. Engineer.',
    description:
      'Transform novel concepts, research ideas, and patent applications into functional physical units and engineered proofs of concept.',
  });

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 grid-bg border-b border-nox-border overflow-hidden" aria-label="Research & Build Hero">
        <div className="nox-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4">
                NOXVION / RESEARCH & DEVELOPMENT
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.05] tracking-[-0.03em] text-nox-text mb-6">
                Research.<br />
                Prototype.<br />
                <span className="text-nox-cyan">Engineer.</span>
              </h1>
              <p className="text-nox-text-muted text-base md:text-lg leading-relaxed max-w-xl mb-8">
                Transform novel concepts, research ideas, and patent applications into functional physical
                units and engineered proofs of concept.
              </p>
              <Button to="/contact" variant="primary" size="md">
                Start a Research Project
                <ArrowRight size={16} />
              </Button>
            </div>

            {/* Technical Blueprint Visual on Right */}
            <div className="lg:col-span-5">
              <div className="border border-nox-border bg-nox-layer p-6 relative">
                <div className="flex items-center justify-between border-b border-nox-border/60 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-nox-cyan inline-block" />
                    <span className="text-[11px] font-mono tracking-widest text-nox-text">R&D SCHEMATIC V4</span>
                  </div>
                  <span className="text-[10px] font-mono text-nox-text-dim">SYS.DEV // 098</span>
                </div>

                <div className="space-y-3 font-mono text-xs text-nox-text-muted">
                  <div className="bg-nox-base p-3 border border-nox-border flex justify-between items-center">
                    <span>ALGORITHM MATRIX:</span>
                    <span className="text-nox-cyan">CONVERGED (99.8%)</span>
                  </div>
                  <div className="bg-nox-base p-3 border border-nox-border flex justify-between items-center">
                    <span>HARDWARE PROTOTYPE:</span>
                    <span className="text-nox-text">STAGE 2 READY</span>
                  </div>
                  <div className="bg-nox-base p-3 border border-nox-border flex justify-between items-center">
                    <span>SENSOR CALIBRATION:</span>
                    <span className="text-nox-cyan">PASS &lt; 0.05ms</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-nox-border/60 flex items-center justify-between text-[10px] text-nox-text-dim">
                  <span>DISCIPLINE: MECHATRONICS / AI</span>
                  <span>CONFIDENTIAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE METHODOLOGY (01 to 06) ── */}
      <section className="nox-section border-b border-nox-border" aria-label="Core Methodology">
        <div className="nox-container">
          <SectionHeader
            eyebrow="R&D PROTOCOL"
            title="Core Methodology"
            description="Our structured engineering lifecycle bridging theoretical concepts with tangible industrial applications."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-nox-border">
            {methodology.map((m, idx) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="bg-nox-base p-8 hover:bg-nox-layer transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-nox-border bg-nox-layer flex items-center justify-center text-nox-cyan">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-mono font-semibold tracking-widest text-nox-text-dim">
                      {m.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-nox-text mb-3">{m.title}</h3>
                  <p className="text-sm text-nox-text-muted leading-relaxed">{m.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY STACK ── */}
      <section className="nox-section" aria-label="Technology Stack">
        <div className="nox-container">
          <SectionHeader
            eyebrow="TOOLCHAIN"
            title="Technology Stack"
            description="Standardized toolchains ensuring precision and reliability across all R&D lifecycles."
            className="mb-8"
          />

          <div className="flex flex-wrap gap-3">
            {rAndDTools.map((tool) => (
              <TechBadge key={tool} label={tool} accent />
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
