const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"'],
        poppins: ['"Poppins"'],
      },
      colors: {
        orange: colors.orange,
        'sun': '#FFD762',
        'cobalt': '#564CFF',
        'bermuda': '#64A2FF',
        'mint': '5EF69F',
      }
    },
  },
  plugins: [],
};
