import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette extraite du mockup NL Hair
        bg: "#F6EEE8", // crème principal
        "bg-soft": "#FBF6F1", // crème clair (cartes / sections)
        taupe: "#E9D6CE", // bloc rosé / taupe clair
        "taupe-deep": "#D9BFB4", // taupe soutenu
        ink: "#2B2320", // texte principal (brun profond)
        "ink-soft": "#6B5E56", // texte secondaire / muted
        gold: "#B8834F", // doré accent (thème PWA)
        "gold-light": "#CBA16B", // doré clair (hover / dégradés)
        "gold-deep": "#9A6A3A", // doré profond (texte sur clair)
        line: "#E3D7CD", // filets / bordures
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        body: ["var(--font-body)", "Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
