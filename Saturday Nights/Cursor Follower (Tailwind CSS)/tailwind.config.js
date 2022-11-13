/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        'cursor-fill':'rgb(138,175,255)',
      },
      animation: {
        'spin-slow' : 'spin 4s linear infinite'
      },
      transitionProperty: {
        'cursor-follower' : 'top 1s, left 1s'
      }
    },
  },
  plugins: [],
}
