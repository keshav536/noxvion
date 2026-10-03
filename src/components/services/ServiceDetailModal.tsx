import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { PrimaryService } from '../../data/servicesData';
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
} from 'lucide-react';

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
};

interface ServiceDetailModalProps {
  service: PrimaryService | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const Icon = iconLookup[service.iconName] || Globe;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0D12]/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-[0_24px_70px_rgba(30,64,175,0.18)] p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-[#0B0D12] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex items-start gap-4 mb-6 pr-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-50/90 border border-blue-100/80 flex items-center justify-center text-[#1E40AF] shrink-0 shadow-sm">
              <Icon size={28} />
            </div>
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#1E40AF] font-mono mb-1">
                {service.category} · {service.id}
              </span>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#0B0D12] tracking-tight">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Detailed description */}
          <p className="text-gray-600 text-base leading-relaxed mb-6 pb-6 border-b border-gray-100">
            {service.fullDesc}
          </p>

          {/* Key Deliverables & Client Benefits */}
          <div className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono mb-3">
              Included Deliverables & Engineering Scope
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-blue-50/40 border border-blue-100/50 text-xs text-gray-800 font-medium"
                >
                  <CheckCircle2 size={15} className="text-[#1E40AF] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 font-mono mb-3 flex items-center gap-1.5">
              <Cpu size={14} className="text-[#1E40AF]" />
              Core Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium font-mono text-[#1E40AF] bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-gray-500">
              Custom requirements? We engineer around your exact roadmap.
            </span>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <Link
                to={`/contact?type=${service.slug}`}
                onClick={onClose}
                className="btn-primary w-full sm:w-auto justify-center text-xs py-2.5 px-5 group"
              >
                {service.ctaText}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
