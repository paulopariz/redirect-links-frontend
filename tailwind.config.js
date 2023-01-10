/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  
}
