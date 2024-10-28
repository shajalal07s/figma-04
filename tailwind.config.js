/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': '#222831',
        'dep-sky': '#7394c6',
        'text-color': '#00ADB5',
        'visiable': '#393E4680',
        'input': '#333842',
        'Social-icon': '#393E46',
      },
      fontFamily : {
        'header': 'Poppins',
        'logo': 'oswald' 
      }
    },
  },
  plugins: [],
}