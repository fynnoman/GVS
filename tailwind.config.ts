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
        // Very light, tech-neutral surface
        cloud: {
          50: "#F7F9FC",
          100: "#EEF2F8",
          200: "#E2E8F0",
          300: "#CBD5E1",
        },
        // Deep ink for text and dark surfaces
        ink: {
          950: "#0A121B",
          900: "#0F1B27",
          800: "#152534",
          700: "#1E3245",
          600: "#2A4258",
        },
        steel: {
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
        },
        // Neutral, dependable blue — the accent
        azure: {
          200: "#C6D9EE",
          300: "#9CBBDF",
          400: "#6796C8",
          500: "#3E74AF",
          600: "#2A5A93",
          700: "#1F4470",
          800: "#173252",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        "brand-tight": "-0.025em",
        "brand-loose": "0.14em",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.65) inset, 0 12px 40px -12px rgba(15,27,39,0.22)",
        card: "0 30px 80px -40px rgba(15,27,39,0.35)",
        soft: "0 1px 2px rgba(15,27,39,0.04), 0 8px 24px -12px rgba(15,27,39,0.15)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgba(30,50,82,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,50,82,0.06) 1px, transparent 1px)",
        radial:
          "radial-gradient(1200px 600px at 50% 0%, rgba(103,150,200,0.18), transparent 60%)",
      },
      backgroundSize: {
        gridsm: "48px 48px",
      },
    },
  },
  plugins: [],
};

export default config;
