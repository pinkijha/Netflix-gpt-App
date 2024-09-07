/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      netflixRed: '#e50914',
      gray: '#464646',
      grayText: '#737373',
      bgInput: '#333333',

    },
  },
  },
  plugins: [],
}

