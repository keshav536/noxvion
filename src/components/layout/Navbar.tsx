import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/noxvion-logo.png';
import { MagneticButton } from '../effects/MagneticButton';
import { SocialLinks } from '../ui/SocialLinks';

const solutionsDropdown = [
  { label: 'AI & Machine Learning', to: '/solutions/ai-machine-learning' },
  { label: 'Web & Software Development', to: '/solutions/web-software' },
  { label: 'IoT Solutions', to: '/solutions/iot' },
  { label: 'Automation Solutions', to: '/solutions/automation' },
  { label: 'Research & Product R&D', to: '/solutions/research-product-rnd' },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Solutions', to: '/solutions', dropdown: solutionsDropdown },
  { label: 'Research & Build', to: '/research-build' },
  { label: 'Projects', to: '/projects' },
  { label: 'Innovation Hub', to: '/innovation-hub' },
  { label: 'Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  // Close mobile menu on route change
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setMobileOpen(false);
      setSolutionsOpen(false);
    }
  }, [location.pathname]);

  // Detect scroll — add depth elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)]'
          : 'bg-black/40 backdrop-blur-md border-b border-white/[0.06]'
      }`}
      role="banner"
    >
      {/* Subtle top accent laser line when scrolled */}
      {scrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 20%, rgba(96,165,250,0.6) 50%, rgba(59,130,246,0.3) 80%, transparent 100%)',
          }}
        />
      )}

      <div className="nox-container">
        <nav
          className="flex items-center justify-between h-16 md:h-[72px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="cursor-target flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="NOXVION — Home"
            id="nav-logo"
          >
            <img
              src={logo}
              alt="NOXVION"
              className="h-8 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
              width={32}
              height={32}
            />
            <span className="text-white font-semibold tracking-[0.1em] uppercase text-base md:text-lg select-none transition-all duration-300 group-hover:text-blue-400">
              NOXVION
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7" role="list">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.to} className="relative" ref={dropdownRef} role="listitem">
                  <button
                    id="nav-solutions"
                    onClick={() => setSolutionsOpen((v) => !v)}
                    className={`cursor-target nav-link-sweep flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${
                      isActive(link.to)
                        ? 'text-white font-semibold active'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-blue-400' : 'text-zinc-500'}`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute top-full left-0 mt-3 w-64 bg-[#0e0e10]/95 backdrop-blur-2xl border border-white/10 rounded-xl py-2 z-50 shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
                        role="menu"
                        aria-label="Solutions submenu"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            role="menuitem"
                            className="cursor-target flex items-center px-4 py-2.5 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors duration-150 group rounded-lg mx-1.5"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                              aria-hidden="true"
                            />
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  role="listitem"
                  end={link.to === '/'}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive: active }) =>
                    `cursor-target nav-link-sweep text-sm font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${
                      active
                        ? 'text-white font-semibold active'
                        : 'text-zinc-400 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <MagneticButton strength={8}>
              <Link
                to="/work-with-us"
                id="nav-cta-work-with-us"
                className="cursor-target hidden lg:inline-flex items-center px-4.5 py-2 text-xs font-semibold tracking-widest uppercase bg-blue-600 text-white hover:bg-blue-500 border border-blue-500/50 hover:border-blue-400 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_28px_rgba(59,130,246,0.5)] transition-all duration-200 btn-depth-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label="Work With Us"
              >
                Work With Us
              </Link>
            </MagneticButton>
            <button
              id="nav-mobile-toggle"
              className="cursor-target lg:hidden p-2 text-zinc-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden fixed inset-0 top-16 bg-[#09090b]/98 backdrop-blur-2xl z-40 overflow-y-auto border-t border-white/10"
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
          >
            <div className="nox-container py-8 flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <React.Fragment key={link.to}>
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.25 }}
                  >
                    <Link
                      to={link.to}
                      id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block py-3.5 text-lg font-medium border-b border-white/[0.08] transition-colors duration-200 ${
                        isActive(link.to) ? 'text-blue-400 font-semibold' : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                  {link.dropdown && (
                    <div className="pl-4 pb-2 flex flex-col gap-0.5">
                      {link.dropdown.map((item, subIdx) => (
                        <motion.div
                          key={item.to}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 + subIdx * 0.03, duration: 0.2 }}
                        >
                          <Link
                            to={item.to}
                            id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center gap-2.5 py-2.5 text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05, duration: 0.25 }}
              >
                <Link
                  to="/work-with-us"
                  id="mobile-nav-work-with-us"
                  className="inline-flex items-center w-full justify-center px-6 py-3.5 text-xs font-semibold tracking-widest uppercase bg-blue-600 text-white hover:bg-blue-500 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-colors duration-200"
                >
                  Work With Us
                </Link>
              </motion.div>

              <motion.div
                className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.1, duration: 0.25 }}
              >
                <span className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase">
                  Direct Channels
                </span>
                <SocialLinks size={16} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
