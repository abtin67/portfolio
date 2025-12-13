/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- این خط خیلی مهم است
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // ... سایر مسیرها
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}