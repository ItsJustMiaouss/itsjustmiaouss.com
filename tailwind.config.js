module.exports = {
  purge: ['./pages/*.js', './components/*.js'],
  darkMode: false, // Or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        firacode: ['Fira Code'],
        poppins: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
