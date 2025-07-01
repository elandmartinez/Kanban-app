module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
    },
  },
  plugins: [],
}
