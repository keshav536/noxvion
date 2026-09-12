import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

interface AppLoaderProps {
  /** Minimum display duration in ms for first-time session visit (default: 350ms) */
  minDuration?: number;
  /** Hard safety timeout in ms (default: 1200ms) */
  maxTimeout?: number;
  /** Callback fired when loader finishes exiting */
  onComplete?: () => void;
}

export const AppLoader: React.FC<AppLoaderProps> = ({
  minDuration = 350,
  maxTimeout = 1200,
  onComplete,
}) => {
  // If already visited in this session or reduced motion requested, skip loader entirely
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasVisited = sessionStorage.getItem('noxvion_visited');
    const isReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'true';
    return !hasVisited && !isReduced;
  });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      onComplete?.();
      return;
    }

    const startTime = performance.now();

    const finishLoading = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        setIsReady(true);
        sessionStorage.setItem('noxvion_visited', 'true');
        setTimeout(() => {
          setIsVisible(false);
          onComplete?.();
        }, 220); // crisp 220ms fade exit
      }, remaining);
    };

    // Fast check for critical fonts
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(finishLoading).catch(finishLoading);
    } else {
      finishLoading();
    }

    // Hard safety timeout: loader will NEVER remain stuck under any circumstances
    const safetyTimer = setTimeout(() => {
      setIsReady(true);
      setIsVisible(false);
      sessionStorage.setItem('noxvion_visited', 'true');
      onComplete?.();
    }, maxTimeout);

    return () => {
      clearTimeout(safetyTimer);
    };
  }, [isVisible, minDuration, maxTimeout, onComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          key="app-loader"
          role="status"
          aria-live="polite"
          aria-busy={!isReady}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1.0] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0A2540] select-none pointer-events-auto"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            aria-hidden="true"
          />

          {/* Centered Dimensional Brand Mark */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-5"
            >
              <img
                src={logo}
                alt="NOXVION"
                className="w-20 md:w-24 h-auto object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              />
            </motion.div>

            {/* Monospace Telemetry Status */}
            <div className="flex items-center gap-2 mb-3 font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-[#93C5FD] uppercase">
              <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
              <span>NOXVION // INITIALIZING</span>
            </div>

            {/* Laser Progress Track */}
            <div className="w-40 h-[2px] bg-white/20 overflow-hidden relative rounded-full">
              <div
                className="app-loader-laser h-full bg-gradient-to-r from-transparent via-[#3B82F6] to-white"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
