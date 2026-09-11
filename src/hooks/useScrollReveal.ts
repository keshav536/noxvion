import { useRef, useEffect, useState } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * useScrollReveal — IntersectionObserver-based visibility hook.
 * Returns a ref to attach to the target element and an isVisible flag.
 * Triggers once by default.
 */
export function useScrollReveal<T extends Element = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
