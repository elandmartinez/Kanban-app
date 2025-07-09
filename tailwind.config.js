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
        white: "var(--white)",

        veryDarkGrey: "var(--very-dark-grey)",
        darkGrey: "var(--dark-grey)",
        linesDark: "var(--lines-dark)",
        mediumGrey: "var(--medium-grey)",
        linesLight: "var(--lines-light)",
        lightGrey: "var(--light-grey)",
        bgWhiteHover: "var(--bg-white-hover)",

        /* light/dark colors */

        background: "var(--background)",
        backgroundSemi: "var(--background-semi)",
        mainTextColor: "var(--main-text-color)",
        secondaryTextColor: "var(--secondary-text-color)",
        linesColor: "var(--lines-color)",

        mainPurple: "var(--main-purple)",
        mainPurpleLight: "var(--main-purple-light)",
        mainPurpleShadow: "var(--main-purple-shadow)",

        red: "var(--red)",
        redHover: "var(--red-hover)"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
