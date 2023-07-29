/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    extend: {
      screens: {
        // '2xl-max': { max: '1535px' },
        // 'xl-max': { max: '1279px' },
        // 'lg-max': { max: '1023px' },
        // 'md-max': { max: '767px' },
        // 'sm-max': { max: '639px' },
      },

      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },

      // Makes the container "fluid" when screen is smaller than 768px
      container: {
        screens: {
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },

      colors: {
        'primary-light': '#004e95',
        primary: '#013a6b',

        secondary: '#76d6ce',
        'secondary-light': '#A7EDE7',

        dark: '#282833',
        darker: '#22222b',
        darkest: '#1d1d23',

        light: '#a49dbf',
        lighter: '#d7d3e6',
        lightest: '#ffffff',
      },

      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
