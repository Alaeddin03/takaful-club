/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary_blue': '#375589',
        'dark_blue': '#193764',
        'primary_gray': '#787878',
        'light_gray': '#F8F8F8',
        'dark_gray': '#2c2c2c',
      },
    },
  },
  plugins: [],
}

