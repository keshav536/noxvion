import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  /** How children stagger — in seconds */
  stagger?: number;
  /** Delay before first child animates */
  delay?: number;
  /** Y translation distance */
  distance?: number;
  /** Animate once or every time it enters view */
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
      delayChildren: 0,
    },
  }),
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(2px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * RevealSection — Framer Motion stagger wrapper.
 * Wrap children in <RevealItem> for individual stagger control.
 * Respects prefers-reduced-motion automatically via Framer.
 */
export const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className = '',
  stagger = 0.08,
  once = true,
}) => {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      custom={stagger}
    >
      {children}
    </motion.div>
  );
};

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * RevealItem — Individual stagger child for use inside RevealSection.
 */
export const RevealItem: React.FC<RevealItemProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const customVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(2px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
        delay,
      },
    },
  };

  return (
    <motion.div className={className} variants={delay ? customVariants : itemVariants}>
      {children}
    </motion.div>
  );
};
