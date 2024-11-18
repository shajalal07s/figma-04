/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': '#222831',
        'dep-sky': '#7394c6',
        'text-color': '#00ADB5',
        'visiable': '#393E4680',
        'input': '#333842',
        'Social-icon': '#393E46',
        'color-white-dark': 'rgba(238, 238, 238, 0.1)',
        'color-gray-dark': 'rgba(57, 62, 70, 0.75)',
      },
      fontFamily : {
        'header': 'Poppins',
        'logo': 'oswald' 
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '40px',
        md: '50px',
      }
    }
  },
  plugins: [],
}