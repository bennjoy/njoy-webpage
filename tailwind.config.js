/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'njoy-green': '#8bc34a', // The bright green from the logo
        'njoy-dark': '#2D2D2D', // Dark header/footer background
        'njoy-gray': '#6B7280', // Text gray
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'], // Clean modern font
        'poppins': ['Poppins', 'sans-serif'],
        'din-black': ['DIN Black', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}