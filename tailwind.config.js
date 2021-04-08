
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      oswald1: ['Oswald', 'sans-serif'],
      serif: ['Open Sans', 'serif'],
    },
    fontSize:{
      title: '40px',
      normal: '24px',
      smoll: '12px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
    plugin(function({ addUtilities }) {
      const newUtilities = {
       
        '.amber_caviar': {
          fontSize : '0.9em',
          fontFamily: 'Oswald',
          color: '#6c572f',
        },
       
     
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })


  ],
}



