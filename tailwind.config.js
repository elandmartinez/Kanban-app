/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        black: "var(--black)",
        veryDarkGrey: "var(--very-dark-grey)",
        darkGrey: "var(--dark-grey)",
        linesDark: "var(--lines-dark)",
        mediumGrey: "var(--medium-grey)",
        linesLight: "var(--lines-light)",
        lightGrey: "var(--light-grey)",
        white: "var(--white)",

        mainPurple: "var(--main-purple)",
        mainPurpleHover: "var(--main-purple-hover)",

        red: "var(--red)",
        redHover: "var(--red-hover)"
      },
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
