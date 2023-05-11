/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },

      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.4)",
      },

      scale: {
        "-100": "-1",
      },

      colors: {
        biege: "#E3CFCF",
        beige2: "#FFEBB4",
        cactus: "#6B7543",
        darkbiege: "#969575",
        green: "#87CBB9",
        softgreen: "#DCF7D8",
        pink: "#FFEAEA",
        pink2: "#F87777",
        blue: "#A6D0DD",
        brown: "#B0A4A4",
        brown2: "#493D3D",
        green2: "#BFCCB5",
        green3: "#67755A",
        cream: "#EDC6B1",
        gray: "#464141",
        brown3: "#9F8772",
        darkblue: "#393646",
        babyred: "#D3756B",
        ungu: "#5F264A",
        pinkwhite: "#E5D8D8",
        red: "#F05757",
        red2: "#F77B7B",
        darkred: "#B73E3E",
        redwhite: "#FEF1F1",
      },
    },
  },
  plugins: [],
};
