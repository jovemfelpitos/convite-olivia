"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [available, setAvailable] = useState(true);

  async function toggleAudio() {
    if (!audioRef.current) {
      return;
    }

    if (enabled) {
      audioRef.current.pause();
      setEnabled(false);
      return;
    }

    try {
      await audioRef.current.play();
      setEnabled(true);
    } catch {
      setAvailable(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="none" src="/audio/magia.mp3" />
      <button
        aria-label={enabled ? "Desativar magia" : "Ativar magia"}
        className="fixed bottom-4 left-4 z-30 inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/45 bg-[rgba(7,21,15,0.68)] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-ivory shadow-glow backdrop-blur transition duration-300 hover:border-gold hover:bg-[rgba(41,77,57,0.76)] focus:outline-none focus:ring-2 focus:ring-gold/70 sm:bottom-6 sm:left-auto sm:right-6"
        onClick={toggleAudio}
        title={available ? "Ativar magia" : "Adicione public/audio/magia.mp3"}
        type="button"
      >
        {enabled ? <VolumeX size={16} /> : <Volume2 size={16} />}
        <span>{enabled ? "Silenciar" : "Ativar magia"}</span>
      </button>
    </>
  );
}
