import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

interface RouteTransitionProps {
  children: React.ReactNode;
}

export const RouteTransition: React.FC<RouteTransitionProps> = ({ children }) => {
  const location = useLocation();
  const navType = useNavigationType();
  const [navigating, setNavigating] = useState(false);
  const prevPathRef = useRef(location.pathname);
  const [isReduced, setIsReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'true'
    );
  });

  // Keep reduced motion synchronized with user preference or OS setting
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => {
      setIsReduced(
        mediaQuery.matches ||
        document.documentElement.getAttribute('data-reduced-motion') === 'true'
      );
    };

    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  // Trigger laser sweep, focus management, and smart scroll handling on path change
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setNavigating(true);

      // Handle scroll restoration
      if (location.hash) {
        // Same-page anchor: scroll to target element
        const id = location.hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (navType !== 'POP') {
        // Only reset scroll on forward navigation (PUSH or REPLACE)
        // Preserves natural browser back/forward history scroll position on POP
        window.scrollTo(0, 0);
      }

      // Accessibility: focus #main-content
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus({ preventScroll: true });
      }

      // Hide laser bar after sweep completes
      const timer = setTimeout(() => {
        setNavigating(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash, navType]);

  // Framer Motion variants: minimal, ultra-smooth, professional
  const pageVariants: Variants = {
    initial: {
      opacity: 0,
      y: isReduced ? 0 : 4,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReduced ? 0.08 : 0.22,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      y: isReduced ? 0 : -3,
      transition: {
        duration: isReduced ? 0.06 : 0.12,
        ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
      },
    },
  };

  return (
    <>
      {/* Top Cybernetic Light Sweep Indicator positioned directly under navbar */}
      {navigating && !isReduced && <div className="route-laser-bar" aria-hidden="true" />}

      {/* Screen Reader Route Change Announcement */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Navigated to {location.pathname.replace('/', '') || 'Home'}
      </div>

      {/* Centralized AnimatePresence Route Transition */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full flex-1 flex flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
