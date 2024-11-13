/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // Add .jsx extension
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BA482D', // Your logo's red color
        secondary: '#FFFFFF', // White color
      },
    },
  },
  plugins: [],
}
