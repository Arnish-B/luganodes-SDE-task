/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: ["hover"],
      scale: ["hover"],
      padding: ["hover"],
      colors: {
        "card-bg": "#282A36",
        "color-b1": "rgb(0, 28, 48)",
        "color-b2": "rgb(23, 107, 135)",
        "color-b3": "rgb(100, 204, 197)",
        "color-b4": "rgb(218, 255, 251)",
      },
    },
  },
  variants: {},
  plugins: [],
};

