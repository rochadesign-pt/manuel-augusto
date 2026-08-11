"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.25, 1, 0.5, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span";
  /** Animate on mount instead of on scroll-into-view (for above-the-fold content). */
  load?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  load = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  // With reduced motion, render content immediately visible (no reveal).
  if (reduce) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  // Above-the-fold content animates on mount so it can never get stuck
  // invisible when it sits in the viewport's excluded trigger margin.
  if (load) {
    return (
      <MotionTag
        className={className}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Container + item variants for staggered children. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
