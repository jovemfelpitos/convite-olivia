"use client";

import { Moon } from "lucide-react";
import { Reveal } from "@/components/sections/Reveal";

export function Footer() {
  return (
    <footer className="relative px-5 pb-14 pt-12 text-center">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/38 bg-cream/10 text-cream shadow-glow">
          <Moon size={28} />
        </div>
        <p className="soft-text title-script text-3xl font-medium leading-tight text-cream sm:text-4xl">
          &quot;Os momentos mais mágicos são aqueles compartilhados com quem amamos.&quot;
        </p>
      </Reveal>
    </footer>
  );
}
