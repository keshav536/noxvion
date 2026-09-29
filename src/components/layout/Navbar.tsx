import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/noxvion-logo.png";
import { SocialLinks } from "../ui/SocialLinks";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/solutions" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setMobileOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_24px_rgba(11,13,18,0.08)] border-b border-[rgba(0,0,0,0.06)]"
          : "bg-transparent border-b border-transparent"
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
            className="flex items-center gap-2.5 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg p-1"
            aria-label="NOXVION — Home"
            id="nav-logo"
          >
            <img
              src={logo}
              alt="NOXVION"
              className="h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              width={28}
              height={28}
            />
            <span className="text-[#0B0D12] font-bold tracking-[0.15em] uppercase text-[15px] select-none transition-colors duration-200 group-hover:text-[#1E40AF]">
              NOXVION
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                id={`nav-${link.label.toLowerCase()}`}
                className={({ isActive: active }) =>
                  `nav-link-sweep relative text-[13.5px] font-medium transition-colors duration-150 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded ${
                    active
                      ? "text-[#1E40AF] font-semibold active"
                      : "text-[#374151] hover:text-[#1E40AF]"
                  }`
                }
              >
                {({ isActive: active }) => (
                  <>
                    {link.label}
                    {active && <span className="nav-dot" aria-hidden="true" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              id="nav-cta"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-semibold tracking-wide bg-[#0F1115] text-white hover:bg-[#1a1d24] rounded-[10px] shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 group"
              aria-label="Let's Build"
            >
              {"Let's Build"}
              <ArrowRight size={13} className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>

            <button
              id="nav-mobile-toggle"
              className="lg:hidden p-2 text-[#0B0D12] hover:text-[#1E40AF] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] rounded-lg"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden fixed inset-0 top-16 bg-white/98 backdrop-blur-2xl z-40 overflow-y-auto border-t border-gray-100"
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
          >
            <div className="nox-container py-6 flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.2 }}
                >
                  <Link
                    to={link.to}
                    id={`mobile-nav-${link.label.toLowerCase()}`}
                    className={`block py-3.5 text-base font-medium border-b border-gray-100 transition-colors duration-150 ${
                      isActive(link.to)
                        ? "text-[#1E40AF] font-semibold"
                        : "text-[#111827] hover:text-[#1E40AF]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 + 0.05, duration: 0.2 }}
              >
                <Link
                  to="/contact"
                  id="mobile-nav-cta"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 text-sm font-semibold tracking-wide bg-[#0F1115] text-white hover:bg-[#1a1d24] rounded-xl shadow-sm transition-colors duration-150"
                >
                  {"Let's Build"}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </motion.div>

              <motion.div
                className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.1, duration: 0.2 }}
              >
                <span className="text-[11px] tracking-wider text-gray-400 uppercase font-medium">
                  Connect
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

export default Navbar;
