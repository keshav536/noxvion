import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { FoldText } from '../components/effects/FoldText';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
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
      <section className="relative py-20 md:py-28 bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_60%,#3B82F6_100%)] text-white border-b border-[#D9E7F5]/20 overflow-hidden" aria-label="Innovation Hub Hero">
        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-4">
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
            <span className="text-[#60A5FA]">Technology.</span> Progress.
          </FoldText>
          <p className="text-[#D9E7F5] text-base md:text-xl leading-relaxed max-w-2xl">
            Explore technology insights, research notes, engineering developments, and breakthroughs
            emerging from the Noxvion ecosystem.
          </p>
        </div>
      </section>

      {/* ── CATEGORY BAR ── */}
      <section className="border-b border-[#D9E7F5] bg-white sticky top-16 md:top-[70px] z-30 overflow-x-auto shadow-sm">
        <div className="nox-container">
          <div className="flex items-center gap-6 py-4 min-w-max">
            {articleCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`text-xs font-semibold tracking-widest uppercase pb-1 transition-colors relative ${
                  activeCategory === cat.slug
                    ? 'text-[#1E3A8A] font-bold border-b-2 border-[#1E3A8A]'
                    : 'text-[#627D98] hover:text-[#0A2540]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED INSIGHT CARD (Coming Soon) ── */}
      <section className="nox-section border-b border-[#D9E7F5] bg-white" aria-label="Featured Insight">
        <div className="nox-container">
          <Card3D intensity="low" glowColor="rgba(59, 130, 246, 0.1)">
            <div className="border border-[#D9E7F5] bg-[#F8FAFC] rounded-2xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-[0_12px_30px_rgba(10,37,64,0.06)]">
            <div
              className="lg:col-span-6 bg-[#EFF6FF] p-8 flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-[#D9E7F5] relative min-h-[260px]"
            >
              <div className="text-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#1E3A8A] inline-block mb-3 animate-pulse" />
                <p className="text-[11px] font-mono font-bold tracking-widest uppercase text-[#1E3A8A]">
                  LABORATORY BENCHMARK IN PROGRESS
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="cyan">FEATURED INSIGHT</Badge>
                  <span className="text-[10px] font-mono text-[#627D98] font-semibold">ID: FEAT-01</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4">
                  Coming Soon
                </h2>
                <p className="text-sm md:text-base text-[#334E68] leading-relaxed mb-8">
                  A major technological insight is currently undergoing final validation in our labs.
                  Stay tuned for detailed research notes and engineering updates.
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#D9E7F5] text-xs text-[#627D98] font-mono">
                <span>DATE: TBD</span>
                <span className="text-[#1E3A8A] font-bold flex items-center gap-1">
                  PUBLICATION PENDING <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
          </Card3D>
        </div>
      </section>

      {/* ── LATEST FROM THE LAB ── */}
      <section className="nox-section border-b border-[#D9E7F5] bg-[#F8FAFC]" aria-label="Latest Publications">
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
              <Card3D key={article.id} intensity="low" glowColor="rgba(59, 130, 246, 0.08)" className="h-full">
                <div className="h-full bg-white border border-[#D9E7F5] rounded-2xl p-6 flex flex-col justify-between hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300 shadow-[0_12px_30px_rgba(10,37,64,0.06)]">
                  <div>
                    <div className="flex items-center justify-between mb-4 text-[10px] font-mono">
                      <span className="text-[#1E3A8A] font-bold uppercase">{article.category}</span>
                      <span className="text-[#627D98] font-semibold">{article.id}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0A2540] mb-3 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#334E68] leading-relaxed mb-6">
                      {article.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#D9E7F5] flex items-center justify-between text-[10px] font-mono text-[#627D98]">
                    <span>{article.date}</span>
                    <span className="text-[#1E3A8A] font-bold">ARCHIVED REPORT</span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER SECTION (Stay Connected) ── */}
      <section className="nox-section bg-white" aria-label="Stay Connected Newsletter">
        <div className="nox-container">
          <div className="bg-[#F8FAFC] border border-[#D9E7F5] rounded-2xl p-8 md:p-12 shadow-[0_12px_30px_rgba(10,37,64,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-3">
                  Stay Connected
                </h2>
                <p className="text-sm text-[#334E68] leading-relaxed">
                  Subscribe to receive latest insights and technology breakthroughs from our labs.
                </p>
              </div>

              <div className="lg:col-span-6">
                {subscribed ? (
                  <div className="bg-[#EFF6FF] border border-[#BBD3F2] rounded-xl p-4 text-[#1E3A8A] flex items-center gap-3">
                    <CheckCircle2 size={18} />
                    <span className="text-xs font-semibold tracking-widest uppercase">
                      Subscribed to Noxvion Lab Telemetry.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div className="flex flex-col sm:flex-row gap-2">
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
                        className="flex-1 bg-white border border-[#D9E7F5] rounded-[10px] px-4 py-3 text-xs text-[#0A2540] placeholder:text-[#627D98] focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 transition-all shadow-sm"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#1E3A8A] hover:bg-[#3B82F6] text-white font-bold px-6 py-3 text-xs tracking-widest uppercase rounded-[10px] transition-colors shrink-0 disabled:opacity-50 shadow-md"
                      >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                      </button>
                    </div>
                    {errors.email && (
                      <p className="text-red-600 text-xs flex items-center gap-1 font-medium mt-1">
                        <AlertCircle size={12} /> {errors.email.message}
                      </p>
                    )}
                    <p className="text-[10px] text-[#627D98] mt-1">
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
