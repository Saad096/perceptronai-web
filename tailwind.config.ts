import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#04060d",
          900: "#070a16",
          850: "#0a0f1f",
          800: "#0d1428",
          700: "#131b35",
          600: "#1b2545",
        },
        brand: {
          50: "#eef4ff",
          100: "#dae7ff",
          200: "#b9d0ff",
          300: "#8db0ff",
          400: "#5f87ff",
          500: "#3b66ff",
          600: "#2748ed",
          700: "#1f37c4",
          800: "#1e329b",
          900: "#1f307a",
        },
        accent: {
          cyan: "#22d3ee",
          violet: "#8b5cf6",
          mint: "#34d399",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 50px -10px rgba(99,102,241,0.45)",
        "glow-cyan": "0 0 60px -12px rgba(34,211,238,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.05), 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(59,102,255,0.18), transparent 55%), radial-gradient(ellipse at bottom, rgba(139,92,246,0.12), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both",
        marquee: "marquee 35s linear infinite",
        "pulse-glow": "pulse-glow 3.5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
