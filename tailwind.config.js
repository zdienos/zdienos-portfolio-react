/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        signal: "rgb(var(--signal) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['"Archivo"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
