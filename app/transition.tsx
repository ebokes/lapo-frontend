"use client";

import { motion } from "framer-motion";

export function SlideRight({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}

export function ZoomIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.45 }}
    >
      {children}
    </motion.div>
  );
}
