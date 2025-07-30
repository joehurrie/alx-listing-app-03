/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['"Quicksand"', "sans-serif"],
        sourceSans: ['"Source Sans 3"', "sans-serif"],
    },
  },
  },
  plugins: [],
}
