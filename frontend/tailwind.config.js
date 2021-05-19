module.exports = {
  purge: [],
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      colors: {
        backgroundColor: '#212125',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
