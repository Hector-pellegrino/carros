/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#ed8525',
      'green': '#006971',
      'dark-green': '#004148',
      'off-white': 'rgba(255, 255, 255, 0.75)',
      'white': '#fff',
      'offwhitebg': '#f2f2f2'
    },
    fontFamily: {
      'shoulders': '"Big Shoulders Display"',
      "lexend": '"Lexend Deca"'
    }
  },
  plugins: [],
}