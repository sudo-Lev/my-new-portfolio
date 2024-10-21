/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#853e96",
        primaryDark: "#58e6d9"
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);"
      }
    },
  },
  plugins: [],
};
