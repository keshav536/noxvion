import React from 'react';
import { ArrowRight, Compass, FlaskConical, Network, Users } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { FoldText } from '../components/effects/FoldText';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
import { MagneticButton } from '../components/effects/MagneticButton';
import { AccentHalo } from '../components/effects/AccentHalo';
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
      <section className="relative py-20 md:py-28 bg-black text-white border-b border-white/10 overflow-hidden" aria-label="Work With Us Hero">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none -z-0"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" aria-hidden="true" />
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
                <span className="text-blue-400">Engineering?</span>
              </FoldText>
              <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-xl">
                Let's transform ambitious ideas, research concepts, and real-world challenges into
                intelligent technology.
              </p>
            </div>

            {/* Right Brand Vector Visual with 3D Depth */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Card3D intensity="low" glowColor="rgba(59, 130, 246, 0.15)" className="max-w-sm w-full">
                <div className="border border-white/10 bg-[#0e0e12] text-white p-8 relative rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
                  <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-400">
                      VECTOR SPEC
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 font-semibold">IMG_6_SYS</span>
                  </div>
                  <div className="flex items-center justify-center p-6 bg-black/50 border border-white/10 rounded-xl">
                    <img
                      src={logo}
                      alt="NOXVION emblem"
                      className="w-32 h-auto object-contain filter invert drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-[10px] font-mono tracking-widest text-zinc-400 font-semibold uppercase">
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
      <section className="nox-section border-b border-white/10 bg-[#070709]" aria-label="Collaboration Vectors">
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
                <Card3D key={v.num} intensity="low" glowColor="rgba(59, 130, 246, 0.12)" className="h-full">
                  <div className="h-full bg-[#0e0e12] border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.6)] new-icon-rotate-parent">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-bold tracking-widest text-blue-400">
                          {v.num}
                        </span>
                        {/*
                          NEW-06 — Collaboration icon hover rotation.
                          Protected existing effects must not be modified.
                        */}
                        <div className="new-icon-rotate w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-blue-400" aria-hidden="true">
                          <Icon size={20} />
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-white mb-3">{v.title}</h2>
                      <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                        {v.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
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
      <section className="nox-section border-b border-white/10 bg-black" aria-label="Operational Protocol">
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
                      className={`w-8 h-8 border mb-3 flex items-center justify-center text-[10px] font-mono rounded-lg transition-all ${
                        idx === 0
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400 font-bold new-step-active shadow-[0_0_16px_rgba(59,130,246,0.4)]'
                          : 'border-white/10 bg-white/[0.03] text-zinc-500'
                      }`}
                    >
                      {/* NEW-07 — Active step glow pulse on first node only. Protected existing effects must not be modified. */}
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase ${
                        idx === 0 ? 'text-blue-400 font-bold' : 'text-zinc-500'
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                  {idx < operationalProtocol.length - 1 && (
                    <div className="w-8 md:w-12 h-px bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nox-section bg-black text-white relative overflow-hidden border-t border-white/10" aria-label="Work With Us CTA">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.16) 0%, transparent 70%)',
          }}
        />

        <AmbientScene variant="cta" />
        <div className="nox-container text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Intelligent.
          </h2>
          <p className="text-zinc-400 text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Have an idea, research concept, technical challenge, or collaboration opportunity?
          </p>
          <MagneticButton strength={10}>
            <AccentHalo intensity="strong">
              <Button to="/contact" variant="primary" size="lg">
                Start a Conversation
                <ArrowRight size={16} />
              </Button>
            </AccentHalo>
          </MagneticButton>
        </div>
      </section>
    </PageContainer>
  );
};
