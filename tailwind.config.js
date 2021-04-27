module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/*.html"],
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
