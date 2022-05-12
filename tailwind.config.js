module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito'],
        others: ['Poppins']
      },
      colors: {
        'secure-blue': '#2c6ff3',
        'secure-orange': '#e87536'
      },
      animation: {
        wiggle: 'wiggle 0.8s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        }
      }
    }
  },
  plugins: [],
}
