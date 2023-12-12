/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.css", // Sesuaikan dengan pola pencarian tampilan AdonisJS Anda
    "./resources/**/*.edge", // Sesuaikan dengan lokasi file CSS Anda
    "./public/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('flowbite/plugin')
  ],
}

