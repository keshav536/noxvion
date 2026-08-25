import { motion, type Variants } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
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
      <section className="relative py-20 md:py-28 grid-bg overflow-hidden border-b border-nox-border" aria-label="About hero">
        <div className="nox-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4">
                CORPORATE OVERVIEW
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-nox-text mb-6">
                Engineering the Future Through{' '}
                <span className="text-nox-cyan">Intelligent Technology</span>
              </h1>
              <p className="text-nox-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                NOXVION is an advanced engineering collective dedicated to solving complex,
                multi-domain challenges through rigorous R&D, bespoke hardware solutions, and
                mission-critical software architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="md">
                  Initiate Dialogue
                </Button>
                <Button to="/solutions" variant="secondary" size="md">
                  Explore Solutions
                </Button>
              </div>
            </div>

            {/* Right side visual element matching Stitch screen */}
            <div className="lg:col-span-5">
              <div className="border border-nox-border bg-nox-layer p-6 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-nox-border/60 pb-3 mb-4">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-nox-cyan">
                    SYS.OP.01 / NOX
                  </span>
                  <span className="text-[10px] text-nox-text-dim">STATUS: NOMINAL</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-nox-base p-4 border border-nox-border">
                    <p className="text-[10px] tracking-widest uppercase text-nox-text-dim mb-1">FOUNDATION ARCHITECTURE</p>
                    <p className="text-xs text-nox-text font-mono">CORE_ENGINEERING_SUITE_V2</p>
                  </div>
                  <div className="bg-nox-base p-4 border border-nox-border">
                    <p className="text-[10px] tracking-widest uppercase text-nox-text-dim mb-1">PRIMARY DOMAINS</p>
                    <p className="text-xs text-nox-text-muted leading-relaxed">
                      AI Engine • Distributed Mesh • Hardware Sensors • Real-Time Telemetry
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-nox-cyan pt-2">
                    <span>SECURITY BASELINE: STRICT</span>
                    <span>LATENCY: &lt;1.2ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRATEGIC FOUNDATION (Who We Are + Mission + Vision) ── */}
      <section className="nox-section border-b border-nox-border" aria-label="Strategic Foundation">
        <div className="nox-container">
          <SectionHeader
            eyebrow="STRATEGIC FOUNDATION"
            title="Purpose & Trajectory"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Who We Are - Left 7 columns */}
            <div className="lg:col-span-7 bg-nox-layer border border-nox-border p-8 md:p-10 flex flex-col justify-between">
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

              <div className="mt-8 pt-6 border-t border-nox-border flex flex-wrap gap-2">
                <Badge variant="cyan">RESEARCH</Badge>
                <Badge variant="cyan">HARDWARE</Badge>
                <Badge variant="cyan">SOFTWARE</Badge>
                <Badge variant="cyan">AI</Badge>
                <Badge variant="cyan">AUTOMATION</Badge>
              </div>
            </div>

            {/* Mission & Vision - Right 5 columns */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Mission */}
              <div className="bg-nox-layer border border-nox-border p-8 flex-1">
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

              {/* Vision */}
              <div className="bg-nox-layer border border-nox-border p-8 flex-1">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── PATH OF INNOVATION (Timeline) ── */}
      <section className="nox-section border-b border-nox-border bg-nox-layer/20" aria-label="Path of Innovation">
        <div className="nox-container">
          <SectionHeader
            eyebrow="CHRONOLOGY"
            title="Path of Innovation"
            description="Verified historical milestones and foundational progression."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, idx) => (
              <div
                key={item.id}
                className="bg-nox-base border border-nox-border p-6 flex flex-col justify-between"
              >
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
                  <span className={`text-[10px] tracking-widest uppercase font-semibold ${
                    item.status === 'completed' ? 'text-nox-cyan' : 'text-nox-text-dim'
                  }`}>
                    STATUS: {item.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE OPERATING PRINCIPLES ── */}
      <section className="nox-section" aria-label="Core Operating Principles">
        <div className="nox-container">
          <SectionHeader
            eyebrow="VALUES & PROTOCOLS"
            title="Core Operating Principles"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-nox-border">
            {principles.map((prn, idx) => (
              <motion.div
                key={prn.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.1}
                className="bg-nox-base p-8 md:p-10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-2xl text-nox-cyan">{prn.icon}</span>
                    <span className="text-[11px] font-semibold tracking-widest text-nox-text-dim">
                      {prn.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-nox-text mb-3">{prn.title}</h3>
                  <p className="text-sm text-nox-text-muted leading-relaxed mb-6">
                    {prn.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-nox-border flex items-center justify-between text-[11px] text-nox-text-dim">
                  <span>SYSTEM_STANDARD</span>
                  <span className="text-nox-cyan">ENFORCED</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
