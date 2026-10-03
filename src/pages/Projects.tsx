import React, { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/ui/Button';
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
    tools: ['REACT', 'TYPESCRIPT', 'REAL-TIME PROCTOR', 'ANALYTICS'],
    image: '/projects/skillcetamol/skillcetamol-dashboard.jpg',
    imageAlt: 'SkillCetamol enterprise exam portal dashboard',
    externalUrl: 'https://skillcetamol.online/',
  },
  {
    id: 'PRJ_04 // IOT & EDGE',
    category: 'IoT',
    title: 'EDGE SENTINEL',
    subtitle: 'Industrial Micro-Telemetry Network',
    description:
      'Low-power sensor mesh transmitting environmental telemetry across industrial facilities with sub-millisecond MQTT packet delivery and automated fallback.',
    tools: ['ESP32', 'FREERTOS', 'MQTT', 'INFLUXDB'],
  },
  {
    id: 'PRJ_05 // AUTOMATION',
    category: 'Automation',
    title: 'AUTOFLOW MATRIX',
    subtitle: 'Autonomous Process Orchestration Unit',
    description:
      'Distributed event-driven automation framework linking legacy SCADA equipment with cloud-native monitoring pipelines and predictive maintenance alerts.',
    tools: ['DOCKER', 'REDIS', 'NODE.JS', 'POSTGRESQL'],
  },
  {
    id: 'PRJ_06 // HARDWARE R&D',
    category: 'Hardware',
    title: 'NEXUS-ROV',
    subtitle: 'Robotic Operating Testbed',
    description:
      'Autonomous ground mobility testbed running custom ROS2 navigation nodes, LIDAR SLAM algorithms, and multi-spectral sensor payload integration.',
    tools: ['ROS2', 'ARDUINO', 'PYTHON', 'CAD / 3D'],
  },
];

export const Projects: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useSEO({
    title: 'Case Studies & Projects — NOXVION Engineering',
    description:
      'Explore projects spanning artificial intelligence, software, IoT, automation, hardware, and applied research by Noxvion.',
  });

  const filtered =
    activeCat === 'All'
      ? mockProjects
      : mockProjects.filter((p) => p.category === activeCat);

  return (
    <PageContainer className="bg-white">
      {/* ── HERO ── */}
      <section
        className="relative py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
        aria-label="Projects Hero"
      >
        <div className="nox-container relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E3A8A] mb-4 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" aria-hidden="true" />
            NOXVION // CASE STUDIES & PORTFOLIO
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0A2540] mb-5">
            Engineering Ideas Into <span className="text-[#1E3A8A]">Reality.</span>
          </h1>
          <p className="text-[#4A6080] text-base md:text-xl leading-relaxed max-w-2xl">
            Explore projects spanning artificial intelligence, software, IoT, automation,
            hardware, and research. Precision engineering applied to complex technical challenges.
          </p>
        </div>
      </section>

      {/* ── CATEGORY BAR ── */}
      <section
        className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-16 md:top-[72px] z-30 overflow-x-auto shadow-xs"
        aria-label="Project category filter"
      >
        <div className="nox-container">
          <div className="flex items-center gap-6 py-4 min-w-max font-mono" role="tablist" aria-label="Filter projects by category">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                id={`projects-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                role="tab"
                aria-selected={activeCat === cat}
                onClick={() => setActiveCat(cat)}
                className={`relative text-xs font-semibold tracking-wider uppercase pb-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] ${
                  activeCat === cat
                    ? 'text-[#1E3A8A] font-bold'
                    : 'text-slate-500 hover:text-[#0A2540]'
                }`}
              >
                {cat}
                {activeCat === cat && (
                  <motion.span
                    layoutId="project-tab-indicator"
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
      <section className="nox-section border-b border-slate-200/80 bg-[#F8FAFC]" aria-label="Projects Grid">
        <div className="nox-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div key={proj.id} className="h-full">
                {proj.externalUrl ? (
                  <a
                    href={proj.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${proj.title} — ${proj.subtitle ?? proj.description.slice(0, 60)}`}
                    className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A8A] rounded-2xl"
                  >
                    <div className="nox-card h-full overflow-hidden flex flex-col justify-between bg-white group">
                      {/* Visual */}
                      {proj.image ? (
                        <div className="w-full aspect-[16/9] bg-slate-100 border-b border-slate-200/80 relative overflow-hidden">
                          <img
                            src={proj.image}
                            alt={proj.imageAlt || proj.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-[16/9] bg-slate-100 border-b border-slate-200/80 flex items-center justify-center p-6">
                          <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500 font-semibold bg-white border border-slate-200 px-3 py-1.5 rounded">
                            [ HARDWARE TESTBED ]
                          </span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3 font-mono text-[11px]">
                            <span className="text-[#1E3A8A] font-bold uppercase">{proj.id}</span>
                            <span className="text-slate-400 font-semibold">
                              {proj.image ? 'OPERATIONAL' : 'R&D NODE'}
                            </span>
                          </div>

                          <h2 className="text-xl font-bold text-[#0A2540] mb-1 group-hover:text-[#1E3A8A] transition-colors">
                            {proj.title}
                          </h2>
                          {proj.subtitle && (
                            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                              {proj.subtitle}
                            </p>
                          )}
                          <p className="text-sm text-[#4A6080] leading-relaxed mb-6">
                            {proj.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {proj.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-[10px] font-mono tracking-wider text-slate-600 uppercase border border-slate-200 px-2 py-0.5 bg-slate-50 rounded"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                          {proj.gallery && proj.gallery.length > 0 ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedProject(proj);
                                setActiveImageIndex(0);
                              }}
                              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#1E3A8A] font-mono hover:underline"
                            >
                              Gallery ({proj.gallery.length}) <ArrowRight size={13} />
                            </button>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#1E3A8A] font-mono">
                              View Project →
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="nox-card h-full overflow-hidden flex flex-col justify-between bg-white group">
                    <div className="w-full aspect-[16/9] bg-slate-100 border-b border-slate-200/80 flex items-center justify-center p-6">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-slate-500 font-semibold bg-white border border-slate-200 px-3 py-1.5 rounded">
                        [ SYSTEM ARCHITECTURE ]
                      </span>
                    </div>

                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3 font-mono text-[11px]">
                          <span className="text-[#1E3A8A] font-bold uppercase">{proj.id}</span>
                          <span className="text-slate-400 font-semibold">INTERNAL R&D</span>
                        </div>

                        <h2 className="text-xl font-bold text-[#0A2540] mb-1">
                          {proj.title}
                        </h2>
                        {proj.subtitle && (
                          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                            {proj.subtitle}
                          </p>
                        )}
                        <p className="text-sm text-[#4A6080] leading-relaxed mb-6">
                          {proj.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {proj.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-[10px] font-mono tracking-wider text-slate-600 uppercase border border-slate-200 px-2 py-0.5 bg-slate-50 rounded"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                        STANDARDIZED CORE
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#1E3A8A] font-bold">
                    {selectedProject.id}
                  </span>
                  <span className="text-slate-400 text-xs">/</span>
                  <span className="text-xs text-slate-600 font-mono uppercase">
                    {selectedProject.gallery[activeImageIndex]?.label} ({activeImageIndex + 1}/{selectedProject.gallery.length})
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-[#0A2540] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Visual Display */}
            <div className="relative aspect-video max-h-[50vh] bg-slate-900 flex items-center justify-center overflow-hidden border-b border-slate-200">
              <img
                src={selectedProject.gallery[activeImageIndex]?.src}
                alt={selectedProject.gallery[activeImageIndex]?.caption || selectedProject.title}
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-slate-200 text-[#0A2540] flex items-center justify-center hover:bg-white shadow-md cursor-pointer"
                aria-label="Previous image"
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
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-slate-200 text-[#0A2540] flex items-center justify-center hover:bg-white shadow-md cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Caption & Thumbnails */}
            <div className="p-6 bg-white overflow-y-auto">
              <p className="text-xs font-mono uppercase tracking-wider text-[#1E3A8A] font-semibold mb-1">
                {selectedProject.gallery[activeImageIndex]?.label}
              </p>
              <p className="text-sm text-[#4A6080] mb-4">
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
                        ? 'border-[#1E3A8A] ring-2 ring-[#1E3A8A]/30'
                        : 'border-slate-200 opacity-60 hover:opacity-100'
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
      <section className="nox-section bg-gradient-to-b from-[#F8FAFC] to-white" aria-label="Projects CTA">
        <div className="nox-container">
          <div className="nox-card p-12 text-center bg-white border border-slate-200">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Have a technical challenge worth engineering?
            </h2>
            <p className="text-[#4A6080] text-base max-w-xl mx-auto mb-8 leading-relaxed">
              We collaborate with enterprise teams and innovators to architect, prototype, and deliver production systems.
            </p>
            <Button to="/work-with-us" variant="primary" size="lg">
              Initiate Project Discussion
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Projects;
