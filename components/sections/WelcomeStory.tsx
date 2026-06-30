"use client";

import { Reveal } from "@/components/sections/Reveal";

export function WelcomeStory() {
  return (
    <section className="relative flex min-h-[92svh] items-center px-5 py-20">
      <Reveal className="mx-auto w-full max-w-2xl rounded-[8px] p-7 text-center sm:p-10 glass-panel">
        <p className="soft-text mx-auto max-w-xl text-lg font-light leading-9 text-cream/92 sm:text-xl">
          Há histórias que começam com um &quot;Era uma vez&quot;...
        </p>
        <p className="soft-text mx-auto mt-5 max-w-xl text-lg font-light leading-9 text-cream/92 sm:text-xl">
          Outras começam com um convite.
        </p>
        <p className="soft-text mx-auto mt-5 max-w-xl text-base leading-8 text-ivory/84 sm:text-lg">
          E esta noite só estará completa com você.
        </p>
        <div className="gold-line mx-auto my-8" />
        <h2 className="title-script text-6xl font-semibold leading-none text-ivory sm:text-7xl">
          Olivia
        </h2>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-gold">
          19 anos
        </p>
      </Reveal>
    </section>
  );
}
