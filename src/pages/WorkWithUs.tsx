import React from 'react';
import { ArrowRight, Compass, FlaskConical, Network, Users } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { FoldText } from '../components/effects/FoldText';
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
      <section className="py-20 md:py-28 border-b border-nox-border grid-bg" aria-label="Work With Us Hero">
        <div className="nox-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4">
                NOXVION / WORK WITH US
              </p>
              <FoldText
                as="h1"
                splitBy="word"
                hinge="top"
                trigger="scroll"
                className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.03em] text-nox-text mb-6"
              >
                Have an Idea Worth{' '}
                <span className="text-nox-cyan">Engineering?</span>
              </FoldText>
              <p className="text-nox-text-muted text-base md:text-xl leading-relaxed max-w-xl">
                Let's transform ambitious ideas, research concepts, and real-world challenges into
                intelligent technology.
              </p>
            </div>

            {/* Right Brand Vector Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="border border-nox-border bg-nox-layer p-8 relative max-w-sm w-full">
                <div className="flex justify-between items-center mb-6 border-b border-nox-border/60 pb-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-nox-cyan">
                    VECTOR SPEC
                  </span>
                  <span className="text-[10px] font-mono text-nox-text-dim">IMG_6_SYS</span>
                </div>
                <div className="flex items-center justify-center p-6 bg-nox-base border border-nox-border">
                  <img
                    src={logo}
                    alt="NOXVION emblem"
                    className="w-32 h-auto object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-[10px] font-mono tracking-widest text-nox-text-dim uppercase">
                    COLLABORATION PROTOCOL: ACTIVE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATION VECTORS ── */}
      <section className="nox-section border-b border-nox-border" aria-label="Collaboration Vectors">
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
                <div
                  key={v.num}
                  className="bg-nox-layer border border-nox-border p-8 flex flex-col justify-between hover:border-nox-border-active transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-semibold tracking-widest text-nox-cyan">
                        {v.num}
                      </span>
                      <Icon size={20} className="text-nox-text-dim" />
                    </div>

                    <h2 className="text-xl font-semibold text-nox-text mb-3">{v.title}</h2>
                    <p className="text-sm text-nox-text-muted leading-relaxed mb-8">
                      {v.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-nox-border">
                    <Button to={v.action} variant="secondary" size="sm">
                      {v.cta}
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL PROTOCOL ── */}
      <section className="nox-section border-b border-nox-border bg-nox-layer/20" aria-label="Operational Protocol">
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
                      className={`w-6 h-6 border mb-3 flex items-center justify-center text-[9px] font-mono ${
                        idx === 0
                          ? 'border-nox-cyan bg-nox-cyan text-nox-base font-bold'
                          : 'border-nox-border bg-nox-base text-nox-text-dim'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <span
                      className={`text-[10px] font-mono tracking-widest uppercase ${
                        idx === 0 ? 'text-nox-cyan font-bold' : 'text-nox-text-muted'
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                  {idx < operationalProtocol.length - 1 && (
                    <div className="w-8 md:w-12 h-px bg-nox-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nox-section" aria-label="Work With Us CTA">
        <div className="nox-container text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-nox-text mb-6">
            Let's Build Something Intelligent.
          </h2>
          <p className="text-nox-text-muted text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Have an idea, research concept, technical challenge, or collaboration opportunity?
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Start a Conversation
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </PageContainer>
  );
};
