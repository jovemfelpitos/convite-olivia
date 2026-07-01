"use client";

import Image from "next/image";
import { Reveal } from "@/components/sections/Reveal";
import { StorySilhouettes } from "@/components/sections/StorySilhouettes";

export function WelcomeStory() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden px-4 py-14 sm:px-5 sm:py-20">
      <StorySilhouettes variant="story" />
      <Reveal className="story-card-art-wrap relative z-10 mx-auto">
        <span className="sr-only">
          Há histórias que começam com um Era uma vez. Outras começam com um convite.
          E esta noite só estará completa com você. Olivia, 19 anos.
        </span>
        <Image
          alt=""
          className="story-card-art"
          draggable={false}
          height={1302}
          sizes="(max-width: 768px) 94vw, 42rem"
          src="/images/cartinha.png"
          unoptimized
          width={1024}
        />
      </Reveal>
    </section>
  );
}
