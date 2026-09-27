import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Brain,
  Code2,
  Wifi,
  Settings2,
  FlaskConical,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  CheckCircle2,
  Star,
  Quote,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useSEO } from '../hooks/useSEO';
import { solutions } from '../data/solutions';

// Conservative, professional motion: scroll-triggered fade + slight upward slide
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  }),
};

const engineeringSteps = [
  { step: '01', title: 'IDEA', desc: 'Concept intake & architecture scope' },
  { step: '02', title: 'RESEARCH', desc: 'Feasibility analysis & algorithmic design' },
  { step: '03', title: 'ENGINEERING', desc: 'High-performance stack implementation' },
  { step: '04', title: 'PROTOTYPE', desc: 'Benchmarking & embedded integration' },
  { step: '05', title: 'INTEGRATION', desc: 'End-to-end cloud & hardware telemetry' },
  { step: '06', title: 'DEPLOYMENT', desc: 'Production hardening & ongoing monitoring' },
];

const techEcosystem = [
  { domain: 'AI / ML', tools: ['PyTorch', 'TensorFlow', 'FastAPI', 'Python', 'OpenCV'] },
  { domain: 'Software', tools: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Vite'] },
  { domain: 'IoT & Edge', tools: ['ESP32', 'C++', 'FreeRTOS', 'MQTT', 'InfluxDB'] },
  { domain: 'Automation', tools: ['Node.js', 'Redis', 'Docker', 'PostgreSQL', 'Bash'] },
  { domain: 'Research & R&D', tools: ['ROS2', 'Arduino', 'Python', 'CAD Modelling', 'Matlab'] },
];

const values = [
  {
    id: 'PRN-01',
    title: 'Aggressive Innovation',
    description:
      'We do not wait for established patterns. We test emerging compilers, models, and protocols at the frontier of technology.',
    icon: '⟁',
  },
  {
    id: 'PRN-02',
    title: 'Engineering Integrity',
    description:
      'Our code is strictly typed, our hardware is grounded, and our analytics are validated. Reliability is our baseline.',
    icon: '◈',
  },
  {
    id: 'PRN-03',
    title: 'Cross-Domain Synergy',
    description:
      'We connect firmware engineers, AI model trainers, and system operators into one cohesive deployment workflow.',
    icon: '⬡',
  },
];

const stats = [
  { value: '99.8%', label: 'System Uptime Target', desc: 'Continuous telemetry & automated failovers' },
  { value: '5+', label: 'Core Engineering Domains', desc: 'From embedded sensor nodes to deep learning' },
  { value: '100%', label: 'Type-Safe Architecture', desc: 'Zero runtime compromises on mission-critical logic' },
  { value: '24/7', label: 'Continuous Telemetry', desc: 'Real-time telemetry and edge monitoring' },
];

const trustItems = [
  { name: 'ISO 27001', detail: 'Security Baseline Standards', icon: ShieldCheck },
  { name: 'IEEE Standards', detail: 'Hardware & RF Compliance', icon: Cpu },
  { name: 'ROS 2 Framework', detail: 'Robotics & Edge Nodes', icon: Layers },
  { name: 'Industrial MQTT', detail: 'Zero-Loss Sensor Bus', icon: CheckCircle2 },
  { name: 'Enterprise QA', detail: 'Automated CI/CD Validation', icon: Award },
];

const testimonials = [
  {
    quote:
      'NOXVION provided unprecedented engineering clarity for our flood mitigation modeling. Their ability to bridge physical drain sensors with real-time AI dashboards was flawless.',
    author: 'Dr. Aris Thorne',
    role: 'Principal Hydrology Advisor',
    org: 'Urban Infrastructure Initiative',
    rating: 5,
  },
  {
    quote:
      'The speed and reliability of our automated attendance and compliance engine exceeded enterprise expectations. Solid code, crisp interfaces, and zero downtime.',
    author: 'Elena Vasquez',
    role: 'Director of Corporate Operations',
    org: 'Syasans Global Services',
    rating: 5,
  },
  {
    quote:
      'Finding a partner that understands low-level hardware constraints and high-scale web platforms equally well is rare. Noxvion has that multidisciplinary mastery.',
    author: 'Marcus Vance',
    role: 'Head of Technology Strategy',
    org: 'Apex Automation Labs',
    rating: 5,
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
    <PageContainer className="bg-white">
      {/* ── 1. HERO SECTION ── */}
      <section
        className="relative min-h-[82vh] flex items-center bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
        aria-label="Hero"
      >
        {/* Subtle corporate grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(rgba(10,37,64,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,37,64,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        {/* Soft royal blue ambient highlight */}
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[350px] pointer-events-none rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />

        <div className="nox-container relative py-20 md:py-28 lg:py-32 z-10">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] mb-5 flex items-center gap-2 font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
              NOXVION // APPLIED ENGINEERING & TECHNOLOGY
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-[62px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0A2540] mb-6"
            >
              Building Intelligent{' '}
              <span className="text-[#1E3A8A]">Technology</span> for a Smarter Future.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-[#4A6080] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              Noxvion transforms ambitious ideas, research concepts, and emerging technologies
              into practical software, AI, hardware, IoT, and automation solutions.
            </motion.p>

            {/* Primary & Secondary CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                to="/solutions"
                variant="primary"
                size="md"
                id="hero-cta-solutions"
                className="bg-[#1E3A8A] text-white hover:bg-[#172554] shadow-sm hover:shadow-md"
              >
                Explore Our Solutions
                <ArrowRight size={15} aria-hidden="true" />
              </Button>

              <Button
                to="/work-with-us"
                variant="secondary"
                size="md"
                id="hero-cta-work"
              >
                Work With Us
                <ChevronRight size={15} aria-hidden="true" />
              </Button>
            </motion.div>

            {/* Capability Pills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap items-center gap-2.5 mt-10"
            >
              {['AI Engine', 'IoT Layer', 'Web Architecture', 'Hardware R&D', 'Automation'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase border border-slate-200 bg-white text-[#0A2540] rounded-full shadow-xs font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR (CERTIFICATIONS / STANDARDS) ── */}
      <section
        className="py-10 bg-white border-b border-slate-200/80"
        aria-label="Trust and compliance standards"
      >
        <div className="nox-container">
          <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600 mb-6 font-mono">
            ENGINEERING BASELINES & INDUSTRIAL COMPLIANCE
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 bg-[#F8FAFC] hover:bg-white hover:border-slate-200 transition-all duration-200 shadow-xs"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-[#0A2540]">{item.name}</h2>
                    <p className="text-[10px] text-slate-500 font-medium truncate">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES / CAPABILITIES GRID ── */}
      <section
        className="nox-section bg-[#F8FAFC] border-b border-slate-200/80"
        aria-label="Capabilities and services"
        id="capabilities"
      >
        <div className="nox-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="CAPABILITIES & SYSTEMS"
              title="Engineered for Real-World Impact"
              description="We construct bespoke software pipelines, hardware nodes, and automated logic units, ensuring clean integrations from sensor to user interface."
            />
            <Badge variant="default" className="self-start md:self-auto shrink-0">
              05 DIVISIONS ACTIVE
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => {
              const Icon = solutionIcons[sol.icon] || Brain;
              return (
                <div key={sol.id} className="nox-card p-6 md:p-8 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="p-3 rounded-xl bg-blue-50 text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-200">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold tracking-wider text-slate-400 font-mono">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0A2540] mb-2.5 group-hover:text-[#1E3A8A] transition-colors duration-200">
                      {sol.title}
                    </h3>
                    <p className="text-sm text-[#4A6080] leading-relaxed mb-6">
                      {sol.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {sol.tools.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase font-mono rounded bg-slate-100 text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/solutions/${sol.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#1E3A8A] group-hover:text-[#172554] font-mono"
                      id={`capability-${sol.slug}`}
                    >
                      <span>Explore Capability</span>
                      <ArrowRight size={13} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT / WHY-US SECTION WITH STATS (LARGE NAVY NUMBERS) ── */}
      <section
        className="nox-section bg-white border-b border-slate-200/80"
        aria-label="About Noxvion and key statistics"
      >
        <div className="nox-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-6">
              <SectionHeader
                eyebrow="WHY NOXVION"
                title="Bridging Research Concepts to Production Reality"
                description="Traditional tech agencies either remain purely theoretical or focus exclusively on standard web applications. Noxvion bridges the divide."
              />
              <p className="text-[#4A6080] text-base leading-relaxed mt-4 mb-6">
                We combine artificial intelligence, hardware design, embedded firmware, IoT pipelines,
                and modern web systems. From custom microcontrollers running FreeRTOS to resilient
                cloud microservices, our multidisciplinary teams deliver production-grade systems
                built to endure real-world conditions.
              </p>
              <div className="flex items-center gap-4">
                <Button to="/about" variant="secondary" size="sm">
                  Learn About Our History
                  <ArrowRight size={14} aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Stats Grid with Large Navy Numbers */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {stats.map((s, idx) => (
                  <motion.div
                    key={s.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={idx * 0.1}
                    className="p-6 rounded-2xl border border-slate-200/90 bg-[#F8FAFC] hover:bg-white hover:border-[#1E3A8A]/30 transition-all duration-200 shadow-xs"
                  >
                    <div className="text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight mb-2">
                      {s.value}
                    </div>
                    <div className="text-sm font-bold text-[#1E3A8A] mb-1">
                      {s.label}
                    </div>
                    <p className="text-xs text-[#4A6080] leading-relaxed">
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ENGINEERING APPROACH / LIFECYCLE ── */}
      <section
        className="nox-section bg-[#F8FAFC] border-b border-slate-200/80"
        aria-label="Engineering approach"
      >
        <div className="nox-container">
          <SectionHeader
            align="center"
            eyebrow="ENGINEERING RIGOR"
            title="Our 6-Phase Delivery Framework"
            description="A repeatable, predictable methodology ensuring precision from initial inquiry to long-term deployment."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {engineeringSteps.map((step) => (
              <div
                key={step.step}
                className="nox-card p-5 flex flex-col justify-between h-full bg-white"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E3A8A] font-bold text-xs flex items-center justify-center font-mono mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xs font-bold tracking-wider uppercase text-[#0A2540] mb-2 font-mono">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#4A6080] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-500 font-mono">
                  PHASE {step.step} // ACTIVE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FEATURED PROJECTS ── */}
      <section
        className="nox-section bg-white border-b border-slate-200/80"
        aria-label="Featured projects"
      >
        <div className="nox-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              eyebrow="PORTFOLIO & CASE STUDIES"
              title="Featured Engineering Projects"
              description="Real-world technology systems deployed and running in operational environments."
            />
            <Button to="/projects" variant="secondary" size="sm" id="home-view-all-projects">
              View All Projects
              <ArrowRight size={13} aria-hidden="true" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="nox-card overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="aspect-video bg-slate-100 border-b border-slate-200/80 overflow-hidden relative">
                  <img
                    src="/projects/varuna-x/varuna-dashboard.png"
                    alt="VARUNA-X Dashboard"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 px-2 py-1 bg-white/95 rounded text-[10px] font-bold tracking-wider uppercase text-[#1E3A8A] font-mono shadow-xs">
                    ACTIVE PROJECT
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#1E3A8A] font-mono block mb-1">
                    AI & IOT INFRASTRUCTURE
                  </span>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                    VARUNA-X
                  </h3>
                  <p className="text-xs font-mono uppercase text-slate-500 mb-3">
                    AI Flood Intelligence & Drainage Response
                  </p>
                  <p className="text-sm text-[#4A6080] leading-relaxed">
                    An AI-powered flood prediction platform integrating IoT drainage sensors, GIS mapping,
                    and telemetry analytics to forecast and respond to urban inundation.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-[11px] font-mono text-slate-500 uppercase">
                  STATUS: OPERATIONAL
                </span>
                <a
                  href="https://varuna-x-22174.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#1E3A8A] hover:text-[#172554] font-mono flex items-center gap-1"
                >
                  View Live →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="nox-card overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="aspect-video bg-slate-100 border-b border-slate-200/80 overflow-hidden relative">
                  <img
                    src="/projects/ur-noted/urnoted-dashboard.jpg"
                    alt="UR Noted Dashboard"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 px-2 py-1 bg-white/95 rounded text-[10px] font-bold tracking-wider uppercase text-[#1E3A8A] font-mono shadow-xs">
                    ACTIVE PROJECT
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#1E3A8A] font-mono block mb-1">
                    ENTERPRISE SOFTWARE
                  </span>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                    UR NOTED
                  </h3>
                  <p className="text-xs font-mono uppercase text-slate-500 mb-3">
                    Training Attendance & Compliance Engine
                  </p>
                  <p className="text-sm text-[#4A6080] leading-relaxed">
                    Automated attendance and training compliance solution featuring role-based access control,
                    session tracking, and one-click compliance export.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-[11px] font-mono text-slate-500 uppercase">
                  STATUS: OPERATIONAL
                </span>
                <a
                  href="https://urnoted.syasans.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#1E3A8A] hover:text-[#172554] font-mono flex items-center gap-1"
                >
                  View Live →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="nox-card overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="aspect-video bg-slate-100 border-b border-slate-200/80 overflow-hidden relative">
                  <img
                    src="/projects/skillcetamol/skillcetamol-dashboard.jpg"
                    alt="SkillCetamol Portal"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 px-2 py-1 bg-white/95 rounded text-[10px] font-bold tracking-wider uppercase text-[#1E3A8A] font-mono shadow-xs">
                    ACTIVE PROJECT
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#1E3A8A] font-mono block mb-1">
                    EXAM ARCHITECTURE
                  </span>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                    SKILLCETAMOL
                  </h3>
                  <p className="text-xs font-mono uppercase text-slate-500 mb-3">
                    Enterprise Examination Portal
                  </p>
                  <p className="text-sm text-[#4A6080] leading-relaxed">
                    Secure multi-role testing platform featuring real-time proctor telemetry, automatic score
                    computation, student indexing, and high-concurrency capability.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-[11px] font-mono text-slate-500 uppercase">
                  STATUS: OPERATIONAL
                </span>
                <a
                  href="https://skillcetamol.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#1E3A8A] hover:text-[#172554] font-mono flex items-center gap-1"
                >
                  View Live →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS SECTION (LIGHT BLUE-TINT BACKGROUND) ── */}
      <section
        className="nox-section bg-[#EFF6FF] border-b border-blue-100 relative"
        aria-label="Client and stakeholder testimonials"
      >
        <div className="nox-container">
          <SectionHeader
            align="center"
            eyebrow="CLIENT TESTIMONIALS"
            title="Trusted by Visionary Organizations"
            description="Hear from leaders and technical partners who rely on Noxvion for mission-critical systems."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.author}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.1}
                className="bg-white border border-blue-100/90 rounded-2xl p-7 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200 relative"
              >
                <div>
                  {/* Star ratings */}
                  <div className="flex items-center gap-1 text-amber-400 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>

                  <Quote className="text-blue-200 mb-3" size={28} />
                  <p className="text-sm text-[#0A2540] leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="font-bold text-sm text-[#0A2540]">{t.author}</div>
                  <div className="text-xs text-[#1E3A8A] font-medium">{t.role}</div>
                  <div className="text-[11px] text-slate-500 font-mono">{t.org}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. TECHNOLOGY STACK ECOSYSTEM ── */}
      <section
        className="nox-section bg-white border-b border-slate-200/80"
        aria-label="Technology stack"
      >
        <div className="nox-container">
          <SectionHeader
            eyebrow="TECHNOLOGY TOOLCHAIN"
            title="Our Core Engineering Stack"
            description="Standardized, vetted frameworks and compilers ensuring long-term reliability and zero lock-in."
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {techEcosystem.map((domain) => (
              <div
                key={domain.domain}
                className="nox-card p-6 bg-[#F8FAFC] border-slate-200/80 hover:bg-white transition-all duration-200"
              >
                <p className="text-xs font-bold tracking-wider uppercase text-[#1E3A8A] mb-4 font-mono">
                  {domain.domain}
                </p>
                <div className="flex flex-col gap-2">
                  {domain.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm text-[#4A6080] hover:text-[#0A2540] transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. OPERATING PRINCIPLES ── */}
      <section
        className="nox-section bg-[#F8FAFC] border-b border-slate-200/80"
        aria-label="Core operating principles"
      >
        <div className="nox-container">
          <SectionHeader
            eyebrow="OPERATING PRINCIPLES"
            title="How We Engineer Technology"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="nox-card p-8 bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl text-[#1E3A8A] font-bold" aria-hidden="true">
                    {v.icon}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider text-slate-500 font-mono">
                    {v.id}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0A2540] mb-2">{v.title}</h3>
                <p className="text-sm text-[#4A6080] leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FINAL CTA ── */}
      <section
        className="nox-section bg-gradient-to-b from-white to-blue-50/50"
        aria-label="Call to action"
      >
        <div className="nox-container text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#1E3A8A] mb-4 font-mono">
            ENGINEERING PARTNERSHIP
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A2540] leading-tight tracking-tight mb-5">
            Have an Idea Worth Engineering?
          </h2>
          <p className="text-[#4A6080] text-base md:text-lg mb-8 leading-relaxed">
            Let's transform ambitious concepts, emerging papers, and complex real-world challenges
            into intelligent, deployed technology.
          </p>
          <div className="flex justify-center">
            <Button
              to="/work-with-us"
              variant="primary"
              size="lg"
              id="home-final-cta"
              className="bg-[#1E3A8A] text-white hover:bg-[#172554] shadow-md"
            >
              Start Collaboration
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Home;
