/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hospital-blue': '#0055A5',
        'hospital-light': '#E5F2FF',
        'accent-orange': '#FF7A45',
      },
      fontSize: {
        senior: '1.125rem', // Larger text for senior citizens
      },
    },
  },
  plugins: [],
}
