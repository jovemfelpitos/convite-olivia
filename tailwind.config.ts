import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: "#294D39",
        sage: "#8AA77A",
        cream: "#F7F2EA",
        ivory: "#FCFBF8",
        gold: "#C7A55B",
        umber: "#4B382A"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(199, 165, 91, 0.2)",
        card: "0 24px 70px rgba(9, 24, 18, 0.34)"
      }
    }
  },
  plugins: []
};

export default config;
