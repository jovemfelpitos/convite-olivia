"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type StorySilhouettesProps = {
  variant: "hero" | "story" | "invitation" | "details" | "rsvp";
};

type FireflySilhouetteProps = {
  className: string;
  delay?: number;
};

function FireflySilhouette({ className, delay = 0 }: FireflySilhouetteProps) {
  return (
    <motion.div
      aria-hidden
      className={`story-silhouette ${className}`}
      initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: [0, -8, 0], filter: "blur(0px)" }}
      transition={{
        opacity: { duration: 1.2, delay },
        filter: { duration: 1.2, delay },
        y: { duration: 8.5, delay, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className="real-firefly-scene">
        <Image
          alt=""
          draggable={false}
          height={1024}
          sizes="(max-width: 768px) 72vw, 25rem"
          src="/images/vagalumes.png"
          unoptimized
          width={1536}
        />
      </div>
    </motion.div>
  );
}

export function StorySilhouettes({ variant }: StorySilhouettesProps) {
  return (
    <div aria-hidden className={`story-silhouettes story-silhouettes-${variant}`}>
      {variant === "hero" && (
        <>
          <FireflySilhouette className="hero-frog" delay={3.15} />
          <FireflySilhouette className="hero-gown" delay={3.45} />
          <FireflySilhouette className="hero-musician" delay={3.65} />
          <FireflySilhouette className="hero-scrollwork" delay={3.8} />
        </>
      )}

      {variant === "story" && (
        <>
          <FireflySilhouette className="story-balcony" delay={0.15} />
          <FireflySilhouette className="story-firefly" delay={0.25} />
        </>
      )}

      {variant === "invitation" && (
        <>
          <FireflySilhouette className="invite-alligator" delay={0.1} />
          <FireflySilhouette className="invite-firefly" delay={0.24} />
        </>
      )}

      {variant === "details" && (
        <>
          <FireflySilhouette className="details-musician" delay={0.12} />
          <FireflySilhouette className="details-scrollwork" delay={0.22} />
        </>
      )}

      {variant === "rsvp" && (
        <FireflySilhouette className="rsvp-frog" delay={0.18} />
      )}
    </div>
  );
}
