import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { FoldText } from '../components/effects/FoldText';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
import { RevealSection, RevealItem } from '../components/effects/RevealSection';
import { useSEO } from '../hooks/useSEO';
import { timeline } from '../data/timeline';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
  }),
};

const principles = [
  {
    id: 'PRN-01',
    title: 'Aggressive Innovation',
    description:
      'We do not iterate; we leap. We pursue unconventional solutions to bypass traditional technical constraints.',
    icon: '⟁',
  },
  {
    id: 'PRN-02',
    title: 'Engineering Integrity',
    description:
      'Zero compromises on security, stability, or structural design. Every system is built to withstand extreme operational stress.',
    icon: '◈',
  },
  {
    id: 'PRN-03',
    title: 'Cross-Domain Synergy',
    description:
      'True breakthroughs occur at intersections. We dissolve silos between software, hardware, and physical engineering.',
    icon: '⬡',
  },
];

export const About: React.FC = () => {
  useSEO({
    title: 'About Us — Engineering the Future Through Intelligent Technology',
    description:
      'NOXVION is an advanced engineering collective dedicated to solving complex, multi-domain challenges through rigorous R&D, bespoke hardware solutions, and mission-critical software architecture.',
  });

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_60%,#3B82F6_100%)] text-white border-b border-[#D9E7F5]/20"
        aria-label="About hero"
      >
        <AmbientScene variant="hero" />

        <div className="nox-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-4"
              >
                CORPORATE OVERVIEW
              </motion.p>
              <FoldText
                as="h1"
                splitBy="word"
                hinge="top"
                trigger="scroll"
                className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6"
              >
                Engineering the Future Through{' '}
                <span className="text-[#60A5FA]">Intelligent Technology</span>
              </FoldText>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-[#D9E7F5] text-base md:text-lg leading-relaxed max-w-2xl mb-8"
              >
                NOXVION is an advanced engineering collective dedicated to solving complex,
                multi-domain challenges through rigorous R&D, bespoke hardware solutions, and
                mission-critical software architecture.
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-wrap gap-4"
              >
                <Button to="/contact" variant="primary" size="md" className="!bg-white !text-[#0A2540] hover:!bg-[#EFF6FF] shadow-lg">
                  Initiate Dialogue
                </Button>
                <Button to="/solutions" variant="secondary" size="md" className="!border-white/40 !text-white hover:!bg-white/10">
                  Explore Solutions
                </Button>
              </motion.div>
            </div>

            {/* Right — Enhanced system panel */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="lg:col-span-5"
            >
              <div
                className="border border-white/20 bg-white/95 text-[#0A2540] rounded-2xl relative overflow-hidden shadow-2xl backdrop-blur-md"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#D9E7F5] px-5 py-3 bg-[#F8FAFC]">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-[#1E3A8A] status-dot-active"
                      aria-hidden="true"
                    />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1E3A8A]">
                      SYS.OP.01 / NOX
                    </span>
                  </div>
                  <span className="text-[10px] text-[#627D98] font-mono font-medium">STATUS: NOMINAL</span>
                </div>

                <div className="p-5 space-y-4">
                  {/* Foundation Architecture */}
                  <div
                    className="bg-[#EFF6FF] p-4 border border-[#BBD3F2] rounded-xl group transition-colors duration-200"
                  >
                    <p className="text-[10px] tracking-widest uppercase text-[#627D98] font-semibold mb-1">
                      FOUNDATION ARCHITECTURE
                    </p>
                    <p className="text-xs text-[#0A2540] font-mono font-bold">CORE_ENGINEERING_SUITE_V2</p>
                  </div>

                  {/* Primary Domains */}
                  <div
                    className="bg-[#F8FAFC] p-4 border border-[#D9E7F5] rounded-xl group transition-colors duration-200"
                  >
                    <p className="text-[10px] tracking-widest uppercase text-[#627D98] font-semibold mb-1">
                      PRIMARY DOMAINS
                    </p>
                    <p className="text-xs text-[#334E68] leading-relaxed font-medium">
                      AI Engine • Distributed Mesh • Hardware Sensors • Real-Time Telemetry
                    </p>
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 border border-[#D9E7F5] rounded-xl text-center shadow-sm">
                      <p className="text-[#1E3A8A] text-lg font-bold">5+</p>
                      <p className="text-[10px] tracking-widest uppercase text-[#627D98] font-semibold mt-1">Domains</p>
                    </div>
                    <div className="bg-white p-3 border border-[#D9E7F5] rounded-xl text-center shadow-sm">
                      <p className="text-[#1E3A8A] text-lg font-bold">&lt;1.2ms</p>
                      <p className="text-[10px] tracking-widest uppercase text-[#627D98] font-semibold mt-1">Latency</p>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between text-[11px] text-[#1E3A8A] font-semibold pt-1">
                    <span>SECURITY BASELINE: STRICT</span>
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] status-dot-active"
                        aria-hidden="true"
                      />
                      ONLINE
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC FOUNDATION ── */}
      <section
        className="nox-section border-b border-[#D9E7F5] bg-white relative overflow-hidden"
        aria-label="Strategic Foundation"
      >
        <AmbientScene variant="subtle" />
        <div className="nox-container relative z-10">
          <RevealSection>
            <RevealItem>
              <SectionHeader
                eyebrow="STRATEGIC FOUNDATION"
                title="Purpose & Trajectory"
                className="mb-12"
              />
            </RevealItem>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Who We Are — Left */}
              <RevealItem className="lg:col-span-7">
                <Card3D maxTilt={4} className="h-full">
                  <div className="bg-[#F8FAFC] border border-[#D9E7F5] rounded-2xl p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 hover:border-[#3B82F6] shadow-[0_12px_30px_rgba(10,37,64,0.06)]">
                    {/* Top-left lighting */}
                    <div
                      className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
                      aria-hidden="true"
                      style={{
                        background:
                          'radial-gradient(circle at 0% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)',
                      }}
                    />

                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-2.5 h-2.5 rounded-sm bg-[#1E3A8A]" aria-hidden="true" />
                        <h3 className="text-xl font-bold text-[#0A2540]">Who We Are</h3>
                      </div>
                      <p className="text-[#334E68] text-base leading-relaxed mb-6">
                        Noxvion is an innovation-driven technology startup focused on transforming ideas
                        into practical technology solutions. We combine artificial intelligence, machine
                        learning, software engineering, IoT, hardware, automation, research, and product R&D
                        to build systems that address high-stake real-world challenges.
                      </p>
                      <p className="text-[#334E68] text-base leading-relaxed">
                        We are a syndicate of engineers, researchers, and systems architects united by a
                        singular focus: absolute technical supremacy. Operating at the intersection of
                        hardware integration, secure communications, and autonomous systems, NOXVION builds
                        the infrastructure for the next paradigm of enterprise intelligence.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#D9E7F5] flex flex-wrap gap-2">
                      <Badge variant="cyan">RESEARCH</Badge>
                      <Badge variant="cyan">HARDWARE</Badge>
                      <Badge variant="cyan">SOFTWARE</Badge>
                      <Badge variant="cyan">AI</Badge>
                      <Badge variant="cyan">AUTOMATION</Badge>
                    </div>
                  </div>
                </Card3D>
              </RevealItem>

              {/* Mission & Vision — Right */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <RevealItem delay={0.1}>
                  <Card3D maxTilt={5} className="w-full">
                    <div className="bg-white border border-[#D9E7F5] rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:border-[#3B82F6] shadow-[0_12px_30px_rgba(10,37,64,0.06)]">
                      <div
                        className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                        aria-hidden="true"
                        style={{
                          background:
                            'radial-gradient(circle at 100% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)',
                        }}
                      />
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-[#1E3A8A]">
                          MISSION OBJECTIVE
                        </p>
                        <span className="text-[10px] text-[#627D98] font-mono">MSN-001</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0A2540] mb-3">Our Mission</h3>
                      <p className="text-sm text-[#334E68] leading-relaxed">
                        To build accessible, intelligent, and impactful technology that improves the way
                        people, organizations, and communities solve complex engineering and operational problems.
                      </p>
                    </div>
                  </Card3D>
                </RevealItem>

                <RevealItem delay={0.2}>
                  <Card3D maxTilt={5} className="w-full">
                    <div className="bg-white border border-[#D9E7F5] rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 hover:border-[#3B82F6] shadow-[0_12px_30px_rgba(10,37,64,0.06)]">
                      <div
                        className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
                        aria-hidden="true"
                        style={{
                          background:
                            'radial-gradient(circle at 100% 100%, rgba(59,130,246,0.06) 0%, transparent 70%)',
                        }}
                      />
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-[#1E3A8A]">
                          LONG-TERM VISION
                        </p>
                        <span className="text-[10px] text-[#627D98] font-mono">VSN-X9</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0A2540] mb-3">Our Vision</h3>
                      <p className="text-sm text-[#334E68] leading-relaxed">
                        To become a globally recognized technology company creating intelligent products that
                        seamlessly connect software, artificial intelligence, hardware, and human needs.
                      </p>
                    </div>
                  </Card3D>
                </RevealItem>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── PATH OF INNOVATION (Timeline) ── */}
      <section
        className="nox-section border-b border-[#D9E7F5] bg-[#F8FAFC] relative overflow-hidden"
        aria-label="Path of Innovation"
      >
        <AmbientScene variant="subtle" />
        <div className="nox-container relative z-10">
          <SectionHeader
            eyebrow="CHRONOLOGY"
            title="Path of Innovation"
            description="Verified historical milestones and foundational progression."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={idx * 0.1}
              >
                <Card3D maxTilt={5} className="w-full h-full">
                  <div
                    className="bg-white border border-[#D9E7F5] rounded-2xl p-6 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 hover:border-[#3B82F6] shadow-[0_12px_30px_rgba(10,37,64,0.06)]"
                  >
                    {/* Top accent when active */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 ${
                        item.status === 'completed' || item.status === 'current'
                          ? 'opacity-100 bg-[#3B82F6]'
                          : 'opacity-0'
                      }`}
                      aria-hidden="true"
                    />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold tracking-widest text-[#1E3A8A]">
                          {item.period}
                        </span>
                        <span className="text-[10px] text-[#627D98] font-mono">0{idx + 1}</span>
                      </div>
                      <h3 className="text-base font-bold text-[#0A2540] mb-3">{item.title}</h3>
                      <p className="text-sm text-[#334E68] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#D9E7F5]">
                      <span
                        className={`text-[10px] tracking-widest uppercase font-semibold flex items-center gap-1.5 ${
                          item.status === 'completed' ? 'text-[#1E3A8A]' : 'text-[#627D98]'
                        }`}
                      >
                        {item.status === 'completed' && (
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] status-dot-active"
                            aria-hidden="true"
                          />
                        )}
                        STATUS: {item.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE OPERATING PRINCIPLES ── */}
      <section
        className="nox-section bg-white relative overflow-hidden"
        aria-label="Core Operating Principles"
      >
        <div className="nox-container relative z-10">
          <SectionHeader
            eyebrow="VALUES & PROTOCOLS"
            title="Core Operating Principles"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((prn, idx) => (
              <Card3D key={prn.id} maxTilt={5} className="w-full h-full">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx * 0.1}
                  className="bg-white border border-[#D9E7F5] rounded-2xl p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 hover:border-[#3B82F6] shadow-[0_12px_30px_rgba(10,37,64,0.06)] hover:shadow-xl"
                >
                  {/* Ambient corner light */}
                  <div
                    className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        'radial-gradient(circle at 0% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)',
                    }}
                  />

                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="text-3xl text-[#1E3A8A] group-hover:scale-110 transition-transform duration-300 inline-block"
                        aria-hidden="true"
                      >
                        {prn.icon}
                      </span>
                      <span className="text-[11px] font-bold tracking-widest text-[#627D98]">
                        {prn.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0A2540] mb-3">{prn.title}</h3>
                    <p className="text-sm text-[#334E68] leading-relaxed mb-6">
                      {prn.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#D9E7F5] flex items-center justify-between text-[11px] text-[#627D98] font-semibold">
                    <span>SYSTEM_STANDARD</span>
                    <span className="text-[#1E3A8A] font-bold">ENFORCED</span>
                  </div>

                  {/* Bottom line on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
