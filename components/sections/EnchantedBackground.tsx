"use client";

import { useEffect, useMemo, useState } from "react";

type Firefly = {
  id: number;
  x: number;
  y: number;
  delay: string;
  duration: string;
};

type EnchantedBackgroundProps = {
  fireflies: Firefly[];
};

const leaves = [
  { left: "6%", top: "18%", size: "4.8rem", rotate: "18deg", speed: "5.8s" },
  { left: "86%", top: "13%", size: "5.2rem", rotate: "-32deg", speed: "6.4s" },
  { left: "2%", top: "68%", size: "6.4rem", rotate: "-18deg", speed: "7.1s" },
  { left: "82%", top: "66%", size: "6rem", rotate: "34deg", speed: "6.9s" },
  { left: "16%", top: "86%", size: "5.4rem", rotate: "12deg", speed: "8s" }
];

export function EnchantedBackground({ fireflies }: EnchantedBackgroundProps) {
  const [pointer, setPointer] = useState({ x: -100, y: -100 });

  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        x: `${4 + ((index * 17) % 92)}%`,
        y: `${44 + ((index * 29) % 50)}%`,
        delay: `${(index % 13) * -0.65}s`,
        duration: `${8 + (index % 8) * 0.9}s`
      })),
    []
  );

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div aria-hidden className="ambient-shell">
      <div className="ambient-image" />
      <div className="moon-glow" />
      {leaves.map((leaf, index) => (
        <span
          className="leaf"
          key={index}
          style={
            {
              left: leaf.left,
              top: leaf.top,
              "--leaf-size": leaf.size,
              "--leaf-rotate": leaf.rotate,
              "--leaf-speed": leaf.speed
            } as React.CSSProperties
          }
        />
      ))}
      {particles.map((particle) => (
        <span
          className="particle-wrap"
          key={particle.id}
          style={
            {
              "--x": particle.x,
              "--y": particle.y,
              "--delay": particle.delay,
              "--duration": particle.duration
            } as React.CSSProperties
          }
        >
          <span className="particle" />
        </span>
      ))}
      {fireflies.map((firefly) => {
        const dx = firefly.x - pointer.x;
        const dy = firefly.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        const force = distance < 18 ? (18 - distance) / 18 : 0;
        const offsetX = force ? (dx / Math.max(distance, 1)) * force * 28 : 0;
        const offsetY = force ? (dy / Math.max(distance, 1)) * force * 28 : 0;

        return (
          <span
            className="firefly-wrap"
            key={firefly.id}
            style={
              {
                "--x": `${firefly.x}%`,
                "--y": `${firefly.y}%`,
                "--delay": firefly.delay,
                "--duration": firefly.duration,
                transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`
              } as React.CSSProperties
            }
          >
            <span className="firefly" />
          </span>
        );
      })}
      <div className="mist" />
      <div className="water-reflection" />
      <div className="ambient-vignette" />
    </div>
  );
}
