import React from 'react';
import { ArrowRight, Compass, FlaskConical, Network, Users } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useSEO } from '../hooks/useSEO';
import logo from '../assets/noxvion-logo.png';

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
      'Collaborate with our applied R&D division on exploratory projects, pushing the boundaries of machine intelligence, telemetry, and edge systems.',
    cta: 'Propose Research',
    icon: FlaskConical,
    action: '/contact?type=research',
  },
  {
    num: '03',
    title: 'Partner With Us',
    description:
      'Establish strategic alliances to co-develop products, integrate our underlying technologies into your platform, or expand enterprise capabilities.',
    cta: 'Explore Partnership',
    icon: Network,
    action: '/contact?type=partner',
  },
  {
    num: '04',
    title: 'Join Us',
    description:
      'Bring your expertise to our core team. We are actively seeking exceptional software engineers, hardware designers, and applied researchers.',
    cta: 'Explore Careers',
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
    title: 'Work With Us — Have an Idea Worth Engineering? | NOXVION',
    description:
      "Transform ambitious ideas, research concepts, and real-world challenges into intelligent technology with Noxvion.",
  });

  return (
    <PageContainer className="bg-white">
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
        aria-label="Work With Us Hero"
      >
        <div className="nox-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] mb-4 font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
                NOXVION / COLLABORATION
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0A2540] mb-5">
                Have an Idea Worth{' '}
                <span className="text-[#1E3A8A]">Engineering?</span>
              </h1>
              <p className="text-[#4A6080] text-base md:text-xl leading-relaxed max-w-xl">
                Let's transform ambitious ideas, research concepts, and real-world challenges into
                intelligent, high-performance technology.
              </p>
            </div>

            {/* Right Brand Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="nox-card p-8 bg-white border border-slate-200 max-w-sm w-full">
                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#1E3A8A]">
                    ENTERPRISE ONBOARDING
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold">STAGE 01</span>
                </div>
                <div className="flex items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl mb-4">
                  <img
                    src={logo}
                    alt="NOXVION"
                    className="w-28 h-auto object-contain"
                  />
                </div>
                <p className="text-center text-[10px] font-mono tracking-wider text-slate-500 font-semibold uppercase">
                  DIRECT COLLABORATION PIPELINE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATION VECTORS ── */}
      <section className="nox-section border-b border-slate-200/80 bg-[#F8FAFC]" aria-label="Collaboration Vectors">
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
                  className="nox-card p-8 flex flex-col justify-between bg-white group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#1E3A8A]">
                        {v.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E3A8A] flex items-center justify-center group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-200">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-[#0A2540] mb-3">{v.title}</h2>
                    <p className="text-sm text-[#4A6080] leading-relaxed mb-8">
                      {v.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
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
      <section className="nox-section border-b border-slate-200/80 bg-white" aria-label="Operational Protocol">
        <div className="nox-container">
          <SectionHeader
            eyebrow="EXECUTION LIFECYCLE"
            title="Operational Protocol"
            description="Our structured engineering pathway from first discovery to production deployment."
            className="mb-12"
          />

          <div className="relative overflow-x-auto">
            <div className="flex items-center min-w-max pb-4">
              {operationalProtocol.map((step, idx) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center px-4">
                    <div
                      className={`w-9 h-9 border mb-3 flex items-center justify-center text-[10px] font-mono rounded-lg transition-all ${
                        idx === 0
                          ? 'border-[#1E3A8A] bg-blue-50 text-[#1E3A8A] font-bold shadow-xs'
                          : 'border-slate-200 bg-[#F8FAFC] text-slate-500'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <span
                      className={`text-[10px] font-mono tracking-wider uppercase ${
                        idx === 0 ? 'text-[#1E3A8A] font-bold' : 'text-slate-500'
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                  {idx < operationalProtocol.length - 1 && (
                    <div className="w-8 md:w-12 h-px bg-slate-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="nox-section bg-gradient-to-b from-white to-blue-50/50 text-center" aria-label="Work With Us CTA">
        <div className="nox-container max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            Let's Build Something Intelligent.
          </h2>
          <p className="text-[#4A6080] text-base mb-8 leading-relaxed">
            Have an idea, research concept, technical challenge, or collaboration opportunity?
          </p>
          <div className="flex justify-center">
            <Button to="/contact" variant="primary" size="lg">
              Start a Conversation
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default WorkWithUs;
