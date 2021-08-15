module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '55vh': '55vh',
      },
      colors: {
        store: '#eaded7',
        price: '#ab7a5f',
      },
      height: {
        '1/2-screen': '50vh',
        '500px': '500px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
