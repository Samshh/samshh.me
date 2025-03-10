/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontFamily: {
        serif: "var(--font-main)",
        sans: "var(--font-sans)",
        special: "var(--font-special)",
      },
      animation: {
        "accordion-down":
          "accordion-down 0.35s ease-in-out",
        "accordion-up":
          "accordion-up 0.35s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
