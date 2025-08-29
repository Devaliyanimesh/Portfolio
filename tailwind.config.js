// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 👈 Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#33ccff",
        accent: "#ffffff",
        black: "#000000",
        info:"#9C998E"
      },
    },
  },
  plugins: [],
}
