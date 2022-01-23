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
        'sun': {
          DEFAULT: '#FFD762',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFF6DC',
          '300': '#FFECB4',
          '400': '#FFE18B',
          '500': '#FFD762',
          '600': '#FFC92A',
          '700': '#F1B300',
          '800': '#B98A00',
          '900': '#816000'
        },
        'cobalt': {
          DEFAULT: '#564CFF',
          '50': '#FFFFFF',
          '100': '#F0EFFF',
          '200': '#CAC6FF',
          '300': '#A39EFF',
          '400': '#7D75FF',
          '500': '#564CFF',
          '600': '#2114FF',
          '700': '#0C00DB',
          '800': '#0900A3',
          '900': '#06006B'
        },
        'mint': {
          DEFAULT: '#5EF69F',
          '50': '#FFFFFF',
          '100': '#F9FFFB',
          '200': '#D2FCE4',
          '300': '#ABFACD',
          '400': '#85F8B6',
          '500': '#5EF69F',
          '600': '#29F37F',
          '700': '#0CD863',
          '800': '#09A34B',
          '900': '#066D32'
        },
        'bermuda': {
          DEFAULT: '#64A2FF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#DEEBFF',
          '300': '#B6D3FF',
          '400': '#8DBAFF',
          '500': '#64A2FF',
          '600': '#2C80FF',
          '700': '#0061F3',
          '800': '#004BBB',
          '900': '#003483'
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
