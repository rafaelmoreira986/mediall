"use client";
import { motion, type TargetAndTransition } from "framer-motion";
import type { ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}

const animationVariants: Record<string, TargetAndTransition> = {
  fadeInUp: { opacity: 0, y: 40 },
  fadeInDown: { opacity: 0, y: -40 },
  fadeInLeft: { opacity: 0, x: -40 },
  fadeInRight: { opacity: 0, x: 40 },
  fadeIn: { opacity: 0 },
  zoomIn: { opacity: 0, scale: 0.8 },
};

export default function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const initial = animationVariants[animation] || animationVariants.fadeInUp;

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
