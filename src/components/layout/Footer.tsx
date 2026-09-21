import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import logo from '../../assets/noxvion-logo.png';
import {
  contactConfig,
  getEmailHref,
  getPhoneHref,
  getWhatsappHref,
} from '../../config/contact';
import { SocialLinks } from '../ui/SocialLinks';

const footerNav = [
  { label: 'Home', to: '/' },
  { label: 'About Noxvion', to: '/about' },
  { label: 'Our Solutions', to: '/solutions' },
  { label: 'Research & Build', to: '/research-build' },
  { label: 'Innovation Hub', to: '/innovation-hub' },
  { label: 'Case Studies / Projects', to: '/projects' },
  { label: 'Work With Us', to: '/work-with-us' },
  { label: 'Contact', to: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Security Architecture', to: '/security' },
  { label: 'Hardware Compliance', to: '/compliance' },
];

export const Footer: React.FC = () => {
  const emailHref = getEmailHref('Website Inquiry via NOXVION Footer');
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref('Hello NOXVION, I would like to inquire about your engineering solutions.');

  return (
    <footer
      className="bg-[#050507] text-white border-t border-white/10 mt-auto relative overflow-hidden"
      role="contentinfo"
    >
      {/* Subtle ambient glow in the background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Subtle grid in footer */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 80%)',
        }}
      />

      <div className="nox-container py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12 border-b border-white/10">
          {/* Brand & Social */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded p-1"
              aria-label="NOXVION Home"
            >
              <img
                src={logo}
                alt="NOXVION"
                className="h-8 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                width={32}
                height={32}
              />
              <span className="text-white font-semibold tracking-[0.1em] uppercase text-base transition-colors duration-200 group-hover:text-blue-400">
                NOXVION
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Building Intelligent Technology for a Smarter Future.
            </p>
            <p className="text-zinc-500 text-[11px] tracking-widest uppercase font-mono">
              Technical Precision Guaranteed.
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-2.5 mt-1">
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                aria-hidden="true"
              />
              <span className="text-[10px] font-semibold tracking-widest uppercase text-zinc-400 font-mono">
                Systems Nominal
              </span>
            </div>

            {/* Social Channels */}
            <div className="mt-3">
              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-2 font-semibold">
                CHANNELS
              </p>
              <SocialLinks iconSize={16} />
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="md:col-span-1">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-400 mb-5 font-mono">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerNav.map((item) => (
                <li key={item.to} role="listitem">
                  <Link
                    to={item.to}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 relative group flex items-center gap-2 w-fit"
                  >
                    <span
                      className="w-0 h-px bg-blue-500 group-hover:w-3 transition-all duration-200"
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Direct Contact Teaser & Coordinates */}
          <div className="md:col-span-1 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-blue-400 mb-4 font-mono">
                Direct Contact
              </p>
              <div className="space-y-3 mb-6">
                {emailHref ? (
                  <a
                    href={emailHref}
                    aria-label={`Email us at ${contactConfig.email}`}
                    className="flex items-center gap-2.5 text-xs text-zinc-300 hover:text-white transition-colors group font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded"
                  >
                    <Mail size={14} className="text-blue-400 shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <span className="truncate">{contactConfig.email}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2.5 text-xs text-zinc-500 font-mono" title="Email pending configuration">
                    <Mail size={14} className="text-zinc-600 shrink-0" aria-hidden="true" />
                    <span className="truncate">Email: Config Pending</span>
                  </div>
                )}

                {phoneHref ? (
                  <a
                    href={phoneHref}
                    aria-label={`Call us at ${contactConfig.phoneDisplay}`}
                    className="flex items-center gap-2.5 text-xs text-zinc-300 hover:text-white transition-colors group font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 rounded"
                  >
                    <Phone size={14} className="text-blue-400 shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <span>{contactConfig.phoneDisplay}</span>
                  </a>
                ) : null}

                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message NOXVION on WhatsApp"
                    className="flex items-center gap-2.5 text-xs text-zinc-300 hover:text-emerald-400 transition-colors group font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
                  >
                    <MessageCircle size={14} className="text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <span>WhatsApp Protocol</span>
                  </a>
                ) : null}
              </div>
            </div>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-white/[0.04] border border-white/15 text-white hover:bg-white/[0.08] hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] rounded-lg transition-all duration-300 btn-depth-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Launch Intake Form
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-zinc-500 text-[11px] tracking-wide">
            © {new Date().getFullYear()} NOXVION. All Rights Reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {legalLinks.map((item) => (
                <li key={item.label} role="listitem">
                  <Link
                    to={item.to}
                    className="text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors duration-150 focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
