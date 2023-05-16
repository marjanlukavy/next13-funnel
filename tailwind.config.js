/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        aside: "1px 0px 0px #2D3232",
      },
      colors: {
        step: "rgba(255, 255, 255, 0.3)",
        subTitleBlue: "rgba(43, 140, 229, 1)",
        inputDark: "rgba(255, 255, 255, 0.1)",
        backButton: "rgba(250, 250, 250, 0.1)",
        whiteTint: "#FAFAFA",
        dark: "#101313",
        lightBlue: "rgba(33, 122, 255, 0.1)",
        whiteSmoke: "rgba(250, 250, 250, 0.1)",
        placeholderGray: "rgba(255, 255, 255, 0.3);",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
