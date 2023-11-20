/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'c_primary': '#00A19B',
        'c_gray': '#F8F8F8',
        'c_gray_icon': '#A0AEC0',
        'c_black': '#0f1828',

      },

    },
  },
  plugins: [],
}

