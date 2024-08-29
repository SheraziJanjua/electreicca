/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ipad: "920px",
      },
      colors: {
        maroon: "#6F263D",
      },
    },
  },
  plugins: [],
};
