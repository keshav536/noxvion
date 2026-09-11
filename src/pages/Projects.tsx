import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { FoldText } from '../components/effects/FoldText';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
import { useSEO } from '../hooks/useSEO';
import { projectCategories } from '../data/projects';

interface ProjectCardData {
  id: string;
  category: string;
  title: string;
  description: string;
  tools: string[];
}

const mockProjects: ProjectCardData[] = [
  {
    id: 'PRJ_01 // AI & ML',
    category: 'AI & Machine Learning',
    title: 'Project Title — Coming Soon',
    description:
      'Advanced predictive modeling for high-frequency data systems. Utilizing neural networks to optimize latency and execution accuracy in volatile environments.',
    tools: ['PYTHON', 'TENSORFLOW', 'CUDA'],
  },
  {
    id: 'PRJ_02 // IOT',
    category: 'IoT',
    title: 'Project Title — Coming Soon',
    description:
      'Distributed sensor network architecture for industrial predictive maintenance. Real-time telemetry processing across edge devices.',
    tools: ['RUST', 'MQTT', 'EDGE COMPUTING'],
  },
  {
    id: 'PRJ_03 // HARDWARE',
    category: 'Hardware',
    title: 'Project Title — Coming Soon',
    description:
      'Custom FPGA design for high-bandwidth data ingestion systems. Optimizing logic gates for minimal power consumption in extreme environments.',
    tools: ['VERILOG', 'PCB DESIGN', 'THERMAL ANALYSIS'],
  },
  {
    id: 'PRJ_04 // AUTOMATION',
    category: 'Automation',
    title: 'Project Title — Coming Soon',
    description:
      'Robotic process automation framework for legacy manufacturing lines. Integrating computer vision for real-time quality control assessment.',
    tools: ['C++', 'OPENCV', 'ROS2'],
  },
];

export const Projects: React.FC = () => {
  const [activeCat, setActiveCat] = useState('All');

  useSEO({
    title: 'Projects — Engineering Ideas Into Reality',
    description:
      'Explore projects spanning artificial intelligence, software, IoT, automation, hardware, and research. Precision engineering applied to complex technical challenges.',
  });

  const filtered =
    activeCat === 'All'
      ? mockProjects
      : mockProjects.filter((p) => p.category.toLowerCase().includes(activeCat.toLowerCase()));

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 border-b border-nox-border grid-bg overflow-hidden" aria-label="Projects Hero">
        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-nox-cyan mb-4 font-mono">
            [SYS_LOG] / NOXVION / PROJECTS
          </p>
          <FoldText
            as="h1"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            className="text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.05] tracking-[-0.03em] text-nox-text mb-6"
          >
            Engineering Ideas Into{' '}
            <span className="text-nox-cyan">Reality.</span>
          </FoldText>
          <p className="text-nox-text-muted text-base md:text-xl leading-relaxed max-w-2xl">
            Explore projects spanning artificial intelligence, software, IoT, automation,
            hardware, and research. Precision engineering applied to complex technical challenges.
          </p>
        </div>
      </section>

      {/* ── CATEGORY BAR ── */}
      {/*
        NEW-01 — Tab active indicator slide.
        Protected existing effects must not be modified.
        Framer Motion layoutId creates a shared spring-animated underline
        that slides between whichever tab is currently active.
        The button's own text/color classes are untouched.
      */}
      <section className="border-b border-nox-border bg-nox-base sticky top-16 md:top-[70px] z-30 overflow-x-auto" aria-label="Project category filter">
        <div className="nox-container">
          <div className="flex items-center gap-6 py-4 min-w-max" role="tablist" aria-label="Filter projects by category">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                id={`projects-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                role="tab"
                aria-selected={activeCat === cat}
                onClick={() => setActiveCat(cat)}
                className={`relative text-xs font-semibold tracking-widest uppercase pb-1 transition-colors focus-visible:outline-2 focus-visible:outline-nox-cyan focus-visible:outline-offset-2 ${
                  activeCat === cat
                    ? 'text-nox-text'
                    : 'text-nox-text-muted hover:text-nox-text'
                }`}
              >
                {cat}
                {/* NEW-01: Shared animated underline — slides between tabs */}
                {activeCat === cat && (
                  <motion.span
                    layoutId="new-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-nox-cyan"
                    style={{ borderRadius: 1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="nox-section border-b border-nox-border" aria-label="Projects Grid">
        <div className="nox-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((proj) => (
              <Card3D key={proj.id} intensity="low" glowColor="rgba(0, 240, 255, 0.08)" className="h-full">
                <div className="h-full bg-nox-layer border border-nox-border flex flex-col justify-between hover:border-nox-border-active transition-colors">
                  {/* Tech Visual Placeholder */}
                  <div
                    className="w-full aspect-[16/9] bg-nox-base border-b border-nox-border flex items-center justify-center p-6 relative overflow-hidden"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  >
                    {/* NEW-05 — Empty placeholder breathe pulse. Protected existing effects must not be modified. */}
                    <span className="text-[11px] font-mono tracking-widest uppercase text-nox-text-dim border border-nox-border/80 bg-nox-layer/60 px-4 py-2 new-placeholder-pulse" aria-label="Project image pending">
                      [ IMG_SYS_AWAITING_DATA ]
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 font-mono text-[11px]">
                        <span className="text-nox-cyan uppercase">{proj.id}</span>
                        <span className="text-nox-text-dim">T-MINUS</span>
                      </div>

                      <h2 className="text-xl font-semibold text-nox-text mb-3">
                        {proj.title}
                      </h2>
                      <p className="text-sm text-nox-text-muted leading-relaxed mb-6">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {proj.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono tracking-widest text-nox-text-dim uppercase border border-nox-border px-2.5 py-1 bg-nox-base"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-nox-border">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-nox-cyan font-mono group-hover:text-nox-text transition-colors">
                        VIEW CASE STUDY <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="nox-section bg-nox-layer/20" aria-label="Projects CTA">
        <div className="nox-container">
          <div className="border border-nox-border bg-nox-layer p-12 text-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-nox-text mb-6">
              Have a technical challenge worth solving?
            </h2>
            <Button to="/work-with-us" variant="primary" size="md">
              Work With Us
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
