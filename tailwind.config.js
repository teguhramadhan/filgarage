/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        bebas: ["var(--font-bebas-neue)"],
      },
      colors: {
        primary: "#E6212A", // Blue
      },
    },
  },
  plugins: [],
};
