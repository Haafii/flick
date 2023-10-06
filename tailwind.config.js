/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('./public/images/bg.jpeg')",
        'bg-home-1': "url('./public/images/home-bg-1.jpeg')",
        'bg-home-2': "url('./public/images/home-bg-2.jpeg')",
      }
    },
  },
  plugins: [],
}