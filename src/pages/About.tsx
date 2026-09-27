import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';
import { timeline } from '../data/timeline';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  }),
};

const principles = [
  {
    id: 'PRN-01',
    title: 'Aggressive Innovation',
    description:
      'We do not wait for established patterns. We test emerging compilers, models, and protocols at the cutting edge to solve hard problems.',
    icon: '⟁',
  },
  {
    id: 'PRN-02',
    title: 'Engineering Integrity',
    description:
      'Zero compromises on security, stability, or structural design. Every system is built to withstand rigorous operational requirements.',
    icon: '◈',
  },
  {
    id: 'PRN-03',
    title: 'Cross-Domain Synergy',
    description:
      'True breakthroughs occur at intersections. We dissolve silos between software architecture, hardware engineering, and autonomous systems.',
    icon: '⬡',
  },
];

export const About: React.FC = () => {
  useSEO({
    title: 'About Us — Engineering the Future Through Intelligent Technology',
    description:
      'NOXVION is an advanced technology engineering collective dedicated to solving complex, multi-domain challenges through applied R&D, bespoke hardware solutions, and mission-critical software.',
  });

  return (
    <PageContainer className="bg-white">
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
        aria-label="About hero"
      >
        <div className="nox-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] mb-4 font-mono flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
                CORPORATE OVERVIEW
              </motion.p>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0A2540] mb-6"
              >
                Engineering the Future Through{' '}
                <span className="text-[#1E3A8A]">Intelligent Technology</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-[#4A6080] text-base md:text-lg leading-relaxed max-w-2xl mb-8"
              >
                NOXVION is an applied engineering collective dedicated to solving complex,
                multi-domain challenges through rigorous R&D, bespoke hardware-software solutions,
                and enterprise-grade architecture.
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-wrap items-center gap-4"
              >
                <Button to="/contact" variant="primary" size="md">
                  Initiate Dialogue
                  <ArrowRight size={15} aria-hidden="true" />
                </Button>
                <Button to="/solutions" variant="secondary" size="md">
                  Explore Solutions
                </Button>
              </motion.div>
            </div>

            {/* Right — System Overview Panel */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="lg:col-span-5"
            >
              <div className="nox-card p-6 md:p-8 bg-white border border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#0A2540] font-mono">
                      NOXVION ARCHITECTURE
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-100">
                    <p className="text-[10px] tracking-wider uppercase text-slate-500 font-semibold mb-1 font-mono">
                      CORE CAPABILITIES
                    </p>
                    <p className="text-xs text-[#0A2540] font-mono font-bold">
                      AI ENGINE • IOT SENSORS • REAL-TIME APIS
                    </p>
                  </div>

                  <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-100">
                    <p className="text-[10px] tracking-wider uppercase text-slate-500 font-semibold mb-1 font-mono">
                      DELIVERY STANDARDS
                    </p>
                    <p className="text-xs text-[#4A6080] leading-relaxed">
                      Rigorous static typing, zero-trust telemetry, and multi-domain hardware integration.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="bg-blue-50/70 p-3.5 rounded-xl text-center border border-blue-100">
                      <p className="text-[#1E3A8A] text-2xl font-bold font-mono">5+</p>
                      <p className="text-[10px] tracking-wider uppercase text-slate-600 font-semibold mt-0.5 font-mono">
                        Domains
                      </p>
                    </div>
                    <div className="bg-blue-50/70 p-3.5 rounded-xl text-center border border-blue-100">
                      <p className="text-[#1E3A8A] text-2xl font-bold font-mono">99.8%</p>
                      <p className="text-[10px] tracking-wider uppercase text-slate-600 font-semibold mt-0.5 font-mono">
                        Reliability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC FOUNDATION ── */}
      <section
        className="nox-section bg-[#F8FAFC] border-b border-slate-200/80"
        aria-label="Strategic Foundation"
      >
        <div className="nox-container">
          <SectionHeader
            eyebrow="STRATEGIC FOUNDATION"
            title="Purpose & Trajectory"
            description="Our origin, values, and commitments to enterprise innovation."
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Who We Are */}
            <div className="lg:col-span-7">
              <div className="nox-card p-8 md:p-10 flex flex-col justify-between h-full bg-white">
                <div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-4">Who We Are</h3>
                  <p className="text-[#4A6080] text-base leading-relaxed mb-5">
                    Noxvion is an innovation-driven technology startup focused on transforming ideas
                    into practical technology solutions. We combine artificial intelligence, machine
                    learning, software engineering, IoT, hardware, automation, and applied product R&D
                    to build systems that address real-world challenges.
                  </p>
                  <p className="text-[#4A6080] text-base leading-relaxed">
                    We are engineers, researchers, and systems architects united by a singular focus:
                    disciplined technical execution. Operating at the intersection of embedded hardware,
                    secure data pipelines, and intelligent interfaces, NOXVION builds scalable solutions
                    for forward-thinking organizations.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  <Badge variant="default">RESEARCH</Badge>
                  <Badge variant="default">HARDWARE</Badge>
                  <Badge variant="default">SOFTWARE</Badge>
                  <Badge variant="default">AI & ML</Badge>
                  <Badge variant="default">AUTOMATION</Badge>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="nox-card p-8 bg-white">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#1E3A8A] font-mono mb-2">
                  MISSION
                </p>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Our Mission</h3>
                <p className="text-sm text-[#4A6080] leading-relaxed">
                  To build accessible, intelligent, and impactful technology that empowers organizations
                  and communities to solve complex engineering and operational problems.
                </p>
              </div>

              <div className="nox-card p-8 bg-white">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#1E3A8A] font-mono mb-2">
                  VISION
                </p>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Our Vision</h3>
                <p className="text-sm text-[#4A6080] leading-relaxed">
                  To become a recognized technology company creating products that seamlessly connect
                  software, artificial intelligence, physical hardware, and human needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PATH OF INNOVATION (TIMELINE) ── */}
      <section
        className="nox-section bg-white border-b border-slate-200/80"
        aria-label="Path of Innovation"
      >
        <div className="nox-container">
          <SectionHeader
            eyebrow="CHRONOLOGY"
            title="Path of Innovation"
            description="Verified milestones and evolutionary progression."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div
                key={item.id}
                className="nox-card p-6 flex flex-col justify-between h-full bg-[#F8FAFC] hover:bg-white transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-[#1E3A8A] font-mono">
                      {item.period}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-mono">0{idx + 1}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4A6080] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/70">
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-[#1E3A8A] font-mono">
                    STATUS: {item.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE OPERATING PRINCIPLES ── */}
      <section
        className="nox-section bg-[#F8FAFC]"
        aria-label="Core Operating Principles"
      >
        <div className="nox-container">
          <SectionHeader
            eyebrow="VALUES & PROTOCOLS"
            title="Core Operating Principles"
            description="The foundational engineering tenets that govern every project we undertake."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((prn) => (
              <div
                key={prn.id}
                className="nox-card p-8 bg-white flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-3xl text-[#1E3A8A] font-bold" aria-hidden="true">
                      {prn.icon}
                    </span>
                    <span className="text-[11px] font-bold tracking-widest text-slate-500 font-mono">
                      {prn.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{prn.title}</h3>
                  <p className="text-sm text-[#4A6080] leading-relaxed mb-6">
                    {prn.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500 font-semibold">STANDARD</span>
                  <span className="text-[#1E3A8A] font-bold">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default About;
