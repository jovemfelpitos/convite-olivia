"use client";

import { motion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      variants={{
        ...revealVariants,
        visible: {
          ...revealVariants.visible,
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
