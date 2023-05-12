/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],

  plugins: [require("flowbite/plugin")],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000814",
        secondary: "#c0c0c0",
        tertiary: "#000038",
        "black-100": "#000023",
        "black-200": "#000042",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #222267",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
};
