"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StorySilhouettesProps = {
  variant: "hero" | "story" | "invitation" | "details" | "rsvp";
};

type SilhouetteProps = {
  className: string;
  delay?: number;
  children: ReactNode;
};

function Silhouette({ className, delay = 0, children }: SilhouetteProps) {
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
      {children}
    </motion.div>
  );
}

function CrownedFrog() {
  return (
    <svg viewBox="0 0 180 130" role="img">
      <path className="silhouette-fill sage" d="M25 88c27-22 88-23 129 0-29 17-94 20-129 0Z" />
      <path className="silhouette-fill forest" d="M62 64c4-24 20-36 43-33 21 3 35 18 34 42-1 22-19 34-40 34-23 0-41-15-37-43Z" />
      <path className="silhouette-fill forest" d="M43 67c5-20 19-27 35-19 9 5 10 18 2 27-11 13-31 7-37-8Z" />
      <path className="silhouette-fill forest" d="M122 50c16-9 31-3 36 17-6 15-26 21-37 8-8-9-8-21 1-25Z" />
      <path className="silhouette-fill gold" d="M82 30 90 9l12 18 14-16 2 25c-13-5-24-5-36-6Z" />
      <path className="silhouette-line" d="M55 92c26 11 65 10 93-1" />
      <path className="silhouette-line" d="M80 72c13 10 29 10 43 0" />
    </svg>
  );
}

function GownFigure() {
  return (
    <svg viewBox="0 0 150 220" role="img">
      <path className="silhouette-fill gold" d="M79 20c14 0 23 10 23 24 0 13-9 23-23 23-13 0-22-10-22-23 0-14 9-24 22-24Z" />
      <path className="silhouette-fill forest" d="M75 62c19 5 29 22 30 53 1 28 20 58 33 86H18c18-35 34-65 36-94 2-22 7-38 21-45Z" />
      <path className="silhouette-fill sage" d="M62 82c-15 11-28 29-36 49 16 2 31-6 44-25l8-19c-5-4-10-5-16-5Z" />
      <path className="silhouette-fill gold" d="M85 68c20 7 31 25 42 47-18 3-36-9-48-29 1-8 2-14 6-18Z" />
      <path className="silhouette-line" d="M48 184c22 9 57 10 83 1" />
      <path className="silhouette-line" d="M65 97c11 13 24 16 40 7" />
    </svg>
  );
}

function JazzMusician() {
  return (
    <svg viewBox="0 0 190 190" role="img">
      <path className="silhouette-fill forest" d="M48 53c13-16 38-20 55-10 15 10 16 30 4 42-14 14-41 11-55-3-9-9-11-20-4-29Z" />
      <path className="silhouette-fill gold" d="M32 48c30-19 70-24 100-5-21 6-74 11-100 5Z" />
      <path className="silhouette-fill forest" d="M65 88c23 7 37 27 39 58l-67 4c3-31 10-52 28-62Z" />
      <path className="silhouette-fill gold" d="M101 83c14 0 31 9 46 25l31-7-4 23-25-1c-22 8-43 0-57-18l9-22Z" />
      <path className="silhouette-line" d="M122 110c14 7 29 8 46 4" />
      <path className="silhouette-line" d="M50 151c18 8 38 7 59-1" />
      <path className="silhouette-fill sage" d="M143 103c8-9 29-13 36-6 6 7-7 18-31 24l-5-18Z" />
    </svg>
  );
}

function BayouAlligator() {
  return (
    <svg viewBox="0 0 240 130" role="img">
      <path className="silhouette-fill forest" d="M25 84c34-34 96-49 164-22l27-12c3 18-9 32-31 43-61 28-124 25-160-9Z" />
      <path className="silhouette-fill sage" d="M63 70c23-18 59-24 101-12-39 3-69 11-101 12Z" />
      <path className="silhouette-fill gold" d="M105 39c20-14 44-14 63 2-18 4-44 5-63-2Z" />
      <path className="silhouette-line" d="M47 88c47 18 97 19 146 0" />
      <path className="silhouette-line" d="M181 63c11 6 20 15 26 27" />
      <path className="silhouette-fill gold" d="M202 52c12-4 23-2 30 7-9 4-22 5-33 1l3-8Z" />
    </svg>
  );
}

function BalconyScrollwork() {
  return (
    <svg viewBox="0 0 260 170" role="img">
      <path className="silhouette-line scrollwork" d="M19 146h222M32 143V37h196v106M61 143V55M92 143V55M124 143V55M156 143V55M188 143V55M219 143V55" />
      <path className="silhouette-line scrollwork" d="M46 104c22-50 54-50 76 0 22-50 54-50 76 0" />
      <path className="silhouette-line scrollwork" d="M56 78c16 17 16 34 0 50M204 78c-16 17-16 34 0 50" />
      <path className="silhouette-line scrollwork" d="M81 94c14-20 32-20 46 0M134 94c14-20 32-20 46 0" />
    </svg>
  );
}

function FireflyTrail() {
  return (
    <svg viewBox="0 0 170 170" role="img">
      <path className="silhouette-line trail" d="M19 126c43-64 78 5 118-73" />
      <path className="silhouette-fill gold" d="M126 43c8-6 19-2 20 8 1 9-8 17-17 13-8-3-10-15-3-21Z" />
      <path className="silhouette-fill sage" d="M115 34c12 2 20 9 23 21-15-7-25-11-23-21Z" />
      <path className="silhouette-fill sage" d="M139 55c11-3 19 1 25 11-14 1-23-2-25-11Z" />
      <path className="silhouette-fill gold" d="M33 118c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7ZM73 102c3 0 6 3 6 6s-3 6-6 6-6-3-6-6 3-6 6-6Z" />
    </svg>
  );
}

export function StorySilhouettes({ variant }: StorySilhouettesProps) {
  return (
    <div aria-hidden className={`story-silhouettes story-silhouettes-${variant}`}>
      {variant === "hero" && (
        <>
          <Silhouette className="hero-frog" delay={3.15}>
            <CrownedFrog />
          </Silhouette>
          <Silhouette className="hero-gown" delay={3.45}>
            <GownFigure />
          </Silhouette>
          <Silhouette className="hero-musician" delay={3.65}>
            <JazzMusician />
          </Silhouette>
          <Silhouette className="hero-scrollwork" delay={3.8}>
            <BalconyScrollwork />
          </Silhouette>
        </>
      )}

      {variant === "story" && (
        <>
          <Silhouette className="story-balcony" delay={0.15}>
            <BalconyScrollwork />
          </Silhouette>
          <Silhouette className="story-firefly" delay={0.25}>
            <FireflyTrail />
          </Silhouette>
        </>
      )}

      {variant === "invitation" && (
        <>
          <Silhouette className="invite-alligator" delay={0.1}>
            <BayouAlligator />
          </Silhouette>
          <Silhouette className="invite-firefly" delay={0.24}>
            <FireflyTrail />
          </Silhouette>
        </>
      )}

      {variant === "details" && (
        <>
          <Silhouette className="details-musician" delay={0.12}>
            <JazzMusician />
          </Silhouette>
          <Silhouette className="details-scrollwork" delay={0.22}>
            <BalconyScrollwork />
          </Silhouette>
        </>
      )}

      {variant === "rsvp" && (
        <Silhouette className="rsvp-frog" delay={0.18}>
          <CrownedFrog />
        </Silhouette>
      )}
    </div>
  );
}
