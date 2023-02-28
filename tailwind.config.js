/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      'LimeGreen': 'hsl(136, 65%, 51%)',
      'BrightCyan': 'hsl(192, 70%, 51%)',
      'DarkBlue': 'hsl(233, 26%, 24%)',
      'GrayishBlue': 'hsl(233, 8%, 62%)',
      'LightGrayishBlue': 'hsl(220, 16%, 96%)',
      'VeryLightGray': 'hsl(0, 0%, 98%)',
      'White': 'hsl(0, 0%, 100%)'
    },
    extend: {
      backgroundImage: {
        'hero-section-desktop': "url(/images/bg-intro-desktop.svg)",
        'hero-section-mobile' : 'url(/images/bg-intro-mobile.svg)',
      }
    },
  },
  plugins: [],
}
