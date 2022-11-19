/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./components/**/*.{js,vue}', './pages/**/*.vue'],
  theme: {
    extend: {
      colors: {
        ribbon: '#FF2D32',
        og: '#FAD008',
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // css: ['@/assets/css/main.css'],
  plugins: [],
}
