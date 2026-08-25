import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { useSEO } from '../hooks/useSEO';
import { articleCategories } from '../data/articles';

interface NewsletterFormValues {
  email: string;
}

export const InnovationHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [subscribed, setSubscribed] = useState(false);

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

  const onSubmit = async (_data: NewsletterFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubscribed(true);
    reset();
  };

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="py-20 md:py-28 border-b border-nox-border grid-bg" aria-label="Innovation Hub Hero">
        <div className="nox-container">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4">
            NOXVION / INNOVATION HUB
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.05] tracking-[-0.03em] text-nox-text mb-6">
            Ideas. Research.<br />
            <span className="text-nox-cyan">Technology.</span> Progress.
          </h1>
          <p className="text-nox-text-muted text-base md:text-xl leading-relaxed max-w-2xl">
            Explore technology insights, research notes, engineering developments, and breakthroughs
            emerging from the Noxvion ecosystem.
          </p>
        </div>
      </section>

      {/* ── CATEGORY BAR ── */}
      <section className="border-b border-nox-border bg-nox-base sticky top-16 md:top-[70px] z-30 overflow-x-auto">
        <div className="nox-container">
          <div className="flex items-center gap-6 py-4 min-w-max">
            {articleCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`text-xs font-semibold tracking-widest uppercase pb-1 transition-colors relative ${
                  activeCategory === cat.slug
                    ? 'text-nox-text border-b-2 border-nox-cyan'
                    : 'text-nox-text-muted hover:text-nox-text'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED INSIGHT CARD (Coming Soon) ── */}
      <section className="nox-section border-b border-nox-border" aria-label="Featured Insight">
        <div className="nox-container">
          <div className="border border-nox-border bg-nox-layer grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
            <div
              className="lg:col-span-6 bg-nox-base p-8 flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-nox-border relative min-h-[260px]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,240,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.04) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            >
              <div className="text-center">
                <span className="w-3 h-3 bg-nox-cyan inline-block mb-3 animate-pulse" />
                <p className="text-[11px] font-mono tracking-widest uppercase text-nox-text-dim">
                  LABORATORY BENCHMARK IN PROGRESS
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="cyan">FEATURED INSIGHT</Badge>
                  <span className="text-[10px] font-mono text-nox-text-dim">ID: FEAT-01</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-nox-text mb-4">
                  Coming Soon
                </h2>
                <p className="text-sm md:text-base text-nox-text-muted leading-relaxed mb-8">
                  A major technological insight is currently undergoing final validation in our labs.
                  Stay tuned for detailed research notes and engineering updates.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-nox-border text-xs text-nox-text-dim font-mono">
                <span>DATE: TBD</span>
                <span className="text-nox-cyan flex items-center gap-1">
                  PUBLICATION PENDING <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST FROM THE LAB ── */}
      <section className="nox-section border-b border-nox-border" aria-label="Latest Publications">
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
              <div
                key={article.id}
                className="bg-nox-layer border border-nox-border p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-[10px] font-mono">
                    <span className="text-nox-cyan uppercase">{article.category}</span>
                    <span className="text-nox-text-dim">{article.id}</span>
                  </div>
                  <h3 className="text-base font-semibold text-nox-text mb-3 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-nox-text-muted leading-relaxed mb-6">
                    {article.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-nox-border flex items-center justify-between text-[10px] font-mono text-nox-text-dim">
                  <span>{article.date}</span>
                  <span className="text-nox-cyan">ARCHIVED REPORT</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SECTION (Stay Connected) ── */}
      <section className="nox-section bg-nox-layer/30" aria-label="Stay Connected Newsletter">
        <div className="nox-container">
          <div className="bg-nox-layer border border-nox-border p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-nox-text mb-3">
                  Stay Connected
                </h2>
                <p className="text-sm text-nox-text-muted leading-relaxed">
                  Subscribe to receive latest insights and technology breakthroughs from our labs.
                </p>
              </div>

              <div className="lg:col-span-6">
                {subscribed ? (
                  <div className="bg-nox-cyan/10 border border-nox-cyan/40 p-4 text-nox-cyan flex items-center gap-3">
                    <CheckCircle2 size={18} />
                    <span className="text-xs font-semibold tracking-widest uppercase">
                      Subscribed to Noxvion Lab Telemetry.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="flex flex-col sm:flex-row gap-0 border border-nox-border bg-nox-base">
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
                        className="flex-1 bg-transparent px-4 py-3 text-xs text-nox-text placeholder:text-nox-text-dim focus:outline-none"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-nox-cyan text-nox-base font-semibold px-6 py-3 text-xs tracking-widest uppercase hover:bg-nox-cyan-dim transition-colors shrink-0 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-xs flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email.message}
                      </p>
                    )}
                    <p className="text-[10px] text-nox-text-dim">
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
