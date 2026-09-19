import React, { useRef, useEffect, useMemo } from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface WordRevealProps {
  children: string;
  as?: HeadingTag;
  className?: string;
  /** Delay between each word in seconds. Default 0.06 */
  stagger?: number;
  /** Initial delay before first word appears. Default 0 */
  delay?: number;
  /** IntersectionObserver root margin. Default '-60px 0px' */
  rootMargin?: string;
}

/**
 * WordReveal — Effect 2 of 3
 *
 * Scroll-triggered word-level reveal for selected section headings.
 * Distinct from FoldText (no GSAP, no 3D fold, simpler CSS animation).
 *
 * - Splits text into word spans
 * - CSS wordUp keyframe: translateY(18px) → 0, opacity 0 → 1
 * - Stagger via animation-delay on each span
 * - IntersectionObserver triggers once
 * - Screen readers receive full text via aria-label on the wrapper
 * - Word spans are aria-hidden to prevent double-reading
 * - Reduced motion: words appear immediately (opacity 1, no movement)
 * - Cleans up observer on unmount
 *
 * Usage: Apply to section headings that DO NOT already have FoldText.
 * Do NOT apply to headings already wrapped in FoldText.
 * Do NOT split long paragraphs.
 */
export const WordReveal: React.FC<WordRevealProps> = ({
  children,
  as: Tag = 'h2',
  className = '',
  stagger = 0.06,
  delay = 0,
  rootMargin = '-60px 0px',
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const isTriggeredRef = useRef(false);
  const reducedRef = useRef(false);

  const words = useMemo(() => children.trim().split(/\s+/), [children]);

  useEffect(() => {
    reducedRef.current =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.getAttribute('data-reduced-motion') === 'true';

    const container = containerRef.current;
    if (!container) return;

    // If reduced motion — immediately reveal all words
    if (reducedRef.current) {
      const spans = container.querySelectorAll<HTMLSpanElement>('.word-reveal-word');
      spans.forEach((span) => {
        span.style.opacity = '1';
        span.style.transform = 'none';
        span.style.animation = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTriggeredRef.current) {
          isTriggeredRef.current = true;
          const spans = container.querySelectorAll<HTMLSpanElement>('.word-reveal-word');
          spans.forEach((span) => {
            span.classList.add('word-is-visible');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Tag
      ref={containerRef as any}
      className={`word-reveal-container ${className}`}
      // Full text for screen readers on the heading element itself
      aria-label={children}
    >
      {words.map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          <span
            className="word-reveal-word"
            aria-hidden="true"
            style={{
              animationDelay: `${delay + i * stagger}s`,
            }}
          >
            {word}
          </span>
          {/* Non-breaking space between words (not hidden) */}
          {i < words.length - 1 && (
            <span aria-hidden="true">&nbsp;</span>
          )}
        </React.Fragment>
      ))}
    </Tag>
  );
};
