import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  Bot,
  Workflow,
  Layers,
  Smartphone,
  Palette,
  Search,
  Share2,
  Cloud,
  Radio,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Users,
  Headphones,
  FileText,
  Receipt,
  TrendingUp,
} from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { useSEO } from '../hooks/useSEO';
import {
  primaryServices,
  secondaryServices,
  saasProducts,
  websitePackages,
  type PrimaryService,
  type SaaSProduct,
} from '../data/servicesData';
import { ServiceDetailModal } from '../components/services/ServiceDetailModal';
import { ProductWaitlistModal } from '../components/services/ProductWaitlistModal';

const iconLookup: Record<string, React.ElementType> = {
  Globe,
  Bot,
  Workflow,
  Layers,
  Smartphone,
  Palette,
  Search,
  Share2,
  Cloud,
  Radio,
  Sparkles,
  Users,
  CheckCircle2,
  Headphones,
  FileText,
  Receipt,
};

const domains = [
  'Web Development',
  'AI Solutions',
  'Business Automation',
  'Custom Software',
  'SaaS Products',
  'Mobile Apps',
  'UI/UX Design',
  'SEO & Marketing',
  'Cloud Infrastructure',
  'IoT & Smart Systems',
];

export const Solutions: React.FC = () => {
  useSEO({
    title: 'Services built to scale your business — NOXVION',
    description:
      'End-to-end digital capabilities across Web Development, AI Solutions, Business Automation, Custom Software, Mobile Apps, UI/UX, Cloud, and IoT.',
  });

  const [activeServiceModal, setActiveServiceModal] = useState<PrimaryService | null>(null);
  const [activeProductModal, setActiveProductModal] = useState<SaaSProduct | null>(null);
  const [secondaryTab, setSecondaryTab] = useState<'all' | 'growth' | 'infrastructure'>('all');

  const filteredSecondary = secondaryServices.filter((s) => {
    if (secondaryTab === 'growth') return s.id === 'SEC-01' || s.id === 'SEC-02';
    if (secondaryTab === 'infrastructure') return s.id === 'SEC-03' || s.id === 'SEC-04' || s.id === 'SEC-05';
    return true;
  });

  return (
    <PageContainer className="bg-transparent">
      {/* ── 1. HERO HEADER ── */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-gray-100"
        aria-label="Services Header"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201, 216, 255, 0.45) 0%, transparent 65%), radial-gradient(ellipse 60% 60% at 85% 30%, rgba(219, 234, 254, 0.35) 0%, transparent 70%), linear-gradient(180deg, #FBFAF8 0%, #F5F8FF 40%, #EFF4FF 70%, #FBFAF8 100%)',
        }}
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.25]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(30,64,175,0.18) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        <div className="nox-container relative z-10 text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-xs mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" aria-hidden="true" />
            <span className="nox-eyebrow text-[#1E40AF]">WHAT WE DO</span>
          </motion.div>

          {/* Large navy headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0B0D12] tracking-[-0.035em] leading-[1.1] mb-6"
          >
            Services built to{' '}
            <span className="text-blue-gradient">scale your business</span>
          </motion.h1>

          {/* Subtext describing breadth */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8"
          >
            From high-converting web applications, WhatsApp AI agents, and automated workflows to
            tailor-made enterprise software, mobile apps, UI/UX systems, cloud reliability, and
            connected IoT — we engineer end-to-end digital solutions that accelerate growth and
            simplify operations.
          </motion.p>

          {/* Quick Disciplinary Pills */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto"
          >
            {domains.map((domain) => (
              <span
                key={domain}
                className="px-3 py-1 text-xs font-medium text-gray-700 bg-white/60 backdrop-blur-md border border-white/80 rounded-full shadow-xs"
              >
                {domain}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. PRIMARY SERVICES GRID ── */}
      <section className="nox-section bg-[#FBFAF8]" aria-label="Primary Services" id="primary-services">
        <div className="nox-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="nox-eyebrow text-[#1E40AF] mb-2 font-mono">CORE OFFERINGS</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0D12] tracking-tight">
                Primary Engineering Services
              </h2>
            </div>
            <p className="text-gray-500 text-sm md:text-base max-w-md">
              Full-lifecycle engineering delivered with precision, scalable architecture, and
              meticulous attention to UX.
            </p>
          </div>

          {/* 3-column desktop / 1-column mobile grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {primaryServices.map((service, index) => {
              const Icon = iconLookup[service.iconName] || Globe;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card p-6 sm:p-8 flex flex-col justify-between group"
                  id={`service-${service.slug}`}
                >
                  <div>
                    {/* Top row: Icon + Category Badge */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50/90 border border-blue-100/70 flex items-center justify-center text-[#1E40AF] transition-transform duration-300 group-hover:scale-110 shadow-xs">
                        <Icon size={24} />
                      </div>
                      <span className="text-[10px] font-bold font-mono tracking-wider text-[#1E40AF] bg-blue-50/80 border border-blue-100/60 px-2.5 py-1 rounded-full uppercase">
                        {service.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0B0D12] mb-2.5 transition-colors duration-200 group-hover:text-[#1E40AF]">
                      {service.title}
                    </h3>

                    {/* 1-line description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    {/* Client-Facing Bullets */}
                    <div className="mb-6 pt-4 border-t border-gray-100/80">
                      <p className="text-[10px] font-bold tracking-wider uppercase text-gray-400 font-mono mb-3">
                        What We Deliver
                      </p>
                      <ul className="space-y-2.5">
                        {service.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-xs text-gray-700 flex items-start gap-2.5 leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer: Learn More trigger */}
                  <div className="pt-4 border-t border-gray-100/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveServiceModal(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#1E40AF] hover:text-[#172554] font-mono group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded"
                      id={`learn-more-${service.slug}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover/btn:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                    <Link
                      to={`/contact?type=${service.slug}`}
                      className="text-[11px] font-medium text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      Inquire
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SECONDARY SERVICES ── */}
      <section
        className="nox-section border-t border-b border-gray-100 bg-gradient-to-b from-[#FBFAF8] to-[#F5F8FF]"
        aria-label="Secondary Services"
        id="secondary-services"
      >
        <div className="nox-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="nox-eyebrow text-[#1E40AF] mb-2 font-mono">EXTENDED CAPABILITIES</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0D12] tracking-tight">
                Specialized & Infrastructure Services
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-2 max-w-xl">
                Complementary disciplines designed to ensure high discoverability, resilient cloud
                operations, and predictive hardware intelligence.
              </p>
            </div>

            {/* Category filter pills */}
            <div className="flex items-center gap-2 p-1 rounded-xl bg-white/70 backdrop-blur-md border border-gray-200/80 self-start md:self-auto">
              <button
                onClick={() => setSecondaryTab('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  secondaryTab === 'all'
                    ? 'bg-[#0B0D12] text-white shadow-xs'
                    : 'text-gray-600 hover:text-[#0B0D12]'
                }`}
              >
                All (5)
              </button>
              <button
                onClick={() => setSecondaryTab('growth')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  secondaryTab === 'growth'
                    ? 'bg-[#0B0D12] text-white shadow-xs'
                    : 'text-gray-600 hover:text-[#0B0D12]'
                }`}
              >
                Growth & Marketing
              </button>
              <button
                onClick={() => setSecondaryTab('infrastructure')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  secondaryTab === 'infrastructure'
                    ? 'bg-[#0B0D12] text-white shadow-xs'
                    : 'text-gray-600 hover:text-[#0B0D12]'
                }`}
              >
                Cloud & Edge IoT
              </button>
            </div>
          </div>

          {/* Compact Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSecondary.map((item, idx) => {
              const Icon = iconLookup[item.iconName] || Sparkles;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.45, delay: idx * 0.07 }}
                  className="bg-white/70 backdrop-blur-md border border-white/90 rounded-xl p-6 shadow-[0_2px_16px_rgba(30,64,175,0.06)] hover:shadow-[0_8px_30px_rgba(30,64,175,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  id={`secondary-${item.slug}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1E40AF] flex items-center justify-center shadow-xs">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0B0D12] mb-1">{item.title}</h3>
                    <p className="text-xs text-[#1E40AF] font-medium mb-3">{item.subtitle}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">{item.shortDesc}</p>

                    <div className="space-y-1.5 mb-5 pt-3 border-t border-gray-100">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="text-[11px] text-gray-700 flex items-start gap-2">
                          <CheckCircle2 size={13} className="text-[#3B82F6] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold text-gray-500">
                      {item.pricingNote || 'Milestone Scoped'}
                    </span>
                    <Link
                      to={item.ctaLink}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1E40AF] hover:text-[#172554] font-mono group"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED PRODUCTS (IN-HOUSE SAAS TOOLS BAND) ── */}
      <section
        className="nox-section border-b border-gray-200/80 relative overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 20%, rgba(219, 234, 254, 0.5) 0%, transparent 70%), linear-gradient(180deg, #F0F4FF 0%, #E8F0FE 50%, #F0F4FF 100%)',
        }}
        aria-label="Our In-House Products"
        id="products"
      >
        <div className="nox-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1E40AF] font-mono mb-2">
              IN-HOUSE SAAS INNOVATIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0D12] tracking-tight mb-3">
              Our Products
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Proprietary platforms engineered in-house by Noxvion to streamline operational
              compliance, team productivity, and revenue operations.
            </p>
          </div>

          {/* 5 mini product cards in a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {saasProducts.map((prod, idx) => {
              const Icon = iconLookup[prod.iconName] || FileText;

              return (
                <motion.div
                  key={prod.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-5 shadow-[0_4px_20px_rgba(30,64,175,0.08)] hover:shadow-[0_12px_36px_rgba(30,64,175,0.16)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  id={`product-${prod.id.toLowerCase()}`}
                >
                  <div>
                    {/* Top: Icon + Status Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E40AF] flex items-center justify-center shadow-xs">
                        <Icon size={20} />
                      </div>
                      <span
                        className={`text-[10px] font-bold font-mono tracking-wider uppercase px-2 py-0.5 rounded-full ${
                          prod.tag === 'Explore'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}
                      >
                        {prod.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B0D12] mb-1.5">{prod.name}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">{prod.valueProp}</p>
                  </div>

                  <button
                    onClick={() => setActiveProductModal(prod)}
                    className="w-full mt-2 py-2 px-3 text-xs font-semibold rounded-xl bg-white hover:bg-blue-50/70 border border-gray-200 hover:border-blue-200 text-[#1E40AF] transition-all flex items-center justify-center gap-1.5 group"
                    id={`trigger-${prod.id.toLowerCase()}`}
                  >
                    <span>{prod.learnMoreText}</span>
                    <ChevronRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. PRICING PRESENTATION ── */}
      <section className="nox-section bg-[#FBFAF8]" aria-label="Pricing Packages" id="pricing">
        <div className="nox-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1E40AF] font-mono mb-2">
              WEBSITE PACKAGES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0D12] tracking-tight mb-3">
              Clear, Milestone-Driven Packages
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Transparent scope with zero hidden costs. Designed to launch high-impact digital
              experiences with speed and craftsmanship.
            </p>
          </div>

          {/* 3 Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch mb-12">
            {websitePackages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-white/95 backdrop-blur-2xl border-2 border-[#1E40AF] shadow-[0_16px_50px_rgba(30,64,175,0.18)] lg:-translate-y-2'
                    : 'glass-card'
                }`}
                id={`pricing-card-${pkg.name.toLowerCase()}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#1E40AF] text-white text-[10px] font-bold tracking-widest uppercase font-mono shadow-sm">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Top info */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-gray-500">
                      {pkg.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-[#1E40AF] bg-blue-50 px-2.5 py-0.5 rounded-full font-mono">
                      {pkg.pricingLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0B0D12] mb-2">{pkg.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">{pkg.tagline}</p>

                  {/* Bullet inclusions */}
                  <div className="mb-6 pt-5 border-t border-gray-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-mono mb-3">
                      Package Inclusions
                    </p>
                    <ul className="space-y-3">
                      {pkg.inclusions.map((inc, iIdx) => (
                        <li key={iIdx} className="text-xs text-gray-800 flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#1E40AF] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100/50 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E40AF] font-mono block mb-1">
                      Best For
                    </span>
                    <p className="text-[11px] text-gray-600 leading-snug">{pkg.idealFor}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={pkg.ctaLink}
                  className={`w-full justify-center text-xs py-3 font-semibold group ${
                    pkg.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                  id={`cta-pkg-${pkg.name.toLowerCase()}`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Dedicated Custom Pricing Card for Retainers / SEO */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/70 via-white/80 to-blue-50/70 border border-blue-100/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center shrink-0 shadow-sm">
                <TrendingUp size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-lg font-bold text-[#0B0D12]">
                    Need SEO, Maintenance, or Ongoing Digital Marketing?
                  </h4>
                  <span className="hidden sm:inline-block text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-blue-100 text-[#1E40AF] rounded">
                    Retainers Available
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
                  Monthly growth retainers are tailored to your competitive landscape, keyword
                  velocity, and content frequency. We offer custom monthly pricing with dedicated
                  sprints, weekly performance tracking, and direct Slack communication.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <span className="text-xs font-semibold font-mono text-[#1E40AF]">Custom Pricing</span>
              <Link
                to="/contact?type=retainer"
                className="btn-primary text-xs py-2.5 px-5 w-full sm:w-auto justify-center group"
                id="cta-seo-quote"
              >
                <span>Get a Quote</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. CLOSING CTA BAND ── */}
      <section className="py-20 md:py-24 relative overflow-hidden" aria-label="Closing Call to Action">
        <div className="nox-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden border border-white/80 shadow-[0_20px_60px_rgba(30,64,175,0.14)]"
            style={{
              background:
                'radial-gradient(ellipse 80% 80% at 50% -10%, rgba(201, 216, 255, 0.7) 0%, transparent 70%), linear-gradient(135deg, #FFFFFF 0%, #F0F5FF 50%, #E6EEFF 100%)',
            }}
          >
            {/* Subtle decorative circles */}
            <div
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(30,64,175,0.2) 0%, transparent 70%)' }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#1E40AF] font-mono mb-3">
                LET'S COLLABORATE
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B0D12] tracking-tight mb-4">
                Not sure which service fits?{' '}
                <span className="text-blue-gradient">Let's talk.</span>
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                Tell us about your business goals and where you want to be. Our senior engineering
                leads will audit your current setup and blueprint a pragmatic, cost-effective roadmap.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  to="/contact"
                  className="btn-primary text-sm py-3.5 px-7 rounded-xl group w-full sm:w-auto justify-center"
                  id="closing-cta-contact"
                >
                  <span>Work With Us</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/projects"
                  className="btn-secondary text-sm py-3.5 px-6 rounded-xl w-full sm:w-auto justify-center"
                  id="closing-cta-projects"
                >
                  <span>Explore Recent Work</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MODALS ── */}
      <ServiceDetailModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
      />

      <ProductWaitlistModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
      />
    </PageContainer>
  );
};

export default Solutions;
