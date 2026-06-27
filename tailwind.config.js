/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "var(--bg-main)",
        cardBg: "var(--bg-card)",
        light: "var(--white)",
        primary: "var(--primary)",
        primaryGlow: "var(--primary-glow)",
        textMuted: "var(--text-muted)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
      backgroundImage: {
        circularDark:
          "repeating-radial-gradient(rgba(99, 32, 238, 0.15) 2px, var(--bg-main) 8px, var(--bg-main) 100px)",
        circularDarkLg:
          "repeating-radial-gradient(rgba(168, 85, 247, 0.12) 2px, var(--bg-main) 8px, var(--bg-main) 80px)",
        circularDarkMd:
          "repeating-radial-gradient(rgba(99, 32, 238, 0.1) 2px, var(--bg-main) 6px, var(--bg-main) 60px)",
        circularDarkSm:
          "repeating-radial-gradient(rgba(168, 85, 247, 0.1) 2px, var(--bg-main) 4px, var(--bg-main) 40px)",
      },
      boxShadow: {
        "3xl": "0 0 25px 2px rgba(168, 85, 247, 0.25)",
        neon: "0 0 15px rgba(99, 32, 238, 0.5)",
      },
    },
    screens: {
      // FIXED: Changed from max to min for proper responsive behavior
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
