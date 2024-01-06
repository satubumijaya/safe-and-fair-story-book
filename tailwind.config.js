/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/css'],
  theme: {
    extend: {
      colors: {
        main: '#ff3a21',
        'main-dark': '#bd2c19',
      },
    },
  },
  plugins: [],
};
