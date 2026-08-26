import React, { useRef, useLayoutEffect, useMemo, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FoldText.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// React 18/19 safe layout effect
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export type SplitByOption = 'word' | 'letter' | 'character' | 'none';
export type HingeOption = 'top' | 'bottom' | 'left' | 'right';
export type TriggerOption = 'scroll' | 'mount';

export interface FoldTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  splitBy?: SplitByOption;
  hinge?: HingeOption;
  duration?: number;
  stagger?: number;
  ease?: string;
  perspective?: number;
  creaseShading?: number;
  trigger?: TriggerOption;
  className?: string;
  style?: React.CSSProperties;
  fontWeight?: string | number;
  onComplete?: () => void;
  id?: string;
}

interface VisualItem {
  id: string;
  type: 'word' | 'space' | 'break';
  text?: string;
  letters?: string[];
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Extracts plain text for screen readers and structured tokens for 3D animation
 */
function parseContent(
  children: React.ReactNode,
  splitBy: SplitByOption
): { plainText: string; items: VisualItem[] } {
  let plainTextAcc = '';
  const items: VisualItem[] = [];
  let itemCounter = 0;

  function traverse(node: React.ReactNode, parentClassName?: string, parentStyle?: React.CSSProperties) {
    if (node === null || node === undefined || node === false) {
      return;
    }

    if (typeof node === 'string' || typeof node === 'number') {
      const str = String(node);
      plainTextAcc += str;

      if (splitBy === 'none') {
        items.push({
          id: `item-${itemCounter++}`,
          type: 'word',
          text: str,
          className: parentClassName,
          style: parentStyle,
        });
        return;
      }

      // Split into words and spaces
      const tokens = str.split(/(\s+)/);
      for (const token of tokens) {
        if (!token) continue;
        if (/^\s+$/.test(token)) {
          items.push({
            id: `space-${itemCounter++}`,
            type: 'space',
            text: token,
          });
        } else {
          if (splitBy === 'letter' || splitBy === 'character') {
            items.push({
              id: `word-${itemCounter++}`,
              type: 'word',
              text: token,
              letters: Array.from(token),
              className: parentClassName,
              style: parentStyle,
            });
          } else {
            items.push({
              id: `word-${itemCounter++}`,
              type: 'word',
              text: token,
              className: parentClassName,
              style: parentStyle,
            });
          }
        }
      }
      return;
    }

    if (Array.isArray(node)) {
      node.forEach((child) => traverse(child, parentClassName, parentStyle));
      return;
    }

    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{
        children?: React.ReactNode;
        className?: string;
        style?: React.CSSProperties;
      }>;

      // Handle line breaks
      if (element.type === 'br') {
        plainTextAcc += ' ';
        items.push({
          id: `break-${itemCounter++}`,
          type: 'break',
        });
        return;
      }

      const combinedClassName = [parentClassName, element.props.className].filter(Boolean).join(' ');
      const combinedStyle = { ...parentStyle, ...element.props.style };

      traverse(element.props.children, combinedClassName, combinedStyle);
    }
  }

  traverse(children);
  return { plainText: plainTextAcc.trim(), items };
}

export const FoldText: React.FC<FoldTextProps> = ({
  children,
  as: Component = 'h1',
  splitBy = 'word',
  hinge = 'top',
  duration = 0.65,
  stagger = 0.045,
  ease = 'power3.out',
  perspective = 700,
  creaseShading = 0.35,
  trigger = 'scroll',
  className = '',
  style = {},
  fontWeight,
  onComplete,
  id,
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  const { plainText, items } = useMemo(() => {
    return parseContent(children, splitBy);
  }, [children, splitBy]);

  useIsomorphicLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const innerElements = el.querySelectorAll<HTMLElement>('.fold-text-inner');
      const shadeElements = el.querySelectorAll<HTMLElement>('.fold-text-shade');

      if (innerElements.length === 0) return;

      if (prefersReducedMotion) {
        // Fallback for reduced motion: clean subtle opacity fade without 3D rotation
        gsap.set(innerElements, { opacity: 0, y: 8, rotateX: 0, rotateY: 0 });
        if (shadeElements.length > 0) {
          gsap.set(shadeElements, { opacity: 0 });
        }

        const tl = gsap.timeline({
          scrollTrigger:
            trigger === 'scroll'
              ? {
                  trigger: el,
                  start: 'top 90%',
                  once: true,
                }
              : undefined,
          onComplete,
        });

        tl.to(innerElements, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: 'power2.out',
        });
        return;
      }

      // Responsive adjustments for mobile
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const activePerspective = isMobile ? Math.min(perspective, 450) : perspective;
      const activeStagger = isMobile ? Math.min(stagger, 0.035) : stagger;

      // Determine initial 3D rotation and transform origin
      let initialTransform: { rotateX?: number; rotateY?: number } = {};
      let transformOrigin = '50% 50%';

      switch (hinge) {
        case 'top':
          initialTransform = { rotateX: -85 };
          transformOrigin = '50% 0%';
          break;
        case 'bottom':
          initialTransform = { rotateX: 85 };
          transformOrigin = '50% 100%';
          break;
        case 'left':
          initialTransform = { rotateY: 85 };
          transformOrigin = '0% 50%';
          break;
        case 'right':
          initialTransform = { rotateY: -85 };
          transformOrigin = '100% 50%';
          break;
      }

      // Set initial 3D states
      gsap.set(innerElements, {
        ...initialTransform,
        opacity: 0,
        transformPerspective: activePerspective,
        transformOrigin,
      });

      if (creaseShading > 0 && shadeElements.length > 0) {
        gsap.set(shadeElements, { opacity: Math.min(creaseShading, 0.8) });
      }

      // Build animation timeline
      const tl = gsap.timeline({
        scrollTrigger:
          trigger === 'scroll'
            ? {
                trigger: el,
                start: 'top 88%',
                once: true,
              }
            : undefined,
        onComplete,
      });

      tl.to(
        innerElements,
        {
          rotateX: 0,
          rotateY: 0,
          opacity: 1,
          duration,
          stagger: activeStagger,
          ease,
          force3D: true,
        },
        0
      );

      if (creaseShading > 0 && shadeElements.length > 0) {
        tl.to(
          shadeElements,
          {
            opacity: 0,
            duration: duration * 0.85,
            stagger: activeStagger,
            ease: 'power2.out',
          },
          0
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [hinge, duration, stagger, ease, perspective, creaseShading, trigger, onComplete, items]);

  const combinedStyles: React.CSSProperties = {
    ...style,
    fontWeight: fontWeight !== undefined ? fontWeight : style.fontWeight,
  };

  const shadeClass = `fold-text-shade fold-text-shade-${hinge}`;

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`fold-text-root ${className}`.trim()}
      style={combinedStyles}
      id={id}
    >
      {/* Accessible representation for assistive tech and search engines */}
      <span className="fold-text-accessible">{plainText}</span>

      {/* Visual 3D animated representation */}
      <span className="fold-text-visual" aria-hidden="true">
        {items.map((item) => {
          if (item.type === 'break') {
            return <br key={item.id} className="fold-text-break" />;
          }

          if (item.type === 'space') {
            return (
              <span key={item.id} className="fold-text-space">
                {item.text}
              </span>
            );
          }

          // If letter splitting
          if (item.letters && item.letters.length > 0) {
            return (
              <span
                key={item.id}
                className={`fold-text-word-wrap ${item.className || ''}`.trim()}
                style={item.style}
              >
                {item.letters.map((char, charIdx) => (
                  <span
                    key={`${item.id}-char-${charIdx}`}
                    className="fold-text-unit"
                    style={{ perspective: `${perspective}px` }}
                  >
                    <span className="fold-text-inner">
                      {char}
                      {creaseShading > 0 && <span className={shadeClass} />}
                    </span>
                  </span>
                ))}
              </span>
            );
          }

          // Word-level unit
          return (
            <span
              key={item.id}
              className={`fold-text-word-wrap ${item.className || ''}`.trim()}
              style={item.style}
            >
              <span className="fold-text-unit" style={{ perspective: `${perspective}px` }}>
                <span className="fold-text-inner">
                  {item.text}
                  {creaseShading > 0 && <span className={shadeClass} />}
                </span>
              </span>
            </span>
          );
        })}
      </span>
    </Component>
  );
};
