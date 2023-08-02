/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: ['hover'],
      scale: ['hover'],
      padding: ['hover'],
      colors: {
        "card-bg": "#282A36",
      },
    },
  },
  variants: {},
  plugins: [],
};

