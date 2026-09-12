import React from 'react';
import { ArrowRight, Compass, FlaskConical, Network, Users } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { FoldText } from '../components/effects/FoldText';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
import { useSEO } from '../hooks/useSEO';
import logo from '../assets/logo.png';

const collaborationVectors = [
  {
    num: '01',
    title: 'Build With Us',
    description:
      'Engage our engineering teams to architect and deploy custom software solutions or hardware integrations tailored to your enterprise specifications.',
    cta: 'Initiate Build',
    icon: Compass,
    action: '/contact?type=build',
  },
  {
    num: '02',
    title: 'Research With Us',
    description:
      'Collaborate with our R&D division on exploratory projects, pushing the boundaries of machine intelligence, data structuring, and advanced algorithms.',
    cta: 'Propose Research',
    icon: FlaskConical,
    action: '/contact?type=research',
  },
  {
    num: '03',
    title: 'Partner With Us',
    description:
      'Establish strategic alliances to co-develop products, integrate our underlying technologies into your platform, or expand market capabilities.',
    cta: 'Explore Partnership',
    icon: Network,
    action: '/contact?type=partner',
  },
  {
    num: '04',
    title: 'Join Us',
    description:
      'Bring your expertise to our core team. We are actively seeking exceptional engineers, researchers, and technical operators.',
    cta: 'View Positions',
    icon: Users,
    action: '/contact?type=join',
  },
];

const operationalProtocol = [
  'DISCOVER',
  'RESEARCH',
  'DESIGN',
  'ENGINEER',
  'PROTOTYPE',
  'INTEGRATE',
  'DEPLOY',
];

export const WorkWithUs: React.FC = () => {
  useSEO({
    title: 'Work With Us — Have an Idea Worth Engineering?',
    description:
      "Let's transform ambitious ideas, research concepts, and real-world challenges into intelligent technology.",
  });

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_60%,#3B82F6_100%)] text-white border-b border-[#D9E7F5]/20 overflow-hidden" aria-label="Work With Us Hero">
        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-4">
                NOXVION / WORK WITH US
              </p>
              <FoldText
                as="h1"
                splitBy="word"
                hinge="top"
                trigger="scroll"
                className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-white mb-6"
              >
                Have an Idea Worth{' '}
                <span className="text-[#60A5FA]">Engineering?</span>
              </FoldText>
              <p className="text-[#D9E7F5] text-base md:text-xl leading-relaxed max-w-xl">
                Let's transform ambitious ideas, research concepts, and real-world challenges into
                intelligent technology.
              </p>
            </div>

            {/* Right Brand Vector Visual with 3D Depth */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Card3D intensity="low" glowColor="rgba(59, 130, 246, 0.12)" className="max-w-sm w-full">
                <div className="border border-[#D9E7F5] bg-white text-[#0A2540] p-8 relative rounded-2xl shadow-2xl">
                  <div className="flex justify-between items-center mb-6 border-b border-[#D9E7F5] pb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#1E3A8A]">
                      VECTOR SPEC
                    </span>
                    <span className="text-[10px] font-mono text-[#627D98] font-semibold">IMG_6_SYS</span>
                  </div>
                  <div className="flex items-center justify-center p-6 bg-[#F8FAFC] border border-[#D9E7F5] rounded-xl">
                    <img
                      src={logo}
                      alt="NOXVION emblem"
                      className="w-32 h-auto object-contain"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-[10px] font-mono tracking-widest text-[#627D98] font-semibold uppercase">
                      COLLABORATION PROTOCOL: ACTIVE
                    </p>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATION VECTORS ── */}
      <section className="nox-section border-b border-[#D9E7F5] bg-[#F8FAFC]" aria-label="Collaboration Vectors">
        <div className="nox-container">
          <SectionHeader
            eyebrow="ENGAGEMENT MODELS"
            title="Collaboration Vectors"
            description="Select the channel that corresponds with your organizational objectives and engineering scope."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborationVectors.map((v) => {
              const Icon = v.icon;
              return (
                <Card3D key={v.num} intensity="low" glowColor="rgba(59, 130, 246, 0.08)" className="h-full">
                  <div className="h-full bg-white border border-[#D9E7F5] rounded-2xl p-8 flex flex-col justify-between hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300 shadow-[0_12px_30px_rgba(10,37,64,0.06)] new-icon-rotate-parent">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-bold tracking-widest text-[#1E3A8A]">
                          {v.num}
                        </span>
                        {/*
                          NEW-06 — Collaboration icon hover rotation.
                          Protected existing effects must not be modified.
                          Wrapping div gets new-icon-rotate for CSS transition.
                          The Icon component itself is untouched.
                        */}
                        <div className="new-icon-rotate w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BBD3F2] flex items-center justify-center text-[#1E3A8A]" aria-hidden="true">
                          <Icon size={20} />
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-[#0A2540] mb-3">{v.title}</h2>
                      <p className="text-sm text-[#334E68] leading-relaxed mb-8">
                        {v.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#D9E7F5]">
                      <Button to={v.action} variant="secondary" size="sm">
                        {v.cta}
                        <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL PROTOCOL ── */}
      <section className="nox-section border-b border-[#D9E7F5] bg-white" aria-label="Operational Protocol">
        <div className="nox-container">
          <SectionHeader
            eyebrow="EXECUTION LIFECYCLE"
            title="Operational Protocol"
            className="mb-14"
          />

          <div className="relative overflow-x-auto">
            <div className="flex items-center min-w-max pb-4">
              {operationalProtocol.map((step, idx) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center px-4">
                    <div
                      className={`w-7 h-7 border mb-3 flex items-center justify-center text-[10px] font-mono rounded-lg transition-all ${
                        idx === 0
                          ? 'border-[#1E3A8A] bg-[#1E3A8A] text-white font-bold new-step-active shadow-md'
                          : 'border-[#D9E7F5] bg-[#F8FAFC] text-[#627D98]'
                      }`}
                    >
                      {/* NEW-07 — Active step glow pulse on first node only. Protected existing effects must not be modified. */}
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase ${
                        idx === 0 ? 'text-[#1E3A8A] font-bold' : 'text-[#627D98]'
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                  {idx < operationalProtocol.length - 1 && (
                    <div className="w-8 md:w-12 h-px bg-[#D9E7F5]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nox-section bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_100%)] text-white" aria-label="Work With Us CTA">
        <div className="nox-container text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Intelligent.
          </h2>
          <p className="text-[#D9E7F5] text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Have an idea, research concept, technical challenge, or collaboration opportunity?
          </p>
          <Button to="/contact" variant="primary" size="lg" className="!bg-white !text-[#0A2540] hover:!bg-[#EFF6FF] shadow-lg">
            Start a Conversation
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};
