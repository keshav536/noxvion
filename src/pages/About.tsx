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
        className="relative py-20 md:py-28 grid-bg overflow-hidden border-b border-nox-border"
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
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4"
              >
                CORPORATE OVERVIEW
              </motion.p>
              <FoldText
                as="h1"
                splitBy="word"
                hinge="top"
                trigger="scroll"
                className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-nox-text mb-6"
              >
                Engineering the Future Through{' '}
                <span className="text-nox-cyan">Intelligent Technology</span>
              </FoldText>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-nox-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-8"
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
                <Button to="/contact" variant="primary" size="md" className="btn-depth-primary">
                  Initiate Dialogue
                </Button>
                <Button to="/solutions" variant="secondary" size="md" className="btn-depth-secondary">
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
                className="border border-nox-border/80 bg-nox-layer relative overflow-hidden scan-line-container"
                style={{
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-nox-border/60 px-5 py-3 bg-nox-layer/80">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-nox-cyan status-dot-active"
                      aria-hidden="true"
                    />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-nox-cyan">
                      SYS.OP.01 / NOX
                    </span>
                  </div>
                  <span className="text-[10px] text-nox-text-dim font-mono">STATUS: NOMINAL</span>
                </div>

                <div className="p-5 space-y-4">
                  {/* Foundation Architecture */}
                  <div
                    className="bg-nox-base p-4 border border-nox-border/60 group hover:border-nox-border-active transition-colors duration-200"
                  >
                    <p className="text-[10px] tracking-widest uppercase text-nox-text-dim mb-1">
                      FOUNDATION ARCHITECTURE
                    </p>
                    <p className="text-xs text-nox-text font-mono">CORE_ENGINEERING_SUITE_V2</p>
                  </div>

                  {/* Primary Domains */}
                  <div
                    className="bg-nox-base p-4 border border-nox-border/60 group hover:border-nox-border-active transition-colors duration-200"
                  >
                    <p className="text-[10px] tracking-widest uppercase text-nox-text-dim mb-1">
                      PRIMARY DOMAINS
                    </p>
                    <p className="text-xs text-nox-text-muted leading-relaxed">
                      AI Engine • Distributed Mesh • Hardware Sensors • Real-Time Telemetry
                    </p>
                  </div>

                  {/* Metrics row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-nox-base p-3 border border-nox-border/60 text-center">
                      <p className="text-nox-cyan text-lg font-semibold">5+</p>
                      <p className="text-[10px] tracking-widest uppercase text-nox-text-dim mt-1">Domains</p>
                    </div>
                    <div className="bg-nox-base p-3 border border-nox-border/60 text-center">
                      <p className="text-nox-cyan text-lg font-semibold">&lt;1.2ms</p>
                      <p className="text-[10px] tracking-widest uppercase text-nox-text-dim mt-1">Latency</p>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between text-[11px] text-nox-cyan pt-1">
                    <span>SECURITY BASELINE: STRICT</span>
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-1 h-1 rounded-full bg-nox-cyan status-dot-active"
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
        className="nox-section border-b border-nox-border relative overflow-hidden"
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
                  <div className="bg-nox-layer border border-nox-border p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 hover:border-nox-border-active">
                    {/* Top-left lighting */}
                    <div
                      className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
                      aria-hidden="true"
                      style={{
                        background:
                          'radial-gradient(circle at 0% 0%, rgba(0,240,255,0.05) 0%, transparent 70%)',
                      }}
                    />

                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 bg-nox-cyan" aria-hidden="true" />
                        <h3 className="text-xl font-semibold text-nox-text">Who We Are</h3>
                      </div>
                      <p className="text-nox-text-muted text-base leading-relaxed mb-6">
                        Noxvion is an innovation-driven technology startup focused on transforming ideas
                        into practical technology solutions. We combine artificial intelligence, machine
                        learning, software engineering, IoT, hardware, automation, research, and product R&D
                        to build systems that address high-stake real-world challenges.
                      </p>
                      <p className="text-nox-text-muted text-base leading-relaxed">
                        We are a syndicate of engineers, researchers, and systems architects united by a
                        singular focus: absolute technical supremacy. Operating at the intersection of
                        hardware integration, secure communications, and autonomous systems, NOXVION builds
                        the infrastructure for the next paradigm of enterprise intelligence.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-nox-border/60 flex flex-wrap gap-2">
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
                    <div className="bg-nox-layer border border-nox-border p-8 relative overflow-hidden group transition-all duration-300 hover:border-nox-border-active">
                      <div
                        className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                        aria-hidden="true"
                        style={{
                          background:
                            'radial-gradient(circle at 100% 0%, rgba(0,240,255,0.04) 0%, transparent 70%)',
                        }}
                      />
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-nox-cyan">
                          MISSION OBJECTIVE
                        </p>
                        <span className="text-[10px] text-nox-text-dim">MSN-001</span>
                      </div>
                      <h3 className="text-base font-semibold text-nox-text mb-3">Our Mission</h3>
                      <p className="text-sm text-nox-text-muted leading-relaxed">
                        To build accessible, intelligent, and impactful technology that improves the way
                        people, organizations, and communities solve complex engineering and operational problems.
                      </p>
                    </div>
                  </Card3D>
                </RevealItem>

                <RevealItem delay={0.2}>
                  <Card3D maxTilt={5} className="w-full">
                    <div className="bg-nox-layer border border-nox-border p-8 relative overflow-hidden group transition-all duration-300 hover:border-nox-border-active">
                      <div
                        className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
                        aria-hidden="true"
                        style={{
                          background:
                            'radial-gradient(circle at 100% 100%, rgba(0,240,255,0.04) 0%, transparent 70%)',
                        }}
                      />
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-nox-cyan">
                          LONG-TERM VISION
                        </p>
                        <span className="text-[10px] text-nox-text-dim">VSN-X9</span>
                      </div>
                      <h3 className="text-base font-semibold text-nox-text mb-3">Our Vision</h3>
                      <p className="text-sm text-nox-text-muted leading-relaxed">
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
        className="nox-section border-b border-nox-border bg-nox-layer/20 relative overflow-hidden"
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
                    className="bg-nox-base border border-nox-border p-6 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 hover:border-nox-border-active"
                    style={{ boxShadow: 'var(--shadow-card)' }}
                  >
                    {/* Top accent when active */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-300 ${
                        item.status === 'completed' || item.status === 'current'
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                      aria-hidden="true"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.4), transparent)',
                      }}
                    />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold tracking-widest text-nox-cyan">
                          {item.period}
                        </span>
                        <span className="text-[10px] text-nox-text-dim">0{idx + 1}</span>
                      </div>
                      <h3 className="text-base font-semibold text-nox-text mb-3">{item.title}</h3>
                      <p className="text-sm text-nox-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-nox-border/60">
                      <span
                        className={`text-[10px] tracking-widest uppercase font-semibold flex items-center gap-1.5 ${
                          item.status === 'completed' ? 'text-nox-cyan' : 'text-nox-text-dim'
                        }`}
                      >
                        {item.status === 'completed' && (
                          <span
                            className="w-1 h-1 rounded-full bg-nox-cyan status-dot-active"
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
        className="nox-section relative overflow-hidden"
        aria-label="Core Operating Principles"
      >
        <div className="nox-container relative z-10">
          <SectionHeader
            eyebrow="VALUES & PROTOCOLS"
            title="Core Operating Principles"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-nox-border">
            {principles.map((prn, idx) => (
              <Card3D key={prn.id} maxTilt={5} className="w-full h-full">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx * 0.1}
                  className="bg-nox-base p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 hover:bg-nox-layer"
                >
                  {/* Ambient corner light */}
                  <div
                    className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        'radial-gradient(circle at 0% 0%, rgba(0,240,255,0.04) 0%, transparent 70%)',
                    }}
                  />

                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="text-2xl text-nox-cyan group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)] transition-all duration-300 inline-block"
                        aria-hidden="true"
                      >
                        {prn.icon}
                      </span>
                      <span className="text-[11px] font-semibold tracking-widest text-nox-text-dim">
                        {prn.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-nox-text mb-3">{prn.title}</h3>
                    <p className="text-sm text-nox-text-muted leading-relaxed mb-6">
                      {prn.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-nox-border/60 flex items-center justify-between text-[11px] text-nox-text-dim">
                    <span>SYSTEM_STANDARD</span>
                    <span className="text-nox-cyan">ENFORCED</span>
                  </div>

                  {/* Bottom glow on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px bg-nox-cyan/0 group-hover:bg-nox-cyan/15 transition-colors duration-300"
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
