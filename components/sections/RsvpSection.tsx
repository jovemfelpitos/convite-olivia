"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { sendRsvp } from "@/lib/rsvp";
import { Reveal } from "@/components/sections/Reveal";

type Firefly = {
  id: number;
  x: number;
  y: number;
  delay: string;
  duration: string;
};

type RsvpSectionProps = {
  fireflies: Firefly[];
};

export function RsvpSection({ fireflies }: RsvpSectionProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();

    if (!trimmedName) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await sendRsvp({ name: trimmedName });
      setStatus("success");
      setName("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative flex min-h-[95svh] items-center px-5 py-24">
      <Reveal className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-[8px] p-7 text-center sm:p-10 glass-panel">
        {status === "success" &&
          fireflies.map((firefly) => (
            <span
              aria-hidden
              className="firefly-wrap"
              key={firefly.id}
              style={
                {
                  "--x": `${firefly.x}%`,
                  "--y": `${firefly.y}%`,
                  "--delay": firefly.delay,
                  "--duration": firefly.duration
                } as React.CSSProperties
              }
            >
              <span className="firefly" />
            </span>
          ))}
        {status === "success" &&
          Array.from({ length: 22 }, (_, index) => (
            <motion.span
              aria-hidden
              className="absolute h-1.5 w-1.5 rounded-full bg-gold"
              initial={{ x: "50%", y: "50%", opacity: 0, scale: 0.6 }}
              animate={{
                x: `${18 + ((index * 23) % 64)}%`,
                y: `${14 + ((index * 31) % 58)}%`,
                opacity: [0, 0.95, 0],
                scale: [0.6, 1, 0.4]
              }}
              transition={{ duration: 1.8, delay: index * 0.025, ease: "easeOut" }}
              key={index}
            />
          ))}

        <div className="relative z-10">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/12 text-gold">
            <Sparkles size={22} />
          </div>
          <h2 className="title-script text-[2.18rem] font-semibold leading-[1.08] text-ivory sm:text-7xl">
            Você vem viver essa noite mágica comigo?
          </h2>
          <div className="gold-line mx-auto my-7" />

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-md"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-gold/15 text-gold">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-xl font-medium text-cream">Presença confirmada.</p>
              <p className="mt-3 text-sm leading-7 text-cream/82 sm:text-base">
                Estou ansiosa para viver essa noite mágica com você.
              </p>
              <button
                className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition hover:text-cream focus:outline-none focus:ring-2 focus:ring-gold/60"
                onClick={() => setStatus("idle")}
                type="button"
              >
                Confirmar outro nome
              </button>
            </motion.div>
          ) : (
            <form className="mx-auto mt-8 max-w-md text-left" onSubmit={handleSubmit}>
              <label className="text-xs font-semibold uppercase tracking-[0.18em] text-sage" htmlFor="name">
                Seu nome
              </label>
              <input
                className="mt-3 h-14 w-full rounded-[8px] border border-gold/34 bg-cream/95 px-4 text-base text-[#152318] outline-none transition placeholder:text-umber/46 focus:border-gold focus:ring-4 focus:ring-gold/18"
                id="name"
                name="name"
                onChange={(event) => {
                  setName(event.target.value);
                  if (status === "error") {
                    setStatus("idle");
                  }
                }}
                placeholder="Digite seu nome"
                type="text"
                value={name}
              />
              {status === "error" && (
                <p className="mt-3 text-sm leading-6 text-cream">
                  Não consegui confirmar agora. Verifique o nome e tente novamente.
                </p>
              )}
              <button
                className="mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold px-4 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.03em] text-[#152318] shadow-[0_0_42px_rgba(199,165,91,0.28)] transition duration-300 hover:bg-cream disabled:cursor-wait disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-cream/80 sm:gap-3 sm:px-6 sm:text-sm sm:tracking-[0.13em]"
                disabled={status === "sending"}
                type="submit"
              >
                <Send size={18} />
                {status === "sending" ? "Confirmando" : "Confirmar presença"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}
