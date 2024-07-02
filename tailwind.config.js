/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#f0f2f5',
      },
      maxHeight: {
        'custom-max-height': 'min((100vh - 96px) - 60px,734px)'
      }
    },
  },
  plugins: [],
}