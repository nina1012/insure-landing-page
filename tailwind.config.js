module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        xl: '1440px'
      },
      colors: {
        // primary
        'dark-violet': 'hsl(256,26%,20%)',
        'grayish-blue': 'hsl(216,30%,68%)',

        // neutral
        'very-dark-violet': 'hsl(270,9%,17%)',
        'dark-grayish-violet': 'hsl(273,4%,51%)',
        'very-light-gray': 'hsl(0,0%,98%)'
      },
      spacing: {
        '25': '25rem'
      },

      fontFamily: {
        sans: ['Karla'],
        serif: ['DM Serif Display']
      },
      fontSize: {
        'h1-size': '2.8rem'
      },
      inset: {
        '10': '10%',
        '12': '-12%',
        '20': '20%',
        '65': '-65%',
        '1/2': '85%'
      },
      zIndex: {
        '-1': '-1'
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
};
