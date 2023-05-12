/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
theme: {
    fontFamily: {
      sans: ['Satoshi-Variable']
      // body: ["Satoshi-Regular"],
    },
    // typography: (theme) => ({
    //   default: {
    //     css: {
    //       // color: theme("colors.black"),
    //       // fontSize: "1rem",
    //       fontFamily: "Satoshi-Regular"
    //     },
    //   },
    // }),
  },
  plugins: [require("@tailwindcss/typography")],
};
