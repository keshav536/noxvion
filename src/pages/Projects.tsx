import React, { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
import { FoldText } from '../components/effects/FoldText';
import { Card3D } from '../components/effects/Card3D';
import { AmbientScene } from '../components/effects/AmbientOrb';
import { MagneticButton } from '../components/effects/MagneticButton';
import { AccentHalo } from '../components/effects/AccentHalo';
import { useSEO } from '../hooks/useSEO';
import { projectCategories, type ProjectGalleryItem } from '../data/projects';

interface ProjectCardData {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  tools: string[];
  image?: string;
  imageAlt?: string;
  gallery?: ProjectGalleryItem[];
  /** External URL opened in a new tab when the card is clicked. */
  externalUrl?: string;
}

const mockProjects: ProjectCardData[] = [
  {
    id: 'PRJ_01 // AI & IOT',
    category: 'AI & Machine Learning',
    title: 'VARUNA-X',
    subtitle: 'AI Flood Intelligence & Drainage Response System',
    description:
      'An AI-powered flood intelligence system combining IoT drain sensors, AI/ML prediction, GIS mapping, and digital-twin technology to help predict and respond to urban flooding.',
    tools: ['LSTM / RF', 'ESP32 IOT', 'GIS MAPPING', 'DIGITAL TWIN'],
    image: '/projects/varuna-x/varuna-dashboard.png',
    imageAlt: 'VARUNA-X AI flood intelligence and drainage response system',
    externalUrl: 'https://varuna-x-22174.web.app/',
    gallery: [
      {
        label: 'Live Dashboard',
        src: '/projects/varuna-x/varuna-dashboard.png',
        caption: 'Live Monitoring Dashboard showing flood risk metrics & affected areas',
      },
      {
        label: 'GIS Heatmap',
        src: '/projects/varuna-x/varuna-gis.png',
        caption: 'GIS map visualization showing sensor nodes & heat zones',
      },
      {
        label: 'Architecture',
        src: '/projects/varuna-x/varuna-architecture.png',
        caption: 'End-to-end system architecture from IoT sensing to citizen alerts',
      },
      {
        label: 'Hardware Setup',
        src: '/projects/varuna-x/varuna-hardware.png',
        caption: 'ESP32 microcontroller, sensors, and power regulation module',
      },
      {
        label: 'Drain Prototype',
        src: '/projects/varuna-x/varuna-prototype.png',
        caption: 'Physical drainage monitoring testbed simulation prototype',
      },
      {
        label: 'Sensor Module',
        src: '/projects/varuna-x/varuna-manhole-sensor.png',
        caption: 'Manhole cover fixed bracket and ultrasonic water sensor',
      },
    ],
  },
  {
    id: 'PRJ_02 // SOFTWARE',
    category: 'Software',
    title: 'UR NOTED',
    subtitle: 'Training Attendance Management System',
    description:
      'An enterprise-grade attendance platform with automated late-registration logic, role-based access control (RBAC), and one-click Excel & PDF export for training session records.',
    tools: ['REACT', 'NODE.JS', 'RBAC', 'EXCEL EXPORT', 'PDF EXPORT'],
    image: '/projects/ur-noted/urnoted-dashboard.jpg',
    imageAlt: 'UR Noted training attendance management system dashboard',
    externalUrl: 'https://urnoted.syasans.com/',
  },
  {
    id: 'PRJ_03 // SOFTWARE',
    category: 'Software',
    title: 'SKILLCETAMOL',
    subtitle: 'Enterprise Exam Portal',
    description:
      'A secure, multi-role online exam platform with real-time countdowns, score analytics, student rank indexing, and separate dashboards for administrators, proctors, and students.',
    tools: ['REACT', 'MULTI-ROLE AUTH', 'SCORE ANALYTICS', 'SECURE EXAM'],
    image: '/projects/skillcetamol/skillcetamol-dashboard.jpg',
    imageAlt: 'SkillCetamol enterprise exam portal dashboard',
    externalUrl: 'https://skillcetamol.online/',
  },
];

export const Projects: React.FC = () => {
  const [activeCat, setActiveCat] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useSEO({
    title: 'Projects — Engineering Ideas Into Reality',
    description:
      'Explore projects spanning artificial intelligence, software, IoT, automation, hardware, and research. Precision engineering applied to complex technical challenges.',
  });

  const filtered =
    activeCat === 'All'
      ? mockProjects
      : mockProjects.filter(
          (p) =>
            p.category.toLowerCase().includes(activeCat.toLowerCase()) ||
            (activeCat === 'IoT' && p.id.includes('IOT'))
        );

  return (
    <PageContainer>
      {/* ── HERO ── */}
      <section className="relative py-20 md:py-28 bg-black text-white border-b border-white/10 overflow-hidden" aria-label="Projects Hero">
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
            <span className="text-blue-400">Reality.</span>
          </FoldText>
          <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-2xl">
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
      */}
      <section className="border-b border-white/10 bg-black/90 backdrop-blur-xl sticky top-16 md:top-[72px] z-30 overflow-x-auto shadow-md" aria-label="Project category filter">
        <div className="nox-container">
          <div className="flex items-center gap-6 py-4 min-w-max font-mono" role="tablist" aria-label="Filter projects by category">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                id={`projects-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                role="tab"
                aria-selected={activeCat === cat}
                onClick={() => setActiveCat(cat)}
                className={`cursor-target relative text-xs font-semibold tracking-widest uppercase pb-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 ${
                  activeCat === cat
                    ? 'text-blue-400 font-bold'
                    : 'text-zinc-500 hover:text-white'
                }`}
              >
                {cat}
                {/* NEW-01: Shared animated underline — slides between tabs */}
                {activeCat === cat && (
                  <motion.span
                    layoutId="new-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
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
      <section className="nox-section border-b border-white/10 bg-[#070709]" aria-label="Projects Grid">
        <div className="nox-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <Card3D key={proj.id} intensity="low" glowColor="rgba(59, 130, 246, 0.12)" className="h-full">
                {/* When the project has an external URL, the entire card becomes an accessible link */}
                {proj.externalUrl ? (
                  <a
                    href={proj.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${proj.title} — ${proj.subtitle ?? proj.description.slice(0, 60)}`}
                    className="cursor-target block h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 rounded-2xl"
                  >
                    <div className="h-full bg-[#0e0e12] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.6)] group">
                      {/* Tech Visual */}
                      {proj.image ? (
                        <div className="w-full aspect-[16/9] bg-[#09090c] border-b border-white/10 relative overflow-hidden">
                          <img
                            src={proj.image}
                            alt={proj.imageAlt || proj.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Subtle cyan/blue overlay on hover */}
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-blue-500/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                            aria-hidden="true"
                          />
                          {/* Scanning line animation */}
                          <div
                            className="absolute top-0 left-0 w-full h-0.5 pointer-events-none z-10"
                            aria-hidden="true"
                            style={{
                              background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent)',
                              animation: 'scanLine 4s ease-in-out infinite',
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-[16/9] bg-[#09090c] border-b border-white/10 flex items-center justify-center p-6 relative overflow-hidden">
                          {/* NEW-05 — Empty placeholder breathe pulse. Protected existing effects must not be modified. */}
                          <span className="text-[11px] font-mono tracking-widest uppercase text-blue-400 font-bold border border-white/15 bg-white/[0.04] px-4 py-2 rounded-lg new-placeholder-pulse shadow-[0_0_12px_rgba(59,130,246,0.2)]" aria-label="Project image pending">
                            [ IMG_SYS_AWAITING_DATA ]
                          </span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-4 font-mono text-[11px]">
                            <span className="text-blue-400 font-bold uppercase">{proj.id}</span>
                            <span className="text-zinc-500 font-semibold">{proj.image ? 'OPERATIONAL' : 'T-MINUS'}</span>
                          </div>

                          <h2 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {proj.title}
                          </h2>
                          {proj.subtitle && (
                            <p className="text-xs font-mono uppercase tracking-wider text-blue-400/90 mb-3">
                              {proj.subtitle}
                            </p>
                          )}
                          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            {proj.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-8">
                            {proj.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase border border-white/10 px-2.5 py-1 bg-white/[0.03] rounded"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                          {proj.gallery && proj.gallery.length > 0 ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedProject(proj);
                                setActiveImageIndex(0);
                              }}
                              className="cursor-target inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-400 font-mono hover:text-blue-300 transition-colors cursor-pointer"
                            >
                              VIEW CASE STUDY &amp; GALLERY ({proj.gallery.length}) <ArrowRight size={14} />
                            </button>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-500 font-mono">
                              VIEW CASE STUDY <ArrowRight size={14} />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="h-full bg-[#0e0e12] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-500/40 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.6)] group">
                    {/* Tech Visual */}
                    {proj.image ? (
                      <div className="w-full aspect-[16/9] bg-[#09090c] border-b border-white/10 relative overflow-hidden">
                        <img
                          src={proj.image}
                          alt={proj.imageAlt || proj.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Subtle cyan/blue overlay on hover */}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-blue-500/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                          aria-hidden="true"
                        />
                        {/* Scanning line animation */}
                        <div
                          className="absolute top-0 left-0 w-full h-0.5 pointer-events-none z-10"
                          aria-hidden="true"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent)',
                            animation: 'scanLine 4s ease-in-out infinite',
                          }}
                        />
                      </div>
                    ) : (
                      <div className="w-full aspect-[16/9] bg-[#09090c] border-b border-white/10 flex items-center justify-center p-6 relative overflow-hidden">
                        {/* NEW-05 — Empty placeholder breathe pulse. Protected existing effects must not be modified. */}
                        <span className="text-[11px] font-mono tracking-widest uppercase text-blue-400 font-bold border border-white/15 bg-white/[0.04] px-4 py-2 rounded-lg new-placeholder-pulse shadow-[0_0_12px_rgba(59,130,246,0.2)]" aria-label="Project image pending">
                          [ IMG_SYS_AWAITING_DATA ]
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4 font-mono text-[11px]">
                          <span className="text-blue-400 font-bold uppercase">{proj.id}</span>
                          <span className="text-zinc-500 font-semibold">{proj.image ? 'OPERATIONAL' : 'T-MINUS'}</span>
                        </div>

                        <h2 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                          {proj.title}
                        </h2>
                        {proj.subtitle && (
                          <p className="text-xs font-mono uppercase tracking-wider text-blue-400/90 mb-3">
                            {proj.subtitle}
                          </p>
                        )}
                        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                          {proj.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {proj.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase border border-white/10 px-2.5 py-1 bg-white/[0.03] rounded"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        {proj.gallery && proj.gallery.length > 0 ? (
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedProject(proj);
                              setActiveImageIndex(0);
                            }}
                            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-blue-400 font-mono hover:text-blue-300 transition-colors cursor-pointer"
                          >
                            VIEW CASE STUDY &amp; GALLERY ({proj.gallery.length}) <ArrowRight size={14} />
                          </button>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-500 font-mono">
                            VIEW CASE STUDY <ArrowRight size={14} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT DETAIL MODAL ── */}
      {selectedProject && selectedProject.gallery && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} project details`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0e0e12] border border-white/15 rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.9)] max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#09090c]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold">
                    {selectedProject.id}
                  </span>
                  <span className="text-zinc-600 text-xs">/</span>
                  <span className="text-xs text-zinc-400 font-mono uppercase">
                    {selectedProject.gallery[activeImageIndex]?.label} ({activeImageIndex + 1}/{selectedProject.gallery.length})
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white hover:border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Visual Display */}
            <div className="relative aspect-video max-h-[50vh] bg-black flex items-center justify-center overflow-hidden border-b border-white/10">
              <img
                src={selectedProject.gallery[activeImageIndex]?.src}
                alt={selectedProject.gallery[activeImageIndex]?.caption || selectedProject.title}
                className="w-full h-full object-contain"
              />
              {/* Previous / Next buttons */}
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                aria-label="Previous visual"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                aria-label="Next visual"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Caption & Thumbnails */}
            <div className="p-6 bg-[#0e0e12] overflow-y-auto">
              <p className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1">
                {selectedProject.gallery[activeImageIndex]?.label}
              </p>
              <p className="text-sm text-zinc-300 mb-4">
                {selectedProject.gallery[activeImageIndex]?.caption}
              </p>

              {/* Thumbnails */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {selectedProject.gallery.map((item, idx) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-blue-500 ring-2 ring-blue-500/40'
                        : 'border-white/15 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── BOTTOM CTA ── */}
      <section className="nox-section bg-black" aria-label="Projects CTA">
        <div className="nox-container">
          <div className="border border-white/10 bg-[#0e0e12] text-white rounded-2xl p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)',
              }}
            />
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Have a technical challenge worth solving?
            </h2>
            <div className="relative z-10">
              <MagneticButton strength={10}>
                <AccentHalo intensity="normal">
                  <Button to="/work-with-us" variant="primary" size="md">
                    Work With Us
                  </Button>
                </AccentHalo>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};
