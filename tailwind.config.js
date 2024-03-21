/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#0ea5ea',
        'light-blue': '#1CC2E7',
        'turquoise': '#0bd1d1',
        'misty-blue': '#94A9C9',
        'midnight-navy': '#0F172A',
      },
    },
    fontFamily: {
      'pacifico': ['Pacifico', "Arial"],
      'quicksand-bold': ["Quicksand_Bold"],
      'quicksand-book': ["Quicksand_Book"],
      'quicksand-dash': ["Quicksand_Dash"],
      'quicksand-light': ["Quicksand_Light"],
    }
  },
  plugins: [],
}

