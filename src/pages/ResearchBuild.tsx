import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Cpu, Layers, CheckCircle, GitMerge, Wrench, ArrowRight } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { TechBadge } from '../components/ui/Badge';
import { FoldText } from '../components/effects/FoldText';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
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
      <section className="relative py-20 md:py-28 bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_60%,#3B82F6_100%)] text-white border-b border-[#D9E7F5]/20 overflow-hidden" aria-label="Research & Build Hero">
        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-4">
                NOXVION / RESEARCH & DEVELOPMENT
              </p>
              <FoldText
                as="h1"
                splitBy="word"
                hinge="top"
                trigger="scroll"
                className="text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.05] tracking-[-0.03em] text-white mb-6"
              >
                Research.<br />
                Prototype.<br />
                <span className="text-[#60A5FA]">Engineer.</span>
              </FoldText>
              <p className="text-[#D9E7F5] text-base md:text-lg leading-relaxed max-w-xl mb-8">
                Transform novel concepts, research ideas, and patent applications into functional physical
                units and engineered proofs of concept.
              </p>
              <Button to="/contact" variant="primary" size="md" className="!bg-white !text-[#0A2540] hover:!bg-[#EFF6FF] shadow-lg">
                Start a Research Project
                <ArrowRight size={16} />
              </Button>
            </div>

            {/* Technical Blueprint Visual on Right with 3D depth */}
            <div className="lg:col-span-5">
              <Card3D intensity="medium" glowColor="rgba(59, 130, 246, 0.12)">
                <div className="border border-[#D9E7F5] bg-white text-[#0A2540] p-6 relative rounded-2xl shadow-2xl">
                  <div className="flex items-center justify-between border-b border-[#D9E7F5] pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A] inline-block animate-pulse" />
                      <span className="text-[11px] font-mono font-bold tracking-widest text-[#0A2540]">R&D SCHEMATIC V4</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#627D98] font-semibold">SYS.DEV // 098</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-[#334E68]">
                    <div className="bg-[#F8FAFC] p-3 border border-[#D9E7F5] rounded-xl flex justify-between items-center">
                      <span className="font-semibold">ALGORITHM MATRIX:</span>
                      <span className="text-[#1E3A8A] font-bold">CONVERGED (99.8%)</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-3 border border-[#D9E7F5] rounded-xl flex justify-between items-center">
                      <span className="font-semibold">HARDWARE PROTOTYPE:</span>
                      <span className="text-[#0A2540] font-bold">STAGE 2 READY</span>
                    </div>
                    <div className="bg-[#F8FAFC] p-3 border border-[#D9E7F5] rounded-xl flex justify-between items-center">
                      <span className="font-semibold">SENSOR CALIBRATION:</span>
                      <span className="text-[#1E3A8A] font-bold">PASS &lt; 0.05ms</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D9E7F5] flex items-center justify-between text-[10px] text-[#627D98] font-semibold">
                    <span>DISCIPLINE: MECHATRONICS / AI</span>
                    <span className="text-[#1E3A8A] font-bold">CONFIDENTIAL</span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE METHODOLOGY (01 to 06) ── */}
      <section className="nox-section border-b border-[#D9E7F5] bg-[#F8FAFC]" aria-label="Core Methodology">
        <div className="nox-container">
          <SectionHeader
            eyebrow="R&D PROTOCOL"
            title="Core Methodology"
            description="Our structured engineering lifecycle bridging theoretical concepts with tangible industrial applications."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((m, idx) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="bg-white border border-[#D9E7F5] rounded-2xl p-8 hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300 shadow-[0_12px_30px_rgba(10,37,64,0.06)]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl border border-[#BBD3F2] bg-[#EFF6FF] flex items-center justify-center text-[#1E3A8A]">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#627D98]">
                      {m.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{m.title}</h3>
                  <p className="text-sm text-[#334E68] leading-relaxed">{m.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY STACK ── */}
      <section className="nox-section bg-white" aria-label="Technology Stack">
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
