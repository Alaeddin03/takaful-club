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
        'primary_gray': '#787878',
        'dark_blue': '#193764',
        'light_gray': '#F8F8F8',
        'dark_gray': '#2c2c2c',
      },
    },
  },
  daisyui: {
    themes: [
      {
        takafulTheme: {
          "primary": "#375589",
          "secondary": "#787878",
          "accent": "#193764",
          "neutral": "#2c2c2c",
          "base-100": "#434859",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}

