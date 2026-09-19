import React, { useState, useCallback, useEffect } from 'react';
import { readPreference, applyPreference } from '../../hooks/useMotionPreference';

/**
 * MotionToggle — discreet fixed-position control to toggle motion effects.
 * - Bottom-right corner, unobtrusive
 * - Persists to localStorage
 * - Works with prefers-reduced-motion
 * - Keyboard accessible with ARIA label
 * - Applies data-reduced-motion attribute to <html>
 */
export const MotionToggle: React.FC = () => {
  const [isReduced, setIsReduced] = useState<boolean>(() => readPreference());

  useEffect(() => {
    applyPreference(isReduced);
  }, [isReduced]);

  const toggle = useCallback(() => {
    setIsReduced((prev) => {
      const next = !prev;
      applyPreference(next);
      return next;
    });
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      style={{ pointerEvents: 'auto' }}
    >
      <button
        onClick={toggle}
        className="group flex items-center gap-2 px-3.5 py-2 bg-[#0e0e12]/90 backdrop-blur-md border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.6)] hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] rounded-lg transition-all duration-200 text-[10px] font-semibold tracking-widest uppercase text-zinc-400 hover:text-white font-mono"
        aria-label={isReduced ? 'Enable motion effects' : 'Reduce motion effects'}
        title={isReduced ? 'Enable motion effects' : 'Reduce motion effects'}
        id="motion-toggle"
      >
        {/* Icon */}
        <span
          className="w-3 h-3 relative flex items-center justify-center text-blue-400"
          aria-hidden="true"
        >
          {isReduced ? (
            // Static icon — motion off
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.5" />
              <line x1="2" y1="2" x2="10" y2="10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ) : (
            // Motion icon — motion on
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="2" fill="currentColor" />
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            </svg>
          )}
        </span>
        <span className="hidden sm:inline">
          {isReduced ? 'Motion Off' : 'Motion On'}
        </span>
      </button>
    </div>
  );
};
