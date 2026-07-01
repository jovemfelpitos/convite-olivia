"use client";

import Image from "next/image";
import { MapPin, Route } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/sections/Reveal";
import { StorySilhouettes } from "@/components/sections/StorySilhouettes";

const locationDetails = [
  {
    icon: MapPin,
    label: "Local",
    value: "Rua Joaquim da Silva Frade, 128"
  },
  {
    icon: MapPin,
    label: "Bairro",
    value: "Parque Renato Maia, Guarulhos"
  }
];

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Rua%20Joaquim%20da%20Silva%20Frade%2C%20128%2C%20Parque%20Renato%20Maia%2C%20Guarulhos";

export function DetailsSection() {
  return (
    <section className="relative overflow-hidden px-5 py-24">
      <StorySilhouettes variant="details" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-gold">
            Detalhes
          </p>
          <h2 className="title-script soft-text text-5xl font-semibold leading-none text-ivory sm:text-7xl">
            A noite encantada
          </h2>
          <div className="gold-line mx-auto my-7" />
        </Reveal>

        <Reveal className="date-time-scene-wrap mt-10" delay={0.08}>
          <motion.div
            className="date-time-scene"
            initial={{ opacity: 0.92 }}
            whileHover={{ y: -3, scale: 1.006 }}
            transition={{ duration: 0.35 }}
          >
            <span className="sr-only">
              Data: 04 de Julho de 2026. Horário: 20:00.
            </span>
            <Image
              alt=""
              className="date-time-scene-image"
              draggable={false}
              height={1024}
              sizes="(max-width: 768px) 94vw, 52rem"
              src="/images/date-time-scene.png"
              unoptimized
              width={1536}
            />
          </motion.div>
        </Reveal>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {locationDetails.map((detail, index) => {
            const Icon = detail.icon;

            return (
              <Reveal delay={0.16 + index * 0.08} key={detail.label}>
                <motion.div
                  className="detail-card flex h-full items-start gap-4 rounded-[8px] p-5 glass-panel"
                  whileHover={{ y: -4, borderColor: "rgba(199, 165, 91, 0.72)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/12 text-gold">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                      {detail.label}
                    </p>
                    <p className="mt-2 text-base leading-7 text-cream sm:text-lg">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 flex justify-center" delay={0.18}>
          <a
            className="inline-flex min-h-14 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#152318] shadow-[0_0_42px_rgba(199,165,91,0.28)] transition duration-300 hover:bg-cream focus:outline-none focus:ring-2 focus:ring-cream/80 sm:tracking-[0.14em]"
            href={mapsUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Route size={19} />
            Como chegar
          </a>
        </Reveal>
      </div>
    </section>
  );
}
