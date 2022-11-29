/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    transitionDuration: {
      DEFAULT: '300ms',
    },
    container: {
      screens: {
        xl: '1170px',
        '2xl': '1170px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '0',
        xl: '0',
        '2xl': '0',
      },
    },
    extend: {
      colors: {
        main: '#EC7644',
        darker: '#212121',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
