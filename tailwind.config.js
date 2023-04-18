/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#3B0B0B",
        secondary: "#7B241C",
        tertiary: "#F1948A",
        highlight: "#FFC0CB",
        hoverbutton: "#C9695E",
        hovernav: "#300707",
        hovernavmobile: "#661B14",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        allura: ["Allura", "sans-serif"],
      },
      backgroundImage: {
        logo: "url('../src/assets/logo.jpg')",
        photo1: "url('../src/assets/photo1.JPG')",
        photo2: "url('../src/assets/photo2.jpg')",
      },
    },
  },
  plugins: [],
};
