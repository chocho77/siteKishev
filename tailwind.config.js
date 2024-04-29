/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto':['Roboto'],
        'golos': ['Golos Text','sans-serif'],
      }
    },
  },
  plugins: [],
}

