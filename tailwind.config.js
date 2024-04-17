/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        1: '#AC6AFF',
        2: '#FFC876',
        3: '#FF776F',
        4: '#7ABD78',
        5: '#858DFF',
        6: '#FF98E2',
        mine: ' rgba(36, 36, 36, 0.808)',
        mine2: ' rgb(20, 28, 29)',
        my: ' rgb(14, 20, 21,0.7)',
      }
    },
  },
  plugins: [],
}
