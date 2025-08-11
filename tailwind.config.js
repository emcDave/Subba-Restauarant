/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4338CA', // Indigo-700
        secondary: '#F59E0B', // Amber-500
        accent: '#6D28D9', // Purple-700
        muted: '#6B7280', // Gray-500
      },
    },
  },
  plugins: [],
}
