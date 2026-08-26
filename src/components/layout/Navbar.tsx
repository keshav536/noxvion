import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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

  // Detect scroll for nav shadow
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
        scrolled ? 'bg-nox-base/95 backdrop-blur-sm border-b border-nox-border' : 'bg-nox-base'
      }`}
      role="banner"
    >
      <div className="nox-container">
        <nav
          className="flex items-center justify-between h-16 md:h-[70px]"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="NOXVION — Home"
            id="nav-logo"
          >
            <img
              src={logo}
              alt="NOXVION logo"
              className="h-8 w-auto object-contain"
              width={32}
              height={32}
            />
            <span className="text-nox-text font-semibold tracking-[0.08em] uppercase text-base md:text-lg select-none">
              NOXVION
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.to} className="relative" ref={dropdownRef} role="listitem">
                  <button
                    id={`nav-solutions`}
                    onClick={() => setSolutionsOpen((v) => !v)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nox-cyan ${
                      isActive(link.to)
                        ? 'text-nox-text border-b border-nox-text'
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
                  {solutionsOpen && (
                    <div
                      className="absolute top-full left-0 mt-3 w-64 bg-nox-layer border border-nox-border py-2 z-50"
                      role="menu"
                      aria-label="Solutions submenu"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          role="menuitem"
                          className="flex items-center px-5 py-3 text-sm text-nox-text-muted hover:text-nox-text hover:bg-white/5 transition-colors duration-150"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  role="listitem"
                  end={link.to === '/'}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive: active }) =>
                    `text-sm font-medium transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nox-cyan ${
                      active
                        ? 'text-nox-text border-b border-nox-text pb-0.5'
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
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-xs font-semibold tracking-widest uppercase bg-nox-cyan text-nox-base border border-nox-cyan hover:bg-nox-cyan-dim transition-colors duration-200"
              aria-label="Work With Us"
            >
              Work With Us
            </Link>
            <button
              id="nav-mobile-toggle"
              className="lg:hidden p-2 text-nox-text-muted hover:text-nox-text transition-colors duration-200"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-16 bg-nox-base z-40 overflow-y-auto"
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
        >
          <div className="nox-container py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <React.Fragment key={link.to}>
                <Link
                  to={link.to}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block py-3 text-lg font-medium border-b border-nox-border/50 transition-colors duration-200 ${
                    isActive(link.to) ? 'text-nox-text' : 'text-nox-text-muted hover:text-nox-text'
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 pb-2 flex flex-col gap-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                        className="py-2 text-sm text-nox-text-dim hover:text-nox-text-muted transition-colors duration-200"
                      >
                        — {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="mt-6">
              <Link
                to="/work-with-us"
                id="mobile-nav-work-with-us"
                className="inline-flex items-center w-full justify-center px-6 py-4 text-xs font-semibold tracking-widest uppercase bg-nox-cyan text-nox-base hover:bg-nox-cyan-dim transition-colors duration-200"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
