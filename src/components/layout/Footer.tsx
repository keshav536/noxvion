import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

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
  return (
    <footer
      className="bg-[#0A2540] text-white footer-top-glow mt-auto relative overflow-hidden"
      role="contentinfo"
    >
      {/* Subtle ambient glow in the background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)',
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
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 80%)',
        }}
      />

      <div className="nox-container py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12 border-b border-white/15">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]"
              aria-label="NOXVION Home"
            >
              <img
                src={logo}
                alt="NOXVION logo"
                className="h-8 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                width={32}
                height={32}
              />
              <span className="text-white font-semibold tracking-[0.08em] uppercase text-base transition-colors duration-200 group-hover:text-[#3B82F6]">
                NOXVION
              </span>
            </Link>
            <p className="text-[#D9E7F5] text-sm leading-relaxed max-w-xs">
              Building Intelligent Technology for a Smarter Future.
            </p>
            <p className="text-[#BBD3F2] text-[11px] tracking-widest uppercase">
              Technical Precision Guaranteed.
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mt-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] status-dot-active"
                aria-hidden="true"
              />
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#D9E7F5]">
                Systems Nominal
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="md:col-span-1">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B82F6] mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerNav.map((item) => (
                <li key={item.to} role="listitem">
                  <Link
                    to={item.to}
                    className="text-sm text-[#D9E7F5] hover:text-white transition-colors duration-200 relative group flex items-center gap-2 w-fit"
                  >
                    <span
                      className="w-0 h-px bg-[#3B82F6] group-hover:w-3 transition-all duration-200"
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact teaser */}
          <div className="md:col-span-1">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#3B82F6] mb-5">
              Get In Touch
            </p>
            <p className="text-sm text-[#D9E7F5] mb-6 leading-relaxed">
              Have an idea worth engineering? Let's start a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-white/10 border border-white/25 text-white hover:bg-white/20 hover:border-[#3B82F6] hover:shadow-[0_0_16px_rgba(59,130,246,0.2)] rounded-[10px] transition-all duration-300 btn-depth-secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-[#D9E7F5]/80 text-[11px] tracking-wide">
            © 2024 NOXVION. All Rights Reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {legalLinks.map((item) => (
                <li key={item.label} role="listitem">
                  <Link
                    to={item.to}
                    className="text-[11px] tracking-widest uppercase text-[#D9E7F5]/80 hover:text-white transition-colors duration-200"
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
