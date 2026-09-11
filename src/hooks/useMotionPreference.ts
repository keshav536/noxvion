import { useEffect } from 'react';

export const STORAGE_KEY = 'nox-motion';

/**
 * Read the persisted motion preference.
 * Returns true if effects should be reduced.
 */
export function readPreference(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return stored === 'reduced';
  } catch {
    // ignore
  }
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

/**
 * Apply motion preference to the document root and local storage.
 */
export function applyPreference(reduced: boolean): void {
  document.documentElement.setAttribute(
    'data-reduced-motion',
    reduced ? 'true' : 'false'
  );
  try {
    localStorage.setItem(STORAGE_KEY, reduced ? 'reduced' : 'full');
  } catch {
    // ignore
  }
}

/**
 * Hook to initialize motion preference on app mount.
 * Call once in App.tsx.
 */
export function useMotionPreference(): void {
  useEffect(() => {
    const pref = readPreference();
    applyPreference(pref);
  }, []);
}
