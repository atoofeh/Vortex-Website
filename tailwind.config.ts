import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1F050C",
        wine: "#2D0812",
        burgundy: "#3B0D18",
        panel: "#42111E",
        line: "rgba(212, 175, 55, 0.2)",
        gold: "#D4AF37",
        champagne: "#E5C378",
        cream: "#FDFCFA",
        ivory: "#F8F4EC",
        muted: "#C8B89A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 50px rgba(212, 175, 55, 0.25)",
        gold: "0 0 25px rgba(229, 195, 120, 0.35)",
        wine: "0 20px 50px rgba(31, 5, 12, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
