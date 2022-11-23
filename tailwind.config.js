/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        xl: '1170px',
        '2xl': '1170px',
      },
    },
    extend: {
      colors: {
        'main': '#EC7644',
        'darker': '#212121',
      },

    },
  },
  plugins: [],
}