import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          "50": "#F0F4F8",
          "100": "#D9E2EC",
          "200": "#BCCCDC",
          "300": "#9FB3C8",
          "400": "#829AB1",
          "500": "#627D98",
          "600": "#486581",
          "700": "#334E68",
          "800": "#243B53",
          "900": "#0A1628",
        },
        burgundy: {
          "50": "#FDF2F4",
          "100": "#FCE7EB",
          "200": "#F9CFD8",
          "300": "#F4A6B5",
          "400": "#ED7489",
          "500": "#E04560",
          "600": "#C92A47",
          "700": "#8B2635",
          "800": "#6B1E29",
          "900": "#4A1419",
        },
        charcoal: "#1A1F36",
        slate: "#64748B",
        offwhite: "#FAFBFC",
        border: "#E2E8F0",
      },
      maxWidth: {
        "content": "1200px",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      boxShadow: {
        "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "DEFAULT": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "h1": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "h2": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h3": ["1.875rem", { lineHeight: "1.3", letterSpacing: "0", fontWeight: "600" }],
        "h4": ["1.5rem", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", letterSpacing: "0" }],
        "body": ["1rem", { lineHeight: "1.6", letterSpacing: "0" }],
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
