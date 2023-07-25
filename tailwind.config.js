/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        // '2xl-max': { max: '1535px' },
        // 'xl-max': { max: '1279px' },
        // 'lg-max': { max: '1023px' },
        // 'md-max': { max: '767px' },
        // 'sm-max': { max: '639px' },
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
        soft: '#f0f0f0',
        primary: '#6527BE',
        secondary: '#A7EDE7',
        darker: '#1d1d23',
        dark: '#22222b',
        mid: '#282833',
        light: '#b1acbf',
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
