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
    description: 'Algorithm validation, state-of-the-art academic exploration, and architecture scoping.',
    icon: FlaskConical,
  },
  {
    num: '02',
    title: 'Prototype',
    description: 'Rapid physical testbeds, embedded hardware layouts, and experimental sensor units.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Engineering',
    description: 'Low-latency firmware, cloud pipelines, API routing, and fault-tolerant architecture.',
    icon: Cpu,
  },
  {
    num: '04',
    title: 'Validation',
    description: 'Stress testing, real-world proof-of-concept verification, and benchmark compliance.',
    icon: CheckCircle,
  },
  {
    num: '05',
    title: 'Integration',
    description: 'Harmonizing physical sensors, machine learning inference models, and cloud dashboards.',
    icon: GitMerge,
  },
  {
    num: '06',
    title: 'Deployment',
    description: 'Moving validated prototypes into scalable, hardened, production-ready operational environments.',
    icon: Wrench,
  },
];

const rAndDTools = ['ROS2', 'ARDUINO', 'PYTHON', 'CAD MODELLING', 'MATLAB', 'C++ / EMBEDDED'];

export const ResearchBuild: React.FC = () => {
  useSEO({
    title: 'Research & Build — Applied R&D and Prototyping | NOXVION',
    description:
      'Transform novel concepts, research papers, and ambitious ideas into functional physical units and production-ready systems.',
  });

  return (
    <PageContainer className="bg-white">
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
        aria-label="Research & Build Hero"
      >
        <div className="nox-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] mb-4 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
                NOXVION / APPLIED R&D
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0A2540] mb-6">
                Research.<br />
                Prototype.<br />
                <span className="text-[#1E3A8A]">Engineer.</span>
              </h1>
              <p className="text-[#4A6080] text-base md:text-xl leading-relaxed max-w-xl mb-8">
                Transform novel concepts, research papers, and technical prototypes into
                functional hardware-software systems engineered for real-world reliability.
              </p>
              <Button to="/contact" variant="primary" size="md">
                Start an R&D Project
                <ArrowRight size={15} />
              </Button>
            </div>

            {/* Technical Blueprint Visual on Right */}
            <div className="lg:col-span-5">
              <div className="nox-card p-6 md:p-8 bg-white border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
                    <span className="text-xs font-mono font-bold text-[#0A2540]">
                      R&D BLUEPRINT SPEC
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">STAGE 04</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-500">ALGORITHM VALIDATION:</span>
                    <span className="text-[#1E3A8A] font-bold">VERIFIED (99.8%)</span>
                  </div>
                  <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-500">HARDWARE TESTBED:</span>
                    <span className="text-emerald-600 font-bold">ACTIVE BENCH</span>
                  </div>
                  <div className="bg-[#F8FAFC] p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-500">TELEMETRY LATENCY:</span>
                    <span className="text-[#1E3A8A] font-bold">&lt; 0.05ms</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>DISCIPLINE: MULTIDOMAIN</span>
                  <span className="text-[#1E3A8A] font-bold">STANDARDIZED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE METHODOLOGY (01 to 06) ── */}
      <section className="nox-section border-b border-slate-200/80 bg-[#F8FAFC]" aria-label="Core Methodology">
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
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                  className="nox-card p-8 bg-white"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider text-slate-400">
                      {m.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{m.title}</h3>
                  <p className="text-sm text-[#4A6080] leading-relaxed">{m.description}</p>
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
            title="R&D Toolchain"
            description="Standardized toolchains ensuring precision and reliability across all applied research lifecycles."
            className="mb-8"
          />

          <div className="flex flex-wrap gap-2.5">
            {rAndDTools.map((tool) => (
              <TechBadge key={tool} label={tool} accent />
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default ResearchBuild;
