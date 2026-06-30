"use client";

import { useEffect, useMemo, useState } from "react";
import { AudioToggle } from "@/components/sections/AudioToggle";
import { DetailsSection } from "@/components/sections/DetailsSection";
import { EnchantedBackground } from "@/components/sections/EnchantedBackground";
import { Footer } from "@/components/sections/Footer";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { InvitationSection } from "@/components/sections/InvitationSection";
import { RsvpSection } from "@/components/sections/RsvpSection";
import { WelcomeStory } from "@/components/sections/WelcomeStory";

export function OliviaExperience() {
  const [ready, setReady] = useState(false);
  const fireflies = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => ({
        id: index,
        x: 8 + ((index * 23) % 84),
        y: 8 + ((index * 37) % 82),
        delay: `${(index % 10) * -0.42}s`,
        duration: `${5.4 + (index % 7) * 0.7}s`
      })),
    []
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--deep)] text-ivory">
      <EnchantedBackground fireflies={fireflies} />
      <AudioToggle />
      <div className="relative z-10">
        <HeroIntro ready={ready} />
        <WelcomeStory />
        <InvitationSection />
        <DetailsSection />
        <RsvpSection fireflies={fireflies.slice(0, 12)} />
        <Footer />
      </div>
    </main>
  );
}
