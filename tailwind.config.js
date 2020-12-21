module.exports = {
  purge: {
    enabled: true,
    content: ['dist/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
