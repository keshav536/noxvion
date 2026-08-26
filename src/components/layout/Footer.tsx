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
      className="bg-[#0A0A0B] border-t border-nox-border mt-auto"
      role="contentinfo"
    >
      <div className="nox-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12 border-b border-nox-border">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-3" aria-label="NOXVION Home">
              <img
                src={logo}
                alt="NOXVION logo"
                className="h-8 w-auto object-contain"
                width={32}
                height={32}
              />
              <span className="text-nox-text font-semibold tracking-[0.08em] uppercase text-base">
                NOXVION
              </span>
            </Link>
            <p className="text-nox-text-muted text-sm leading-relaxed max-w-xs">
              Building Intelligent Technology for a Smarter Future.
            </p>
            <p className="text-nox-text-dim text-[11px] tracking-widest uppercase mt-2">
              Technical Precision Guaranteed.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="md:col-span-1">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-nox-text-dim mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {footerNav.map((item) => (
                <li key={item.to} role="listitem">
                  <Link
                    to={item.to}
                    className="text-sm text-nox-text-muted hover:text-nox-text transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact teaser */}
          <div className="md:col-span-1">
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-nox-text-dim mb-5">
              Get In Touch
            </p>
            <p className="text-sm text-nox-text-muted mb-6 leading-relaxed">
              Have an idea worth engineering? Let's start a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-transparent border border-nox-border text-nox-text-muted hover:border-nox-text hover:text-nox-text transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-nox-text-dim text-[11px] tracking-wide">
            © 2024 NOXVION. All Rights Reserved.
          </p>
          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2" role="list">
              {legalLinks.map((item) => (
                <li key={item.label} role="listitem">
                  <Link
                    to={item.to}
                    className="text-[11px] tracking-widest uppercase text-nox-text-dim hover:text-nox-text-muted transition-colors duration-200"
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
