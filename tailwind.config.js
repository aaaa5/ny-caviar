
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.font': {
          fontFamily: 'Oswald',
        },
        '.text_color_size': {
          fontSize : '0.9em',
          fontFamily: 'Oswald',
          color: '#6c572f',
        },
        '.text_product': {
          fontFamily:  'Open Sans',
          fontWeight: '400',
          fontSize: '24px',
        },
        '.margin_dift_box': {
          marginBottom: '5em',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })


  ],
}



