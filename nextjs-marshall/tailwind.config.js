/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1200px" }, // deixa o container mais compacto e premium
    },
    extend: {
      // ==== Cores semânticas do tema Marshall ====
      colors: {
        background: "#0B0B0B",
        foreground: "#F5F5F5",

        // Acento (dourado)
        primary: "#F5B301",
        "primary-foreground": "#0B0B0B",

        // Superfícies e bordas
        border: "rgba(255,255,255,0.10)",
        card: "rgba(255,255,255,0.05)",
        "card-foreground": "#F5F5F5",

        // Estado "muted" para fundos de seção leves
        muted: "rgba(255,255,255,0.06)",
        "muted-foreground": "rgba(255,255,255,0.70)",
      },

      // ==== Tipografia (ligadas às variáveis do next/font no layout) ====
      fontFamily: {
        heading: [
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        // opcional: manter alias "sans" para compatibilidade
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      // ==== Escala tipográfica premium ====
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // hero
        h1: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        h2: ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        h3: ["1.5rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.65" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },

      // ==== Sombras e raios ====
      boxShadow: {
        "inner-glow": "0 0 8px rgba(245, 179, 1, 0.5)", // brilho suave no acento
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
      borderRadius: {
        "2xl": "1.25rem", // um pouco mais arredondado que o default
      },
    },
  },
  plugins: [],
};
