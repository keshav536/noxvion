import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-nox-base/90 backdrop-blur-xl border-b border-nox-border/60'
          : 'bg-nox-base/60 backdrop-blur-sm'
      }`}
      role="banner"
      style={{
        boxShadow: scrolled
          ? '0 1px 0 rgba(0, 240, 255, 0.04), 0 4px 24px rgba(0, 0, 0, 0.3)'
          : 'none',
      }}
    >
      {/* Subtle top accent line when scrolled */}
      {scrolled && (
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(0,240,255,0.2) 20%, rgba(0,240,255,0.4) 50%, rgba(0,240,255,0.2) 80%, transparent 100%)',
          }}
        />
      )}

      <div className="nox-container">
        <nav
          className="flex items-center justify-between h-16 md:h-[70px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nox-cyan"
            aria-label="NOXVION — Home"
            id="nav-logo"
          >
            <img
              src={logo}
              alt="NOXVION logo"
              className="h-8 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
              width={32}
              height={32}
            />
            <span className="text-nox-text font-semibold tracking-[0.08em] uppercase text-base md:text-lg select-none transition-all duration-300 group-hover:text-nox-cyan">
              NOXVION
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.to} className="relative" ref={dropdownRef} role="listitem">
                  <button
                    id="nav-solutions"
                    onClick={() => setSolutionsOpen((v) => !v)}
                    className={`nav-link-sweep flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nox-cyan ${
                      isActive(link.to)
                        ? 'text-nox-text active'
                        : 'text-nox-text-muted hover:text-nox-text'
                    }`}
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
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
                        className="absolute top-full left-0 mt-3 w-64 bg-nox-layer/95 backdrop-blur-xl border border-nox-border/80 py-2 z-50"
                        style={{
                          boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,240,255,0.06)',
                        }}
                        role="menu"
                        aria-label="Solutions submenu"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            role="menuitem"
                            className="flex items-center px-5 py-3 text-sm text-nox-text-muted hover:text-nox-text hover:bg-nox-cyan/5 transition-colors duration-150 group"
                          >
                            <span
                              className="w-1 h-1 rounded-full bg-nox-cyan mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
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
                    `nav-link-sweep text-sm font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nox-cyan ${
                      active
                        ? 'text-nox-text active'
                        : 'text-nox-text-muted hover:text-nox-text'
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
            <Link
              to="/work-with-us"
              id="nav-cta-work-with-us"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-nox-cyan text-nox-base border border-nox-cyan btn-depth-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nox-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-nox-base"
              aria-label="Work With Us"
            >
              Work With Us
            </Link>
            <button
              id="nav-mobile-toggle"
              className="lg:hidden p-2 text-nox-text-muted hover:text-nox-text transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nox-cyan"
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
            className="lg:hidden fixed inset-0 top-16 bg-nox-base/97 backdrop-blur-xl z-40 overflow-y-auto"
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
          >
            {/* Subtle border at top */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              aria-hidden="true"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(0,240,255,0.2), transparent)',
              }}
            />

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
                      className={`block py-3.5 text-lg font-medium border-b border-nox-border/40 transition-colors duration-200 ${
                        isActive(link.to) ? 'text-nox-text' : 'text-nox-text-muted hover:text-nox-text'
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
                            className="flex items-center gap-2 py-2 text-sm text-nox-text-dim hover:text-nox-text-muted transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-nox-cyan/40" aria-hidden="true" />
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
                  className="inline-flex items-center w-full justify-center px-6 py-4 text-xs font-semibold tracking-widest uppercase bg-nox-cyan text-nox-base hover:bg-nox-cyan-dim transition-colors duration-200"
                >
                  Work With Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
