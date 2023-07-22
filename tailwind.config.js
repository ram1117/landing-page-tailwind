/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-120': 'linear-gradient(120deg, var(--tw-gradient-stops))',
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
      black:'#000000',
      blue: '#a0d4e2',
      rose: '#c596a1',
      orange: '#d89561',
    },
    height:{
      "45v":'50vh',
      "90v":'90vh'
    }
  },
  plugins: [],
};