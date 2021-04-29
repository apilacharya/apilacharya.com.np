module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/*.html"],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0B1428',
      'secondary': '#BFCCE9',
      'danger': '#181F3F',
     }),
     borderColor: theme => ({
       ...theme('colors'),
       'danger': '#181F3F',
       'garden':'#00E4DB'
     }),
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        varela: ['Varela Round'],
        inter: ['Inter']
      },
    },
  },
  variants: {
    border:['responsive', 'hover', 'focus', 'active'],
    animation:['responsive', 'hover', 'focus', 'active'],
    rotate:['responsive', 'hover', 'focus', 'active'] ,
    extend: {},
  },
  plugins: [],
}
