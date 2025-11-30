/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--ink-soft) / <alpha-value>)",
        "ink-muted": "rgb(var(--ink-muted) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-100": "rgb(var(--surface-100) / <alpha-value>)",
        "surface-200": "rgb(var(--surface-200) / <alpha-value>)",
        border: "rgb(var(--border-color))",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accent2: "rgb(var(--accent2) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
        neutral: "rgb(var(--neutral) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.25)",
        glow: "0 0 0 1px rgba(34,211,238,0.4), 0 10px 30px rgba(34,211,238,0.2)"
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "28px"
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Instrument Sans"', "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
