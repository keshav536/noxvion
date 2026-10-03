import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';
import type { SaaSProduct } from '../../data/servicesData';

interface ProductWaitlistModalProps {
  product: SaaSProduct | null;
  onClose: () => void;
}

export const ProductWaitlistModal: React.FC<ProductWaitlistModalProps> = ({ product, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setSubmitted(false);
      setEmail('');
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0D12]/40 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-[0_24px_70px_rgba(30,64,175,0.18)] p-6 sm:p-7 z-10"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-[#0B0D12] hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="mb-4">
            <span
              className={`inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full font-mono mb-2 ${
                product.tag === 'Explore'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}
            >
              {product.tag}
            </span>
            <h2 id="product-modal-title" className="text-2xl font-bold text-[#0B0D12]">
              {product.name}
            </h2>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {product.valueProp}
            </p>
          </div>

          <div className="my-5 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100/60">
            <h3 className="text-[11px] font-bold tracking-wider uppercase text-[#1E40AF] font-mono mb-2">
              Key Capabilities
            </h3>
            <ul className="space-y-1.5 text-xs text-gray-700">
              {product.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#1E40AF] shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
              <Sparkles size={24} className="text-emerald-600 mx-auto mb-1.5" />
              <p className="text-xs font-bold text-emerald-900">
                You're on the priority list!
              </p>
              <p className="text-[11px] text-emerald-700 mt-1">
                We'll reach out as early access slots open for {product.name}.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-4 py-1.5 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-gray-600 uppercase tracking-wider font-mono mb-1.5">
                  Early Access / Demo Request
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-gray-900"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full justify-center text-xs py-2.5 font-semibold group"
              >
                <span>Request Early Access</span>
                <Send size={13} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
