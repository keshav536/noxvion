import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code2, Wifi, Settings2, FlaskConical, ChevronRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { FoldText } from '../components/effects/FoldText';
import { useSEO } from '../hooks/useSEO';
import { solutions } from '../data/solutions';
import { timeline } from '../data/timeline';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
  }),
};

const engineeringSteps = ['IDEA', 'RESEARCH', 'ENGINEERING', 'PROTOTYPE', 'INTEGRATION', 'DEPLOYMENT'];

const techEcosystem = [
  {
    domain: 'AI / ML',
    tools: ['PyTorch', 'TensorFlow', 'FastAPI', 'Python', 'OpenCV'],
  },
  {
    domain: 'Software',
    tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Vite'],
  },
  {
    domain: 'IoT',
    tools: ['ESP32', 'C++', 'FreeRTOS', 'MQTT', 'InfluxDB'],
  },
  {
    domain: 'Automation',
    tools: ['Node.js', 'Redis', 'Docker', 'PostgreSQL', 'Bash'],
  },
  {
    domain: 'Research & R&D',
    tools: ['ROS2', 'Arduino', 'Python', 'CAD Modelling', 'Matlab'],
  },
];

const values = [
  {
    id: 'PRN-01',
    title: 'Aggressive Innovation',
    description:
      'We do not wait for established patterns. We test emerging compilers, models, and protocols at the cutting edge.',
    icon: '⟁',
  },
  {
    id: 'PRN-02',
    title: 'Engineering Integrity',
    description:
      'Our code is typed, our hardware is grounded, and our analytics are validated. Reliability is our core baseline.',
    icon: '◈',
  },
  {
    id: 'PRN-03',
    title: 'Cross-Domain Synergy',
    description:
      'We connect firmware developers, AI model trainers, and system operators. True power lies in interdisciplinary integration.',
    icon: '⬡',
  },
];

const solutionIcons: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Wifi,
  Settings2,
  FlaskConical,
};

export const Home: React.FC = () => {
  useSEO({
    title: 'NOXVION — Building Intelligent Technology for a Smarter Future',
    description:
      'Noxvion transforms ideas, research, and emerging technologies into practical software, AI, hardware, IoT, and automation solutions.',
  });

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="relative min-h-[calc(100vh-70px)] flex items-center grid-bg overflow-hidden" aria-label="Hero">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,240,255,0.04) 0%, transparent 70%)',
          }}
        />
        <div className="nox-container relative py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-6"
              >
                NOXVION / TECHNOLOGY & INNOVATION
              </motion.p>
              <FoldText
                as="h1"
                splitBy="word"
                hinge="top"
                trigger="scroll"
                duration={0.65}
                stagger={0.045}
                ease="power3.out"
                perspective={700}
                creaseShading={0.35}
                className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-nox-text mb-6"
              >
                Building Intelligent{' '}
                <span className="text-nox-cyan">Technology</span> for a
                Smarter Future.
              </FoldText>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-nox-text-muted text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              >
                Noxvion transforms ideas, research, and emerging technologies
                into practical software, AI, hardware, IoT, and automation
                solutions.
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-wrap gap-4"
              >
                <Button to="/solutions" variant="primary" size="md" id="hero-cta-solutions">
                  Explore Our Solutions
                  <ArrowRight size={14} aria-hidden="true" />
                </Button>
                <Button to="/work-with-us" variant="secondary" size="md" id="hero-cta-work">
                  Work With Us
                  <ChevronRight size={14} aria-hidden="true" />
                </Button>
              </motion.div>
            </div>

            {/* Right — Technical visual */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="hidden lg:block"
            >
              <div className="relative border border-nox-border bg-nox-layer p-0 overflow-hidden">
                <div
                  className="w-full aspect-[4/3] relative"
                  style={{
                    background:
                      'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,240,255,0.06) 0%, #0A0A0B 70%)',
                    backgroundSize: '100% 100%',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.06) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }}
                  />
                  <div className="absolute top-4 right-4 text-[10px] font-semibold tracking-widest uppercase text-nox-text-dim">
                    SYS.ARCH.v2
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                    <div className="w-full grid grid-cols-3 gap-3">
                      {['AI Engine', 'Knowledge Graph', 'IoT Layer', 'Deep Tech', 'Distributed Computing', 'Applications'].map((label, idx) => (
                        <div
                          key={idx}
                          className="border border-nox-border bg-nox-base/60 p-3 text-center"
                        >
                          <span className="text-[10px] font-semibold tracking-widest uppercase text-nox-text-dim">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] font-semibold tracking-widest uppercase text-nox-cyan flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-nox-cyan animate-pulse" aria-hidden="true" />
                      NODE ACTIVE
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="nox-section border-t border-nox-border" aria-label="Who we are">
        <div className="nox-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-[40px] font-medium leading-[1.2] tracking-[-0.02em] text-nox-text mb-6">
                From Ideas to Real-World Technology
              </h2>
            </div>
            <div>
              <p className="text-nox-text-muted text-base leading-relaxed mb-6">
                Noxvion is an innovation-driven technology startup focused on transforming ideas
                into practical technology solutions. We combine artificial intelligence, software
                engineering, IoT, automation, and emerging technologies to develop products and
                systems that address real-world challenges.
              </p>
              <p className="text-nox-text-muted text-base leading-relaxed mb-8">
                We bridge the gap between high-level conceptual academic papers and hard
                production-ready environments — connecting software routing layers, hardware
                sensors, and intelligent systems into cohesive solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Software', 'AI', 'Hardware', 'IoT', 'Automation'].map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING APPROACH / PROCESS FLOW ── */}
      <section className="nox-section border-t border-nox-border bg-nox-layer/30" aria-label="Engineering approach">
        <div className="nox-container">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-3">
              RESEARCH TO REALITY
            </p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] text-nox-text">
              Engineering Lifecycle V.4
            </h2>
          </div>
          <div className="relative overflow-x-auto">
            <div className="flex items-start min-w-max mx-auto lg:min-w-0 lg:justify-center gap-0">
              {engineeringSteps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center gap-3 px-4 md:px-6">
                    <div
                      className={`w-8 h-8 border flex items-center justify-center text-[10px] font-semibold ${
                        i === 2
                          ? 'border-nox-cyan bg-nox-cyan/10 text-nox-cyan'
                          : 'border-nox-border bg-nox-layer text-nox-text-dim'
                      }`}
                      aria-label={`Phase ${i + 1}: ${step}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span
                      className={`text-[10px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap ${
                        i === 2 ? 'text-nox-cyan' : 'text-nox-text-dim'
                      }`}
                    >
                      {step}
                    </span>
                    <span
                      className={`text-[10px] tracking-widest uppercase ${
                        i === 2 ? 'text-nox-cyan/60' : 'text-transparent'
                      }`}
                    >
                      PHASE {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {i < engineeringSteps.length - 1 && (
                    <div
                      className={`h-px w-8 md:w-12 ${i < 2 ? 'bg-nox-border-active' : 'bg-nox-border'}`}
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="nox-section border-t border-nox-border" aria-label="Capabilities and systems" id="capabilities">
        <div className="nox-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="CAPABILITIES"
              title="Capabilities & Systems"
              description="We construct bespoke software pipelines, hardware setups, and automated logic units, ensuring clean integrations from sensor to user interface."
              useFoldText
            />
            <Badge variant="cyan" className="self-start md:self-auto shrink-0">
              05 MODES ACTIVE
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-nox-border">
            {solutions.map((sol, i) => {
              const Icon = solutionIcons[sol.icon] || Brain;
              return (
                <Link
                  key={sol.id}
                  to={`/solutions/${sol.slug}`}
                  className="group bg-nox-base hover:bg-nox-layer transition-colors duration-300 p-6 md:p-8 flex flex-col gap-4 focus-visible:outline-2 focus-visible:outline-nox-cyan"
                  id={`capability-${sol.slug}`}
                >
                  <div className="flex items-start justify-between">
                    <Icon size={20} className="text-nox-cyan" aria-hidden="true" />
                    <span className="text-[11px] font-semibold tracking-widest text-nox-text-dim">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-nox-text mb-2 group-hover:text-nox-cyan transition-colors duration-200">
                      {sol.title}
                    </h3>
                    <p className="text-sm text-nox-text-muted leading-relaxed">
                      {sol.shortDesc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {sol.tools.slice(0, 3).map((t) => (
                      <Badge key={t} variant="dim">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ECOSYSTEM ── */}
      <section className="nox-section border-t border-nox-border bg-nox-layer/20" aria-label="Technology ecosystem">
        <div className="nox-container">
          <SectionHeader
            eyebrow="TECHNOLOGY ECOSYSTEM"
            title="Our Technology Stack"
            description="Standardized toolchains ensuring precision and reliability across all engineering lifecycles."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {techEcosystem.map((domain) => (
              <div
                key={domain.domain}
                className="border border-nox-border bg-nox-base p-6"
              >
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-nox-cyan mb-4">
                  {domain.domain}
                </p>
                <div className="flex flex-col gap-2">
                  {domain.tools.map((tool) => (
                    <span key={tool} className="text-sm text-nox-text-muted">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="nox-section border-t border-nox-border" aria-label="Featured projects">
        <div className="nox-container">
          <div className="flex items-center justify-between mb-10">
            <SectionHeader eyebrow="PROJECTS" title="Featured Projects" />
            <Button to="/projects" variant="ghost" size="sm" id="home-view-all-projects">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1].map((idx) => (
              <div
                key={idx}
                className="border border-nox-border bg-nox-layer"
              >
                <div
                  className="w-full aspect-video bg-nox-base flex items-center justify-center border-b border-nox-border"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                  aria-label="Project image coming soon"
                >
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-nox-text-dim">
                    [ IMG_SYS_AWAITING_DATA ]
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="dim">Coming Soon</Badge>
                  </div>
                  <h3 className="text-base font-semibold text-nox-text-muted mb-2">
                    Project Title — Coming Soon
                  </h3>
                  <p className="text-sm text-nox-text-dim">
                    Project details will be published upon completion.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="nox-section border-t border-nox-border bg-nox-layer/20" aria-label="Company timeline">
        <div className="nox-container">
          <SectionHeader
            align="center"
            eyebrow="HISTORY"
            title="The Path of Innovation"
            description="Initiated in 2024 • Scaled in 2026"
            className="mb-16"
            useFoldText
          />
          <div className="relative overflow-x-auto">
            <div className="flex items-start min-w-max lg:min-w-0 gap-0 relative">
              <div
                className="absolute top-3 left-12 right-12 h-px bg-nox-border"
                aria-hidden="true"
              />
              {timeline.map((item) => (
                <div
                  key={item.id}
                  className="flex-1 flex flex-col items-center text-center px-4 md:px-6 min-w-[200px] lg:min-w-0"
                >
                  <div
                    className={`relative z-10 w-6 h-6 border-2 mb-4 ${
                      item.status === 'completed'
                        ? 'border-nox-cyan bg-nox-cyan/20'
                        : item.status === 'current'
                        ? 'border-nox-cyan bg-nox-cyan/10'
                        : 'border-nox-border bg-nox-base'
                    }`}
                    aria-label={`${item.period}: ${item.title} — ${item.status}`}
                  >
                    {item.status !== 'upcoming' && (
                      <div
                        className="absolute inset-1 bg-nox-cyan"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-semibold tracking-widest uppercase mb-2 ${
                      item.status === 'upcoming' ? 'text-nox-text-dim' : 'text-nox-cyan'
                    }`}
                  >
                    {item.period}
                  </span>
                  <h3 className="text-sm font-semibold text-nox-text mb-2">{item.title}</h3>
                  <p className="text-xs text-nox-text-dim leading-relaxed max-w-[180px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="nox-section border-t border-nox-border" aria-label="Core values">
        <div className="nox-container">
          <SectionHeader
            eyebrow="PRINCIPLES"
            title="Core Operating Principles"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-nox-border">
            {values.map((v, i) => (
              <motion.div
                key={v.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                custom={i * 0.15}
                className="bg-nox-base p-8 md:p-10"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xl text-nox-cyan" aria-hidden="true">
                    {v.icon}
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest text-nox-text-dim">
                    {v.id}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-nox-text mb-3">{v.title}</h3>
                <p className="text-sm text-nox-text-muted leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="nox-section border-t border-nox-border" aria-label="Call to action">
        <div className="nox-container text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-6">
            LET'S BUILD
          </p>
          <FoldText
            as="h2"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            className="text-3xl md:text-5xl font-semibold leading-[1.1] tracking-[-0.03em] text-nox-text mb-6 max-w-2xl mx-auto"
          >
            Have an Idea Worth Engineering?
          </FoldText>
          <p className="text-nox-text-muted text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let's transform ambitious ideas, research concepts, and real-world challenges into
            intelligent technology.
          </p>
          <Button to="/work-with-us" variant="primary" size="lg" id="home-final-cta">
            Work With Us
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};
