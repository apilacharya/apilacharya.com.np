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
