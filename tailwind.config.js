/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-120': 'linear-gradient(120deg, var(--tw-gradient-stops))',
      },
      scale: {
        '-100': '-1',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      blue: '#a0d4e2',
      aqua: '#5ce1e6',
      rose: '#c596a1',
      orange: '#d89561',
      grey: '#808080',
    },
    height: {
      '30v': '30vh',
      '45v': '50vh',
      '90v': '90vh',
    },
  },
  plugins: [],
};
