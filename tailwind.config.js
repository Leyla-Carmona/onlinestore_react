/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auriculares': "url('../images/auriculares_inalambricos.jpg')",
        'smartphone': "url('../images/smarthpone')",
        'nintendo': "url('../images/consola_videojuegos.jpg')",
        'discoduro': "url('../images/disco_duro_externo.jpg')",
        'home': "url('../images/Website_Welcome.png')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61A3C9'
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61A3C9'
      }
    },
    plugins: [],
  }
}