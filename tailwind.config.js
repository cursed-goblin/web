/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0a0e1a",
          800: "#0d1220",
          700: "#131826",
          600: "#1a2133",
        },
        accent: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px rgba(37, 99, 235, 0.35)",
        "glow-sm": "0 0 22px rgba(37, 99, 235, 0.28)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(30px, -24px, 0) scale(1.08)" },
        },
        driftAlt: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(-28px, 22px, 0) scale(1.1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "drift-slow": "drift 20s ease-in-out infinite",
        "drift-slower": "driftAlt 28s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
