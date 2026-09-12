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
      <section className="relative py-20 md:py-28 bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_60%,#3B82F6_100%)] text-white border-b border-[#D9E7F5]/20 overflow-hidden" aria-label="Projects Hero">
        <AmbientScene variant="hero" />
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#93C5FD] mb-4 font-mono">
            [SYS_LOG] / NOXVION / PROJECTS
          </p>
          <FoldText
            as="h1"
            splitBy="word"
            hinge="top"
            trigger="scroll"
            className="text-4xl md:text-5xl lg:text-[60px] font-semibold leading-[1.05] tracking-[-0.03em] text-white mb-6"
          >
            Engineering Ideas Into{' '}
            <span className="text-[#60A5FA]">Reality.</span>
          </FoldText>
          <p className="text-[#D9E7F5] text-base md:text-xl leading-relaxed max-w-2xl">
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
      <section className="border-b border-[#D9E7F5] bg-white sticky top-16 md:top-[70px] z-30 overflow-x-auto shadow-sm" aria-label="Project category filter">
        <div className="nox-container">
          <div className="flex items-center gap-6 py-4 min-w-max" role="tablist" aria-label="Filter projects by category">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                id={`projects-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                role="tab"
                aria-selected={activeCat === cat}
                onClick={() => setActiveCat(cat)}
                className={`relative text-xs font-semibold tracking-widest uppercase pb-1 transition-colors focus-visible:outline-2 focus-visible:outline-[#3B82F6] focus-visible:outline-offset-2 ${
                  activeCat === cat
                    ? 'text-[#1E3A8A] font-bold'
                    : 'text-[#627D98] hover:text-[#0A2540]'
                }`}
              >
                {cat}
                {/* NEW-01: Shared animated underline — slides between tabs */}
                {activeCat === cat && (
                  <motion.span
                    layoutId="new-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1E3A8A]"
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
      <section className="nox-section border-b border-[#D9E7F5] bg-[#F8FAFC]" aria-label="Projects Grid">
        <div className="nox-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((proj) => (
              <Card3D key={proj.id} intensity="low" glowColor="rgba(59, 130, 246, 0.08)" className="h-full">
                <div className="h-full bg-white border border-[#D9E7F5] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#3B82F6] hover:shadow-xl transition-all duration-300 shadow-[0_12px_30px_rgba(10,37,64,0.06)]">
                  {/* Tech Visual Placeholder */}
                  <div
                    className="w-full aspect-[16/9] bg-[#EFF6FF] border-b border-[#D9E7F5] flex items-center justify-center p-6 relative overflow-hidden"
                  >
                    {/* NEW-05 — Empty placeholder breathe pulse. Protected existing effects must not be modified. */}
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#1E3A8A] font-bold border border-[#BBD3F2] bg-white px-4 py-2 rounded-lg new-placeholder-pulse shadow-sm" aria-label="Project image pending">
                      [ IMG_SYS_AWAITING_DATA ]
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 font-mono text-[11px]">
                        <span className="text-[#1E3A8A] font-bold uppercase">{proj.id}</span>
                        <span className="text-[#627D98] font-semibold">T-MINUS</span>
                      </div>

                      <h2 className="text-xl font-bold text-[#0A2540] mb-3">
                        {proj.title}
                      </h2>
                      <p className="text-sm text-[#334E68] leading-relaxed mb-6">
                        {proj.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {proj.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono tracking-widest text-[#334E68] uppercase border border-[#D9E7F5] px-2.5 py-1 bg-[#F8FAFC] rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#D9E7F5]">
                      <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#1E3A8A] font-mono hover:text-[#3B82F6] transition-colors">
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
      <section className="nox-section bg-white" aria-label="Projects CTA">
        <div className="nox-container">
          <div className="border border-[#D9E7F5] bg-[linear-gradient(135deg,#0A2540_0%,#1E3A8A_100%)] text-white rounded-2xl p-12 text-center shadow-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              Have a technical challenge worth solving?
            </h2>
            <Button to="/work-with-us" variant="primary" size="md" className="!bg-white !text-[#0A2540] hover:!bg-[#EFF6FF] shadow-lg">
              Work With Us
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
