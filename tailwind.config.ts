import type { Config } from "tailwindcss";

/**
 * 2026-07 revamp: colors are now semantic tokens backed by CSS variables in
 * globals.css, so every component renders correctly in both the warm-linen
 * light theme and the violet-black dark theme. `brand` is a static iris
 * violet-indigo ramp used for gradient stops and glows only.
 */
const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--color-base-rgb) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--color-surface-rgb) / <alpha-value>)",
          2: "rgb(var(--color-surface-2-rgb) / <alpha-value>)",
        },
        ink: "rgb(var(--color-ink-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",
        brand: {
          50: "#F2F1FE",
          100: "#E6E4FD",
          200: "#CFCBFA",
          300: "#B0A9F6",
          400: "#9187F0",
          500: "#6E60EA",
          600: "#5B50E5",
          700: "#4A3FD0",
          800: "#3D35A8",
          900: "#332D85",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent-rgb) / <alpha-value>)",
          muted: "rgb(var(--color-accent-muted-rgb) / <alpha-value>)",
          sky: "rgb(var(--color-sky-rgb) / <alpha-value>)",
          violet: "#7A70F0",
          cyan: "#60AAF0",
          mint: "#3ECF8E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "var(--glow-accent)",
        card: "var(--shadow-card)",
        header: "var(--shadow-header)",
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
