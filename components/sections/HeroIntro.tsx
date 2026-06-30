"use client";

import { ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

type HeroIntroProps = {
  ready: boolean;
};

export function HeroIntro({ ready }: HeroIntroProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center px-5 py-16 text-center">
      <motion.div
        className="absolute inset-0 z-0 bg-[#07150f]"
        animate={{ opacity: ready ? 0 : 1 }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 1.25 }}
          className="mb-6 inline-flex w-full items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-cream/88 sm:tracking-[0.22em]"
        >
          <Sparkles size={15} />
          <span>Convite Especial</span>
          <Sparkles size={15} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 2.25, ease: [0.22, 1, 0.36, 1] }}
          className="title-script w-full max-w-[21rem] text-[3.8rem] font-semibold leading-[0.9] text-ivory drop-shadow-[0_0_24px_rgba(199,165,91,0.22)] sm:max-w-none sm:text-8xl"
        >
          Olivia&apos;s
          <span className="mt-2 block text-[2.95rem] text-cream sm:text-7xl">Birthday</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 3.25 }}
          className="gold-line my-8 origin-center"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.7 }}
          className="mx-auto w-full max-w-xs text-sm font-light leading-7 text-cream/84 sm:max-w-md sm:text-base"
        >
          Uma noite encantada para celebrar os 19 anos da Olivia.
        </motion.p>
      </div>
      <motion.div
        className="scroll-cue absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-cream/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.55 }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
