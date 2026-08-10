"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Subtle cross-page fade. Opacity-only on purpose — a transform here would
 * break `position: sticky` descendants.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: reduce ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
