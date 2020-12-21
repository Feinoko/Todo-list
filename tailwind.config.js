module.exports = {
  purge: {
    enabled: true,
    content: ['dist/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      lg: '0 10px 15px 2px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
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
