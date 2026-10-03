import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
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
    title: 'Innovation Hub — Research, Insights & Progress | NOXVION',
    description:
      'Explore technology insights, research notes, engineering developments, and breakthroughs emerging from the Noxvion ecosystem.',
  });

  const onSubmit = async (data: NewsletterFormValues) => {
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

    if (isConfigured(contactConfig.email)) {
      const subject = 'NOXVION Lab Telemetry Subscription';
      const body = `Please register ${data.email} to receive NOXVION lab telemetry and research publications.`;
      window.location.href = `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('client_launched');
      setStatusMessage(`Email client launched to confirm subscription with ${contactConfig.email}.`);
      return;
    }

    setStatus('config_notice');
    setStatusMessage('Subscription staged. Distribution endpoint (VITE_NEWSLETTER_ENDPOINT) is pending configuration.');
  };

  return (
    <PageContainer className="bg-white">
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
        aria-label="Innovation Hub Hero"
      >
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] mb-4 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
            NOXVION / INNOVATION HUB
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0A2540] mb-5">
            Ideas. Research.<br />
            <span className="text-[#1E3A8A]">Technology.</span> Progress.
          </h1>
          <p className="text-[#4A6080] text-base md:text-xl leading-relaxed max-w-2xl">
            Explore technology insights, applied research notes, engineering developments, and breakthroughs
            emerging from the Noxvion ecosystem.
          </p>
        </div>
      </section>

      {/* ── CATEGORY BAR ── */}
      <section className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-16 md:top-[72px] z-30 overflow-x-auto shadow-xs">
        <div className="nox-container">
          <div className="flex items-center gap-6 py-4 min-w-max font-mono">
            {articleCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`text-xs font-semibold tracking-wider uppercase pb-1 transition-colors relative ${
                  activeCategory === cat.slug
                    ? 'text-[#1E3A8A] font-bold border-b-2 border-[#1E3A8A]'
                    : 'text-slate-500 hover:text-[#0A2540]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED INNOVATION CARD (Varuna X) ── */}
      <section className="nox-section border-b border-slate-200/80 bg-[#F8FAFC]" aria-label="Featured Innovation">
        <div className="nox-container">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
              INNOVATION SPOTLIGHT
            </p>
            <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase hidden sm:inline-block">
              FLAGSHIP R&D INITIATIVE
            </span>
          </div>

          <a
            href="https://varuna-x-22174.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore Varuna X — AI Flood Intelligence & Drainage Response System"
            className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A]"
          >
            <div className="nox-card grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-white group">
              {/* Visual side */}
              <div className="lg:col-span-6 bg-slate-100 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 flex items-center justify-center min-h-[300px] md:min-h-[360px]">
                <img
                  src="/projects/varuna-x/varuna-dashboard.png"
                  alt="Varuna X Dashboard"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#0A2540] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>OPERATIONAL // ACTIVE</span>
                </div>
                <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-1.5 bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1.5 rounded-lg text-[10px] font-mono text-slate-700 shadow-xs">
                  <ExternalLink size={12} className="text-[#1E3A8A]" />
                  <span>LIVE DASHBOARD</span>
                </div>
              </div>

              {/* Info side */}
              <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <Badge variant="default">FEATURED CASE STUDY</Badge>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      LIVE TELEMETRY
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                    Varuna X
                  </h2>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#1E3A8A] mb-4">
                    AI Flood Intelligence & Drainage Response System
                  </p>
                  <p className="text-sm md:text-base text-[#4A6080] leading-relaxed mb-6">
                    An AI-powered flood prediction platform integrating IoT drain sensors, AI/ML inference,
                    GIS mapping, and digital-twin analytics to help predict and respond to urban flooding.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['LSTM / RF', 'ESP32 IOT', 'GIS MAPPING', 'DIGITAL TWIN'].map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-wider text-slate-600 uppercase border border-slate-200 px-2.5 py-1 bg-slate-50 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    PRJ_01 // APPLIED AI
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#1E3A8A] group-hover:text-[#172554] font-mono">
                    EXPLORE VARUNA X <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* ── INNOVATION ROADMAP ── */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-600 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
                R&D ROADMAP MILESTONES
              </p>
              <span className="text-[10px] font-mono text-[#1E3A8A] font-semibold uppercase">
                PHASE 05 // DEPLOYED
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
                  className={`p-4 rounded-xl border transition-all duration-200 ${
                    stage.status === 'active'
                      ? 'bg-blue-50/70 border-blue-300 shadow-xs'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      PHASE_{stage.step}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        stage.status === 'active'
                          ? 'bg-[#1E3A8A]'
                          : 'bg-emerald-500'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <h4 className="text-xs font-bold font-mono tracking-wider text-[#0A2540] uppercase mb-1 flex items-center gap-1">
                    {stage.title}
                    {idx < 4 && <span className="text-slate-300 hidden lg:inline ml-auto">→</span>}
                  </h4>
                  <p className="text-[11px] text-[#4A6080] leading-snug">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST FROM THE LAB ── */}
      <section className="nox-section border-b border-slate-200/80 bg-white" aria-label="Latest Publications">
        <div className="nox-container">
          <SectionHeader
            eyebrow="PUBLICATIONS & NOTES"
            title="Latest From The Lab"
            description="Technical monographs, system benchmarks, and research discoveries."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'NOTE-01',
                category: 'Engineering',
                title: 'Low-Latency Sensor Mesh Routing Over ESP32',
                desc: 'Empirical benchmark results reducing packet drop rates across multi-hop sub-gigahertz mesh topologies.',
                date: '2024.11.10',
              },
              {
                id: 'NOTE-02',
                category: 'Machine Learning',
                title: 'Quantized Neural Inference on Edge Hardware',
                desc: 'Evaluating INT8 quantization precision trade-offs in real-time hydrological computer vision workflows.',
                date: '2024.10.22',
              },
              {
                id: 'NOTE-03',
                category: 'Systems',
                title: 'Deterministic State Reconciliation in Offline-First Apps',
                desc: 'Architecture patterns for seamless telemetry buffering during extended remote connectivity outages.',
                date: '2024.09.15',
              },
            ].map((article) => (
              <div
                key={article.id}
                className="nox-card p-7 flex flex-col justify-between bg-[#F8FAFC] hover:bg-white transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-[10px] font-mono">
                    <span className="text-[#1E3A8A] font-bold uppercase">{article.category}</span>
                    <span className="text-slate-400 font-semibold">{article.id}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A2540] mb-2.5 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#4A6080] leading-relaxed mb-6">
                    {article.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{article.date}</span>
                  <span className="text-[#1E3A8A] font-bold">MONOGRAPH</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SECTION (Stay Connected) ── */}
      <section className="nox-section bg-[#F8FAFC]" aria-label="Stay Connected Newsletter">
        <div className="nox-container">
          <div className="nox-card p-8 md:p-12 bg-white border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#1E3A8A] font-bold mb-2">
                  NEWSLETTER DISPATCH
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-2">
                  Stay Informed on Lab Developments
                </h2>
                <p className="text-sm text-[#4A6080] leading-relaxed">
                  Subscribe to receive periodic engineering notes, technical articles, and project releases.
                </p>
              </div>

              <div className="lg:col-span-6">
                {status !== 'idle' ? (
                  <div
                    className={`rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border ${
                      status === 'success' || status === 'client_launched'
                        ? 'bg-blue-50 border-blue-200 text-[#1E3A8A]'
                        : status === 'config_notice'
                        ? 'bg-amber-50 border-amber-200 text-amber-800'
                        : 'bg-rose-50 border-rose-200 text-rose-800'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-3">
                      {status === 'success' || status === 'client_launched' ? (
                        <CheckCircle2 size={18} className="shrink-0 text-[#1E3A8A]" />
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
                      className="text-[10px] font-mono tracking-wider uppercase underline hover:text-[#0A2540] transition-colors self-end sm:self-auto shrink-0"
                    >
                      Subscribe Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <input
                        type="email"
                        placeholder="Enter email address"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        className="flex-1 bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-[#0A2540] placeholder:text-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#1E3A8A] hover:bg-[#172554] text-white font-semibold px-6 py-3 text-xs tracking-wider uppercase rounded-lg transition-colors shrink-0 disabled:opacity-50 shadow-sm"
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </div>
                    {errors.email && (
                      <p className="text-rose-600 text-xs flex items-center gap-1 font-medium mt-1 font-mono">
                        <AlertCircle size={12} /> {errors.email.message}
                      </p>
                    )}
                    <p className="text-[11px] text-slate-500 mt-1.5">
                      We respect your inbox. Unsubscribe anytime. No spam.
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

export default InnovationHub;
