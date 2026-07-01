"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/sections/Reveal";
import { StorySilhouettes } from "@/components/sections/StorySilhouettes";

export function InvitationSection() {
  return (
    <section className="relative min-h-[96svh] overflow-hidden px-5 py-24">
      <StorySilhouettes variant="invitation" />
      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.04fr_0.96fr]">
        <Reveal>
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-cream/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cream/88">
              <Sparkles size={14} />
              <span>O convite</span>
            </div>
            <h2 className="title-script soft-text text-5xl font-semibold leading-[0.95] text-ivory sm:text-7xl">
              Entre luzes, magia e muitos sorrisos.
            </h2>
            <div className="gold-line my-7" />
            <p className="soft-text text-base font-light leading-8 text-cream/86 sm:text-lg">
              Quero dividir este momento com pessoas especiais.
            </p>
            <p className="soft-text mt-4 text-base font-light leading-8 text-cream/86 sm:text-lg">
              Você foi convidado para viver uma noite mágica comigo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="relative mx-auto h-[22rem] w-full max-w-sm">
            <motion.div
              className="lily-pad left-[8%] top-[56%] h-20 w-36"
              style={{ "--rotate": "-15deg" } as React.CSSProperties}
              animate={{ y: [0, -8, 0], rotate: [-15, -11, -15] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="lily-pad right-[4%] top-[38%] h-16 w-28"
              style={{ "--rotate": "18deg" } as React.CSSProperties}
              animate={{ y: [0, 6, 0], rotate: [18, 14, 18] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="flower-mark left-[18%] top-[49%]" />
            <span className="flower-mark right-[20%] top-[34%]" />
            <motion.div
              className="frog-silhouette absolute left-1/2 top-[48%] -translate-x-1/2"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-x-2 bottom-10 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="absolute inset-x-8 bottom-7 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
