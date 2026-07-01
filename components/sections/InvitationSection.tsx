"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
          <div className="relative mx-auto h-[20rem] w-full max-w-xl sm:h-[24rem] md:h-[26rem]">
            <motion.div
              className="real-frog-scene"
              animate={{ y: [0, -8, 0], scale: [1, 1.015, 1] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                alt="Sapinho encantado entre flores de vitoria-regia"
                draggable={false}
                height={1024}
                sizes="(max-width: 768px) 92vw, 38rem"
                src="/images/sapinho.png"
                unoptimized
                width={1536}
              />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
