"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const getOffset = () => {
    switch (direction) {
      case "up": return { y: 40, x: 0 };
      case "down": return { y: -40, x: 0 };
      case "left": return { x: 40, y: 0 };
      case "right": return { x: -40, y: 0 };
      default: return { y: 40, x: 0 };
    }
  };

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, delay }}
      variants={{
        hidden: { opacity: 0, ...getOffset() },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
