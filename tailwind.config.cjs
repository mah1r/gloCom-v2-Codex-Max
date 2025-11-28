/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        "ink-soft": "#1E293B",
        "ink-muted": "#334155",
        surface: "#0B1224",
        "surface-100": "#0F182E",
        "surface-200": "#131C34",
        "glass": "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
        accent: "#22D3EE",
        accent2: "#F97316",
        success: "#22C55E",
        warning: "#FACC15",
        danger: "#EF4444",
        neutral: "#94A3B8"
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
