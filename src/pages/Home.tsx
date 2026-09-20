import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code2, Wifi, Settings2, FlaskConical, ChevronRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { FoldText } from '../components/effects/FoldText';
import { HeroCanvas } from '../components/effects/HeroCanvas';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
import { RevealSection, RevealItem } from '../components/effects/RevealSection';
import { useSEO } from '../hooks/useSEO';
import { solutions } from '../data/solutions';
import { timeline } from '../data/timeline';
import { NewSvgPathDraw } from '../components/effects/NewSvgPathDraw';
import { MagneticButton } from '../components/effects/MagneticButton';
import { AccentHalo } from '../components/effects/AccentHalo';
import { ParallaxLayer } from '../components/effects/ParallaxLayer';
import heroEarthImage from '../assets/hero-earth.png';

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
  { domain: 'AI / ML', tools: ['PyTorch', 'TensorFlow', 'FastAPI', 'Python', 'OpenCV'] },
  { domain: 'Software', tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Vite'] },
  { domain: 'IoT', tools: ['ESP32', 'C++', 'FreeRTOS', 'MQTT', 'InfluxDB'] },
  { domain: 'Automation', tools: ['Node.js', 'Redis', 'Docker', 'PostgreSQL', 'Bash'] },
  { domain: 'Research & R&D', tools: ['ROS2', 'Arduino', 'Python', 'CAD Modelling', 'Matlab'] },
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
      <section
        className="relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden bg-black"
        aria-label="Hero"
      >
        {/* Background Earth Image Layer with subtle integrated parallax */}
        <div
          className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <ParallaxLayer
            speed={0.02}
            maxOffset={14}
            pointerFactor={6}
            scaleDepth={0.015}
            className="absolute -inset-[4%] w-[108%] h-[108%]"
          >
            <div
              className="w-full h-full hero-earth-bg"
              style={{
                backgroundImage: `url(${heroEarthImage})`,
              }}
            />
          </ParallaxLayer>
        </div>

        {/* Subtle dark gradient/overlay to ensure crisp hero text readability while keeping cyan Earth glow intact */}
        <div
          className="absolute inset-0 pointer-events-none z-[1] hero-readability-overlay"
          aria-hidden="true"
        />

        {/* Top radial ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none z-[2]"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Layered ambient background */}
        <AmbientScene variant="hero" className="z-[2]" />

        {/* Perspective depth grid */}
        <div
          className="absolute inset-0 pointer-events-none z-[2]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 65% 50%, black 20%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 65% 50%, black 20%, transparent 75%)',
          }}
        />

        <div className="nox-container relative py-24 md:py-32 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-6 flex items-center gap-2 font-mono"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" aria-hidden="true" />
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
                className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] text-white mb-6"
              >
                Building Intelligent{' '}
                <span className="text-blue-400">Technology</span> for a
                Smarter Future.
              </FoldText>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
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
                className="flex flex-wrap items-center gap-4"
              >
                <MagneticButton strength={10}>
                  <AccentHalo intensity="normal">
                    <Button
                      to="/solutions"
                      variant="primary"
                      size="md"
                      id="hero-cta-solutions"
                      className="btn-depth-primary"
                    >
                      Explore Our Solutions
                      <ArrowRight size={14} aria-hidden="true" />
                    </Button>
                  </AccentHalo>
                </MagneticButton>

                <Button
                  to="/work-with-us"
                  variant="secondary"
                  size="md"
                  id="hero-cta-work"
                  className="btn-depth-secondary"
                >
                  Work With Us
                  <ChevronRight size={14} aria-hidden="true" />
                </Button>
              </motion.div>

              {/* Floating stat pills */}
              <ParallaxLayer speed={0.06} maxOffset={18} pointerFactor={-8}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={4.5}
                  className="flex flex-wrap items-center gap-3 mt-10"
                >
                  {['AI Engine', 'IoT Layer', 'R&D Core'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase border border-white/10 text-zinc-300 bg-white/[0.04] rounded-full backdrop-blur-sm font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.8)]" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </motion.div>
              </ParallaxLayer>
            </div>

            {/* Right — Canvas Network Visualization with Multi-Layer Parallax */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="hidden lg:block"
            >
              <ParallaxLayer speed={-0.08} maxOffset={36} pointerFactor={14} scaleDepth={0.03}>
                <div
                  className="hero-canvas-container scan-line-container rounded-2xl border border-white/10 bg-[#0d0d10]/80 backdrop-blur-xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.1)]"
                >
                  {/* Header bar */}
                  <div className="relative z-20 flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/60 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,1)]"
                        aria-hidden="true"
                      />
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-blue-400 font-mono">
                        SYS.ARCH.v2 / LIVE
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 font-mono">
                      NODES: ACTIVE
                    </span>
                  </div>

                  {/* Canvas */}
                  <div className="w-full aspect-[4/3] relative z-10">
                    <HeroCanvas className="absolute inset-0" />

                    {/* Overlay labels */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
                      <span className="text-[10px] font-mono text-zinc-500">
                        NOX_MESH_NET / v4.2
                      </span>
                      <span className="text-[10px] font-mono text-blue-400">
                        {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
              </ParallaxLayer>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section
        className="nox-section border-t border-white/10 bg-[#070709] relative overflow-hidden"
        aria-label="Who we are"
      >
        <AmbientScene variant="subtle" />
        <div className="nox-container relative z-10">
          <RevealSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <RevealItem>
              <h2 className="text-3xl md:text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white mb-6">
                From Ideas to Real-World Technology
              </h2>
            </RevealItem>
            <RevealItem delay={0.1}>
              <p className="text-zinc-400 text-base leading-relaxed mb-6">
                Noxvion is an innovation-driven technology startup focused on transforming ideas
                into practical technology solutions. We combine artificial intelligence, software
                engineering, IoT, automation, and emerging technologies to develop products and
                systems that address real-world challenges.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mb-8">
                We bridge the gap between high-level conceptual academic papers and hard
                production-ready environments — connecting software routing layers, hardware
                sensors, and intelligent systems into cohesive solutions.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {['Software', 'AI', 'Hardware', 'IoT', 'Automation'].map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>
            </RevealItem>
          </RevealSection>
        </div>
      </section>

      {/* ── ENGINEERING APPROACH / PROCESS FLOW ── */}
      <section
        className="nox-section border-t border-white/10 bg-black relative overflow-hidden"
        aria-label="Engineering approach"
      >
        {/* Subtle depth grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
          }}
        />

        <div className="nox-container relative z-10">
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-3 font-mono">
              RESEARCH TO REALITY
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-white">
              Engineering Lifecycle V.4
            </h2>
          </div>
          <div className="relative overflow-x-auto">
            <div className="flex items-start min-w-max mx-auto lg:min-w-0 lg:justify-center gap-0">
              {engineeringSteps.map((step, i) => (
                <motion.div
                  key={step}
                  className="flex items-center"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  custom={i * 0.08}
                >
                  <div className="flex flex-col items-center gap-3 px-4 md:px-6">
                    <div
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center text-[10px] font-semibold transition-all duration-300 font-mono ${
                        i === 2
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.4)] new-step-active'
                          : i < 2
                          ? 'border-white/20 bg-white/[0.05] text-white'
                          : 'border-white/10 bg-transparent text-zinc-500'
                      }`}
                      aria-label={`Phase ${i + 1}: ${step}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <span
                      className={`text-[10px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap font-mono ${
                        i === 2 ? 'text-blue-400' : 'text-zinc-400'
                      }`}
                    >
                      {step}
                    </span>
                    <span
                      className={`text-[9px] tracking-widest uppercase font-mono ${
                        i === 2 ? 'text-blue-500' : 'text-zinc-600'
                      }`}
                    >
                      PHASE {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {i < engineeringSteps.length - 1 && (
                    <div
                      className={`h-px w-8 md:w-12 ${i < 2 ? 'bg-blue-500/40' : 'bg-white/10'}`}
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*
        NEW-04 — Decorative SVG path draw.
        Protected existing effects must not be modified.
        NewSvgPathDraw is an isolated component.
      */}
      <div className="relative overflow-hidden bg-black" aria-hidden="true">
        <NewSvgPathDraw className="opacity-70" />
      </div>

      {/* ── CAPABILITIES ── */}
      <section
        className="nox-section border-t border-white/10 bg-[#070709] relative overflow-hidden"
        aria-label="Capabilities and systems"
        id="capabilities"
      >
        <AmbientScene variant="subtle" />
        <div className="nox-container relative z-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => {
              const Icon = solutionIcons[sol.icon] || Brain;
              return (
                <Card3D key={sol.id} className="w-full h-full" maxTilt={5}>
                  <Link
                    to={`/solutions/${sol.slug}`}
                    className="group bg-[#0e0e12] hover:bg-[#131318] border border-white/10 hover:border-blue-500/40 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-300 p-6 md:p-8 flex flex-col gap-4 focus-visible:outline-2 focus-visible:outline-blue-500 w-full h-full relative"
                    id={`capability-${sol.slug}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-blue-400 transition-all duration-300 group-hover:border-blue-500/60 group-hover:bg-blue-500/10">
                        <Icon size={20} className="text-blue-400" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-widest text-zinc-500 font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
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
                    {/* Arrow indicator */}
                    <div className="flex items-center gap-1.5 text-blue-400 transition-all duration-300 text-[10px] font-semibold tracking-widest uppercase font-mono">
                      <span>Explore</span>
                      <ArrowRight size={12} aria-hidden="true" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </Link>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ECOSYSTEM ── */}
      <section
        className="nox-section border-t border-white/10 bg-black relative overflow-hidden"
        aria-label="Technology ecosystem"
      >
        <div className="nox-container relative z-10">
          <RevealSection stagger={0.06}>
            <RevealItem>
              <SectionHeader
                eyebrow="TECHNOLOGY ECOSYSTEM"
                title="Our Technology Stack"
                description="Standardized toolchains ensuring precision and reliability across all engineering lifecycles."
                className="mb-12"
              />
            </RevealItem>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {techEcosystem.map((domain, idx) => (
                <RevealItem key={domain.domain} delay={idx * 0.06}>
                  <Card3D maxTilt={4} className="w-full h-full">
                    <div
                      className="border border-white/10 bg-[#0d0d10] rounded-2xl p-6 h-full relative overflow-hidden group transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_12px_30px_rgba(59,130,246,0.1)]"
                    >
                      {/* Top accent line on hover */}
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-blue-500 transition-colors duration-300"
                        aria-hidden="true"
                      />
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-400 mb-4 font-mono">
                        {domain.domain}
                      </p>
                      <div className="flex flex-col gap-2">
                        {domain.tools.map((tool) => (
                          <span key={tool} className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors duration-200">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card3D>
                </RevealItem>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        className="nox-section border-t border-white/10 bg-[#070709] relative overflow-hidden"
        aria-label="Featured projects"
      >
        <div className="nox-container relative z-10">
          <div className="flex items-center justify-between mb-10">
            <SectionHeader eyebrow="PROJECTS" title="Featured Projects" />
            <Button to="/projects" variant="ghost" size="sm" id="home-view-all-projects">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[0, 1].map((idx) => (
              <Card3D key={idx} maxTilt={4} className="w-full h-full">
                <div
                  className="border border-white/10 bg-[#0e0e12] rounded-2xl group transition-all duration-300 hover:border-blue-500/40 overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                >
                  <div
                    className="w-full aspect-video bg-[#09090c] flex items-center justify-center border-b border-white/10 relative overflow-hidden"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                    aria-label="Project image coming soon"
                  >
                    {/* Scanning line */}
                    <div
                      className="absolute top-0 left-0 w-full h-0.5 pointer-events-none"
                      aria-hidden="true"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)',
                        animation: `scanLine ${4 + idx * 1.5}s ease-in-out infinite`,
                        animationDelay: `${idx * 1.2}s`,
                      }}
                    />
                    <div className="text-center">
                      <div
                        className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center mx-auto mb-3 text-blue-400"
                        aria-hidden="true"
                      >
                        <span className="text-sm">⬡</span>
                      </div>
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-500 font-mono">
                        [ IMG_SYS_AWAITING_DATA ]
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="dim">Coming Soon</Badge>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      Project Title — Coming Soon
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Project details will be published upon completion.
                    </p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section
        className="nox-section border-t border-white/10 bg-black relative overflow-hidden"
        aria-label="Company timeline"
      >
        <AmbientScene variant="subtle" />
        <div className="nox-container relative z-10">
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
                className="absolute top-3 left-12 right-12 h-px"
                aria-hidden="true"
                style={{
                  background: 'linear-gradient(90deg, rgba(59,130,246,0.15), rgba(59,130,246,0.5) 50%, rgba(59,130,246,0.15))',
                }}
              />
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  custom={idx * 0.1}
                  className="flex-1 flex flex-col items-center text-center px-4 md:px-6 min-w-[200px] lg:min-w-0"
                >
                  <div
                    className={`relative z-10 w-6 h-6 rounded-full border-2 mb-4 transition-all duration-300 ${
                      item.status === 'completed'
                        ? 'border-blue-500 bg-blue-500/20 shadow-[0_0_12px_rgba(59,130,246,0.4)]'
                        : item.status === 'current'
                        ? 'border-blue-400 bg-blue-500 shadow-[0_0_16px_rgba(59,130,246,0.8)]'
                        : 'border-white/20 bg-[#111114]'
                    }`}
                    aria-label={`${item.period}: ${item.title} — ${item.status}`}
                  >
                    {item.status !== 'upcoming' && (
                      <div
                        className="absolute inset-1 rounded-full bg-blue-400"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-semibold tracking-widest uppercase mb-2 font-mono ${
                      item.status === 'upcoming' ? 'text-zinc-500' : 'text-blue-400'
                    }`}
                  >
                    {item.period}
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-[180px]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        className="nox-section border-t border-white/10 bg-[#070709] relative overflow-hidden"
        aria-label="Core values"
      >
        <div className="nox-container relative z-10">
          <SectionHeader
            eyebrow="PRINCIPLES"
            title="Core Operating Principles"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Card3D key={v.id} maxTilt={5} className="w-full h-full">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  custom={i * 0.15}
                  className="bg-[#0e0e12] border border-white/10 hover:border-blue-500/40 rounded-2xl p-8 md:p-10 h-full relative overflow-hidden group transition-all duration-300 hover:bg-[#131318] shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]"
                >
                  {/* Top-left light direction highlight */}
                  <div
                    className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background:
                        'radial-gradient(circle at 0% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)',
                    }}
                  />

                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="text-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300 inline-block"
                      aria-hidden="true"
                    >
                      {v.icon}
                    </span>
                    <span className="text-[11px] font-semibold tracking-widest text-zinc-500 font-mono">
                      {v.id}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{v.description}</p>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-blue-500 transition-colors duration-300"
                    aria-hidden="true"
                  />
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="nox-section border-t border-white/10 relative overflow-hidden bg-black"
        aria-label="Call to action"
      >
        {/* Atmospheric radial glow behind CTA */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.16) 0%, transparent 70%)',
          }}
        />

        <AmbientScene variant="cta" />

        {/* Perspective grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse 60% 80% at 50% 50%, black 20%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 80% at 50% 50%, black 20%, transparent 100%)',
          }}
        />

        <div className="nox-container text-center relative z-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-6 flex items-center justify-center gap-2 font-mono"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" aria-hidden="true" />
            LET'S BUILD
          </motion.p>
          <FoldText
            as="h2"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-white mb-6 max-w-2xl mx-auto"
          >
            Have an Idea Worth Engineering?
          </FoldText>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-zinc-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Let's transform ambitious ideas, research concepts, and real-world challenges into
            intelligent technology.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <MagneticButton strength={12}>
              <AccentHalo intensity="strong">
                <Button
                  to="/work-with-us"
                  variant="primary"
                  size="lg"
                  id="home-final-cta"
                  className="btn-depth-primary shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
                >
                  Work With Us
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </AccentHalo>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  );
};
