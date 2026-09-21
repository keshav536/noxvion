import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { FoldText } from '../components/effects/FoldText';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
import { useSEO } from '../hooks/useSEO';
import { articleCategories } from '../data/articles';
import { contactConfig, isConfigured } from '../config/contact';

interface NewsletterFormValues {
  email: string;
}

type NewsletterStatus = 'idle' | 'success' | 'client_launched' | 'config_notice' | 'error';

export const InnovationHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [status, setStatus] = useState<NewsletterStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormValues>();

  useSEO({
    title: 'Innovation Hub — Ideas. Research. Technology. Progress.',
    description:
      'Explore technology insights, research notes, engineering developments, and breakthroughs emerging from the Noxvion ecosystem.',
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    // 1. If backend newsletter endpoint configured
    if (isConfigured(contactConfig.newsletterEndpoint)) {
      try {
        const res = await fetch(contactConfig.newsletterEndpoint!, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          setStatus('success');
          setStatusMessage('Subscribed to Noxvion Lab Telemetry.');
          reset();
          return;
        } else {
          setStatus('error');
          setStatusMessage(`Subscription service error (Status ${res.status}).`);
          return;
        }
      } catch {
        setStatus('error');
        setStatusMessage('Network connectivity error. Please try again later.');
        return;
      }
    }

    // 2. If client email configured, dispatch via mailto
    if (isConfigured(contactConfig.email)) {
      const subject = 'NOXVION Lab Telemetry Subscription';
      const body = `Please register ${data.email} to receive NOXVION lab telemetry and research publications.`;
      window.location.href = `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('client_launched');
      setStatusMessage(`Email client launched to confirm subscription with ${contactConfig.email}.`);
      return;
    }

    // 3. If neither endpoint nor email configured
    setStatus('config_notice');
    setStatusMessage('Subscription staged. Distribution endpoint (VITE_NEWSLETTER_ENDPOINT) is pending configuration.');
  };

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 bg-black text-white border-b border-white/10 overflow-hidden" aria-label="Innovation Hub Hero">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none -z-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" aria-hidden="true" />
            NOXVION / INNOVATION HUB
          </p>
          <FoldText
            as="h1"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            className="text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.05] tracking-[-0.03em] text-white mb-6"
          >
            Ideas. Research.<br />
            <span className="text-blue-400">Technology.</span> Progress.
          </FoldText>
          <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl">
            Explore technology insights, research notes, engineering developments, and breakthroughs
            emerging from the Noxvion ecosystem.
          </p>
        </div>
      </section>

      {/* ── CATEGORY BAR ── */}
      <section className="border-b border-white/10 bg-black/90 backdrop-blur-xl sticky top-16 md:top-[72px] z-30 overflow-x-auto shadow-md">
        <div className="nox-container">
          <div className="flex items-center gap-6 py-4 min-w-max font-mono">
            {articleCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`cursor-target text-xs font-semibold tracking-widest uppercase pb-1 transition-colors relative ${
                  activeCategory === cat.slug
                    ? 'text-blue-400 font-bold border-b-2 border-blue-500'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED INNOVATION CARD (Varuna X) ── */}
      <section className="nox-section border-b border-white/10 bg-[#070709]" aria-label="Featured Innovation">
        <div className="nox-container">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" aria-hidden="true" />
              [ SYS_MODULE ] / INNOVATION SPOTLIGHT
            </p>
            <span className="text-[10px] font-mono text-zinc-500 font-semibold uppercase hidden sm:inline-block">
              FLAGSHIP R&amp;D INITIATIVE
            </span>
          </div>

          <Card3D intensity="low" glowColor="rgba(59, 130, 246, 0.2)">
            <a
              href="https://varuna-x-22174.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore Varuna X — AI Flood Intelligence &amp; Drainage Response System"
              className="cursor-target block rounded-2xl focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
            >
              <div className="border border-white/10 bg-[#0e0e12] rounded-2xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-blue-500/50 hover:shadow-[0_24px_60px_rgba(59,130,246,0.18)] transition-all duration-300 group">
                
                {/* Visual side */}
                <div className="lg:col-span-6 bg-[#09090c] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 flex items-center justify-center min-h-[300px] md:min-h-[360px]">
                  <img
                    src="/projects/varuna-x/varuna-dashboard.png"
                    alt="Varuna X AI Flood Intelligence &amp; Drainage Response System"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-blue-500/10 opacity-70 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />
                  {/* Scanning line animation */}
                  <div
                    className="absolute top-0 left-0 w-full h-0.5 pointer-events-none z-10"
                    aria-hidden="true"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.8), transparent)',
                      animation: 'scanLine 4s ease-in-out infinite',
                    }}
                  />
                  {/* High-tech HUD telemetry badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-[10px] font-mono text-blue-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                    <span>LIVE TELEMETRY // ACTIVE</span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-[10px] font-mono text-zinc-300">
                    <ExternalLink size={12} className="text-blue-400" />
                    <span>EXTERNAL DEPLOYMENT</span>
                  </div>
                </div>

                {/* Info side */}
                <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between bg-[#0e0e12]">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <Badge variant="cyan">FEATURED PROJECT</Badge>
                      <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5 border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                        PROJECT ACTIVE
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Varuna X
                    </h2>
                    <p className="text-xs font-mono uppercase tracking-wider text-blue-400/90 mb-4">
                      AI Flood Intelligence &amp; Drainage Response System
                    </p>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6">
                      An AI-powered flood intelligence system combining IoT drain sensors, AI/ML prediction, GIS mapping, and digital-twin technology to help predict and respond to urban flooding.
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {['LSTM / RF', 'ESP32 IOT', 'GIS MAPPING', 'DIGITAL TWIN'].map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase border border-white/10 px-2.5 py-1 bg-white/[0.04] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500 uppercase">
                      ID: PRJ_01 // AI &amp; IOT
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase text-blue-400 font-mono group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-200">
                      EXPLORE VARUNA X <ArrowRight size={14} />
                    </span>
                  </div>
                </div>

              </div>
            </a>
          </Card3D>

          {/* ── INNOVATION ROADMAP ── */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-zinc-400 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" aria-hidden="true" />
                INNOVATION ROADMAP
              </p>
              <span className="text-[10px] font-mono text-blue-400 font-semibold uppercase">
                STAGE 05 // RELEASED &amp; OPERATIONAL
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {[
                { step: '01', title: 'RESEARCH', desc: 'System Formulation', status: 'completed' },
                { step: '02', title: 'PROTOTYPE', desc: 'Sensor & ML Testbed', status: 'completed' },
                { step: '03', title: 'TESTING', desc: 'Drain Telemetry Simulation', status: 'completed' },
                { step: '04', title: 'VALIDATION', desc: 'Urban GIS Calibration', status: 'completed' },
                { step: '05', title: 'RELEASE', desc: 'Active Live Deployment', status: 'active' },
              ].map((stage, idx) => (
                <div
                  key={stage.step}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    stage.status === 'active'
                      ? 'bg-blue-950/30 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                      : 'bg-[#0e0e12] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-zinc-500">
                      PHASE_{stage.step}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        stage.status === 'active'
                          ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)] animate-pulse'
                          : 'bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-white uppercase mb-1 flex items-center gap-1.5">
                    {stage.title}
                    {idx < 4 && (
                      <span className="text-zinc-600 hidden lg:inline ml-auto">→</span>
                    )}
                  </h4>
                  <p className="text-[11px] text-zinc-400 leading-snug">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── LATEST FROM THE LAB ── */}
      <section className="nox-section border-b border-white/10 bg-black" aria-label="Latest Publications">
        <div className="nox-container">
          <SectionHeader
            eyebrow="REPOSITORY"
            title="Latest From The Lab"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'NODE-A1',
                category: 'Engineering',
                title: 'Quantum State Preservation Framework',
                desc: 'Initial results from the QSP framework show coherence loss mitigation across distributed nodes.',
                date: '2024.10.15',
              },
              {
                id: 'NODE-B2',
                category: 'Research',
                title: 'Algorithmic Efficiency in High-Density Environments',
                desc: 'A review of routing optimizations within dense, multi-layered neural networks proposing a novel geometric approach.',
                date: '2024.10.02',
              },
              {
                id: 'NODE-C3',
                category: 'Insights',
                title: 'The Future of Automated Fabrication Tolerances',
                desc: 'Examining the physical limits of current fabrication technologies and AI-driven precision calibration.',
                date: '2024.09.28',
              },
            ].map((article) => (
              <Card3D key={article.id} intensity="low" glowColor="rgba(59, 130, 246, 0.12)" className="h-full">
                <div className="h-full bg-[#0e0e12] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_16px_36px_rgba(59,130,246,0.12)] transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
                  <div>
                    <div className="flex items-center justify-between mb-4 text-[10px] font-mono">
                      <span className="text-blue-400 font-bold uppercase">{article.category}</span>
                      <span className="text-zinc-500 font-semibold">{article.id}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                      {article.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>{article.date}</span>
                    <span className="text-blue-400 font-bold">ARCHIVED REPORT</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SECTION (Stay Connected) ── */}
      <section className="nox-section bg-[#070709]" aria-label="Stay Connected Newsletter">
        <div className="nox-container">
          <div className="bg-[#0e0e12] border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Stay Connected
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Subscribe to receive latest insights and technology breakthroughs from our labs.
                </p>
              </div>

              <div className="lg:col-span-6">
                {status !== 'idle' ? (
                  <div
                    className={`rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border ${
                      status === 'success' || status === 'client_launched'
                        ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                        : status === 'config_notice'
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-3">
                      {status === 'success' || status === 'client_launched' ? (
                        <CheckCircle2 size={18} className="shrink-0" />
                      ) : (
                        <AlertCircle size={18} className="shrink-0" />
                      )}
                      <span className="text-xs font-semibold tracking-wide font-mono">
                        {statusMessage}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="text-[10px] font-mono tracking-widest uppercase underline hover:text-white transition-colors self-end sm:self-auto shrink-0"
                    >
                      Subscribe Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <input
                        type="email"
                        placeholder="ENTER EMAIL ADDRESS"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        className="flex-1 bg-black/60 border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-mono"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 text-xs tracking-widest uppercase rounded-lg transition-colors shrink-0 disabled:opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.3)] font-mono"
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </div>
                    {errors.email && (
                      <p className="text-rose-400 text-xs flex items-center gap-1 font-medium mt-1 font-mono">
                        <AlertCircle size={12} /> {errors.email.message}
                      </p>
                    )}
                    <p className="text-[10px] text-zinc-500 mt-1 font-mono">
                      By subscribing, you agree to our telemetry and communication policies.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
