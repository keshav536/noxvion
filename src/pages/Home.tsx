import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Code2, Wifi, Settings2, FlaskConical,
  Cpu, Monitor, BarChart2, Box, Star, Quote,
  CheckCircle2, ShieldCheck, Layers, Award,
} from "lucide-react";
import { motion, type Variants, useInView } from "framer-motion";
import { PageContainer } from "../components/layout/PageContainer";
import { useSEO } from "../hooks/useSEO";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const heroStats = [
  { value: "50+",  label: "Projects Delivered" },
  { value: "20+",  label: "Happy Clients" },
  { value: "4+",   label: "Domains" },
  { value: "100%", label: "Commitment" },
];

const services = [
  { icon: Cpu,         title: "AI & Software",       desc: "Custom AI models, machine learning pipelines, and intelligent software tailored to your business needs.", tags: ["PyTorch","FastAPI","Python"],    href: "/solutions/ai-machine-learning" },
  { icon: Code2,       title: "Web Experiences",      desc: "Modern, performant web applications with exceptional UX — from landing pages to full-stack platforms.", tags: ["React","TypeScript","Node.js"], href: "/solutions/web-software" },
  { icon: Wifi,        title: "IoT & Edge",           desc: "Connected hardware systems, sensor networks, and real-time data pipelines for industrial applications.", tags: ["ESP32","MQTT","FreeRTOS"],     href: "/solutions/iot" },
  { icon: Settings2,   title: "Automation",           desc: "Workflow automation, process orchestration, and intelligent bots that eliminate manual work at scale.", tags: ["Docker","Redis","Node.js"],    href: "/solutions/automation" },
  { icon: FlaskConical,title: "Research & R&D",       desc: "Deep technical research, prototype development, and R&D engineering for cutting-edge domains.", tags: ["ROS2","Python","Matlab"],       href: "/solutions/research-product-rnd" },
];

const testimonials = [
  { quote: "NOXVION provided unprecedented engineering clarity for our flood mitigation modeling. Their ability to bridge physical sensors with real-time AI dashboards was flawless.", author: "Dr. Aris Thorne",   role: "Principal Hydrology Advisor",         org: "Urban Infrastructure Initiative", rating: 5 },
  { quote: "The speed and reliability of our automated compliance engine exceeded enterprise expectations. Solid code, crisp interfaces, and zero downtime.",                           author: "Elena Vasquez",   role: "Director of Corporate Operations",    org: "Syasans Global Services",         rating: 5 },
  { quote: "Finding a partner that understands low-level hardware constraints and high-scale web platforms equally well is rare. Noxvion has that multidisciplinary mastery.",          author: "Marcus Vance",    role: "Head of Technology Strategy",         org: "Apex Automation Labs",             rating: 5 },
];

const trustItems = [
  { name: "ISO 27001",       detail: "Security Baseline", icon: ShieldCheck },
  { name: "IEEE Standards",  detail: "RF Compliance",     icon: Cpu },
  { name: "ROS 2",           detail: "Robotics & Edge",   icon: Layers },
  { name: "Industrial MQTT", detail: "Sensor Bus",        icon: CheckCircle2 },
  { name: "Enterprise QA",   detail: "CI/CD Validated",   icon: Award },
];

const projects = [
  { img: "/projects/varuna-x/varuna-dashboard.png",        alt: "VARUNA-X Dashboard",   category: "AI & IoT Infrastructure", title: "VARUNA-X",     subtitle: "AI Flood Intelligence",          desc: "An AI-powered flood prediction platform integrating IoT sensors, GIS mapping, and telemetry analytics to forecast urban inundation.", href: "https://varuna-x-22174.web.app/" },
  { img: "/projects/ur-noted/urnoted-dashboard.jpg",       alt: "UR Noted Dashboard",   category: "Enterprise Software",     title: "UR NOTED",     subtitle: "Attendance & Compliance Engine", desc: "Automated training compliance solution featuring role-based access control, session tracking, and one-click compliance export.",     href: "https://urnoted.syasans.com/" },
  { img: "/projects/skillcetamol/skillcetamol-dashboard.jpg", alt: "SkillCetamol Portal", category: "Exam Architecture",     title: "SKILLCETAMOL", subtitle: "Enterprise Examination Portal",  desc: "Secure multi-role testing platform with real-time proctor telemetry, automatic score computation, and high-concurrency capability.", href: "https://skillcetamol.online/" },
];

function useCountUp(end: string, inView: boolean) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!inView || !ref.current) return;
    const num = parseFloat(end.replace(/[^0-9.]/g, ""));
    const suffix = end.replace(/[0-9.]/g, "");
    if (isNaN(num)) { if (ref.current) ref.current.textContent = end; return; }
    let cur = 0;
    const duration = 1200;
    const step = 16;
    const inc = num / (duration / step);
    const timer = setInterval(() => {
      cur = Math.min(cur + inc, num);
      if (ref.current) ref.current.textContent = Math.round(cur) + suffix;
      if (cur >= num) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, end]);
  return ref;
}

const StatItem: React.FC<{ value: string; label: string; index: number }> = ({ value, label, index }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true });
  const numRef = useCountUp(value, inView);
  return (
    <div ref={wrapRef} className="flex items-center">
      {index > 0 && <div className="w-px h-10 bg-gray-200 mx-5 shrink-0" aria-hidden="true" />}
      <div>
        <div className="text-2xl md:text-3xl font-extrabold text-[#0B0D12] leading-none tracking-tight">
          <span ref={numRef}>{value}</span>
        </div>
        <div className="text-[11px] text-[#6B7280] font-medium mt-1">{label}</div>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  useSEO({
    title: "NOXVION — We Turn Ambitious Ideas into Digital Experiences",
    description: "Noxvion is a technology and creative studio helping businesses build modern web experiences, AI solutions, 3D content and digital products that create real impact.",
  });

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const composition = hero.querySelector<HTMLElement>(".hero-composition");
    if (!composition) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = hero.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const dy = (e.clientY - rect.top - rect.height / 2) / rect.height;
      composition.style.transform = `translate(${dx * 18}px, ${dy * 10}px)`;
    };
    const reset = () => { composition.style.transform = ""; };
    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", reset);
    return () => { hero.removeEventListener("mousemove", handleMouseMove); hero.removeEventListener("mouseleave", reset); };
  }, []);

  return (
    <PageContainer className="bg-transparent">

      {/* ── 1. HERO ── */}
      <section ref={heroRef} className="hero-bg relative min-h-[100svh] flex items-center overflow-hidden" aria-label="Hero">
        {/* dot-grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.28]" style={{ backgroundImage: "radial-gradient(circle, rgba(30,64,175,0.18) 1px, transparent 1px)", backgroundSize: "32px 32px" }} aria-hidden="true" />

        {/* silk-wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ filter: "blur(0.8px)" }}>
            <path d="M0 110C240 55 480 0 720 75C960 150 1200 185 1440 130V220H0Z" fill="rgba(201,216,255,0.40)" />
            <path d="M0 150C300 95 600 38 900 112C1200 186 1340 210 1440 170V220H0Z" fill="rgba(230,238,255,0.55)" />
            <path d="M0 190C200 155 500 125 800 162C1100 200 1290 218 1440 200V220H0Z" fill="rgba(248,250,255,0.85)" />
          </svg>
        </div>

        <div className="nox-container relative z-10 py-32 md:min-h-[100svh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center w-full">

            {/* LEFT */}
            <motion.div className="flex flex-col" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.p variants={fadeUp} custom={0} className="nox-eyebrow mb-5">IDEAS · TECHNOLOGY · IMPACT</motion.p>

              <motion.h1 variants={fadeUp} custom={1} className="font-extrabold leading-[0.97] tracking-[-0.035em] text-[#0B0D12] mb-7" style={{ fontSize: "clamp(2.5rem,5.2vw,4.1rem)" }}>
                We turn ambitious<br />ideas into digital{" "}
                <span className="text-blue-gradient">experiences.</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-[#4B5563] text-lg leading-relaxed mb-8 max-w-[520px]">
                Noxvion is a technology and creative studio helping businesses build modern web experiences, AI solutions, 3D content and digital products that create real impact.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap items-center gap-3 mb-12">
                <Link to="/projects" id="hero-cta-work" className="btn-primary group">
                  Explore Our Work
                  <ArrowRight size={15} className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
                <Link to="/contact" id="hero-cta-project" className="btn-secondary">Start a Project</Link>
              </motion.div>

              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap items-center">
                {heroStats.map((s, i) => <StatItem key={s.label} value={s.value} label={s.label} index={i} />)}
              </motion.div>
            </motion.div>

            {/* RIGHT – 3D Composition */}
            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="hero-composition flex items-center justify-center relative" style={{ transition: "transform 0.35s cubic-bezier(0.25,0.1,0.25,1)" }} aria-hidden="true">
              <div className="relative w-full max-w-[540px] mx-auto float-slow">
                <img
                  src="/hero-glass-ring.png"
                  alt="Noxvion 3D Glass Emblem"
                  className="w-full h-auto object-contain select-none pointer-events-none"
                  style={{
                    filter: "drop-shadow(0 24px 50px rgba(37,99,235,0.2))",
                  }}
                  loading="eager"
                />

                {/* Orbiting glass service cards */}
                <div className="glass-card absolute top-[8%] left-[-5%] flex items-center gap-3 px-4 py-3 float-card" style={{ animationDelay: "0s" }}>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0"><Cpu size={16} className="text-[#1E40AF]" /></div>
                  <div><div className="text-[11px] font-bold text-[#0B0D12] leading-none">AI & Software</div><div className="text-[10px] text-[#6B7280] mt-0.5">Machine Learning</div></div>
                </div>

                <div className="glass-card absolute top-[8%] right-[-5%] flex items-center gap-3 px-4 py-3 float-card" style={{ animationDelay: "1.1s" }}>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0"><Box size={16} className="text-[#1E40AF]" /></div>
                  <div><div className="text-[11px] font-bold text-[#0B0D12] leading-none">3D & Animation</div><div className="text-[10px] text-[#6B7280] mt-0.5">Visual Content</div></div>
                </div>

                <div className="glass-card absolute bottom-[18%] left-[-8%] flex items-center gap-3 px-4 py-3 float-card" style={{ animationDelay: "0.6s" }}>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0"><Monitor size={16} className="text-[#1E40AF]" /></div>
                  <div><div className="text-[11px] font-bold text-[#0B0D12] leading-none">Web Experiences</div><div className="text-[10px] text-[#6B7280] mt-0.5">Modern Platforms</div></div>
                </div>

                <div className="glass-card absolute bottom-[18%] right-[-8%] flex items-center gap-3 px-4 py-3 float-card" style={{ animationDelay: "1.65s" }}>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0"><BarChart2 size={16} className="text-[#1E40AF]" /></div>
                  <div><div className="text-[11px] font-bold text-[#0B0D12] leading-none">Digital Marketing</div><div className="text-[10px] text-[#6B7280] mt-0.5">Growth & Reach</div></div>
                </div>

                {/* Floating orbs */}
                <div className="absolute top-1/2 left-[-18px] w-4 h-4 rounded-full float-mid" style={{ background: "linear-gradient(135deg,rgba(147,197,253,0.85),rgba(59,130,246,0.55))", boxShadow: "0 2px 12px rgba(59,130,246,0.35)", animationDelay: "0.3s" }} />
                <div className="absolute top-[25%] right-[-10px] w-2.5 h-2.5 rounded-full float-slow" style={{ background: "linear-gradient(135deg,rgba(196,220,255,0.9),rgba(99,163,246,0.7))", boxShadow: "0 2px 8px rgba(59,130,246,0.25)", animationDelay: "1.4s" }} />
                <div className="absolute bottom-[32%] right-[-14px] w-3 h-3 rounded-full float-mid" style={{ background: "linear-gradient(135deg,rgba(219,234,254,0.95),rgba(147,197,253,0.8))", boxShadow: "0 2px 10px rgba(59,130,246,0.22)", animationDelay: "0.85s" }} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ── */}
      <section className="py-8 bg-white border-b border-gray-100" aria-label="Standards and compliance">
        <div className="nox-container">
          <p className="text-center nox-eyebrow mb-6">Engineering Baselines & Industrial Compliance</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 transition-all duration-200">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1E40AF] flex items-center justify-center shrink-0"><Icon size={16} aria-hidden="true" /></div>
                  <div>
                    <div className="text-xs font-bold text-[#0B0D12]">{item.name}</div>
                    <div className="text-[10px] text-gray-500 font-medium">{item.detail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ── */}
      <section className="nox-section bg-[#FBFAF8] border-b border-gray-100" aria-label="Services" id="services">
        <div className="nox-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="nox-eyebrow mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0D12] tracking-tight leading-tight mb-3">End-to-end digital capabilities</h2>
              <p className="text-[#4B5563] max-w-lg text-base">From AI to 3D content, we bring the full creative and technical stack under one roof.</p>
            </div>
            <Link to="/solutions" id="services-view-all" className="btn-secondary shrink-0 self-start md:self-auto">View All Services <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} className="nox-card p-6 md:p-7 flex flex-col group">
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 rounded-xl bg-blue-50 text-[#1E40AF] group-hover:bg-[#1E40AF] group-hover:text-white transition-colors duration-200"><Icon size={20} aria-hidden="true" /></div>
                    <span className="text-xs font-semibold tracking-wider text-gray-300">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0D12] mb-2 group-hover:text-[#1E40AF] transition-colors duration-200">{s.title}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.tags.map((t) => <span key={t} className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded bg-gray-100 text-gray-600">{t}</span>)}
                  </div>
                  <Link to={s.href} className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E40AF]" id={`service-${s.title.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}`}>
                    Explore Capability <ArrowRight size={13} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED PROJECTS ── */}
      <section className="nox-section bg-white border-b border-gray-100" aria-label="Featured projects">
        <div className="nox-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="nox-eyebrow mb-3">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0D12] tracking-tight leading-tight">Featured Projects</h2>
            </div>
            <Link to="/projects" id="home-view-all-projects" className="btn-secondary shrink-0 self-start sm:self-auto">View All <ArrowRight size={14} aria-hidden="true" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="nox-card overflow-hidden flex flex-col group">
                <div className="aspect-video bg-gray-100 border-b border-gray-100 overflow-hidden relative">
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute top-3 right-3 px-2 py-1 bg-white/95 rounded text-[10px] font-bold tracking-wider uppercase text-[#1E40AF] shadow-sm">Active Project</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#1E40AF] block mb-1">{p.category}</span>
                  <h3 className="text-lg font-bold text-[#0B0D12] mb-1 group-hover:text-[#1E40AF] transition-colors">{p.title}</h3>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">{p.subtitle}</p>
                  <p className="text-sm text-[#4B5563] leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 uppercase tracking-wide">Operational</span>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#1E40AF] hover:text-[#1E3A8A] flex items-center gap-1">View Live →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ── */}
      <section className="nox-section bg-[#EFF6FF] border-b border-blue-100" aria-label="Testimonials">
        <div className="nox-container">
          <div className="text-center mb-12">
            <p className="nox-eyebrow mb-3">Client Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0D12] tracking-tight">Trusted by Visionary Organizations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.author} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5} className="bg-white border border-blue-100 rounded-2xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
                <div>
                  <div className="flex items-center gap-0.5 text-amber-400 mb-4">{[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
                  <Quote className="text-blue-200 mb-3" size={24} />
                  <p className="text-sm text-[#0B0D12] leading-relaxed italic mb-5">"{t.quote}"</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-sm text-[#0B0D12]">{t.author}</div>
                  <div className="text-xs text-[#1E40AF] font-medium">{t.role}</div>
                  <div className="text-[11px] text-gray-400">{t.org}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ── */}
      <section className="nox-section bg-white" aria-label="Call to action">
        <div className="nox-container text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <p className="nox-eyebrow mb-4">Engineering Partnership</p>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-[#0B0D12] leading-tight tracking-tight mb-5">Have an idea worth engineering?</h2>
            <p className="text-[#4B5563] text-base md:text-lg mb-8 leading-relaxed">Let us transform ambitious concepts and complex real-world challenges into intelligent, deployed technology.</p>
            <Link to="/contact" id="home-final-cta" className="btn-primary inline-flex group">
              Start Collaboration
              <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

    </PageContainer>
  );
};

export default Home;
