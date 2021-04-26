module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/*.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto'],
        own: ['Varela Round'],
        contact: ['Inter']
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    border:['responsive', 'hover', 'focus', 'active'],
    animation:['responsive', 'hover', 'focus', 'active'],
    rotate:['responsive', 'hover', 'focus', 'active'] ,
    extend: {},
  },
  plugins: [],
}
