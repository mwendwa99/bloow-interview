module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      avenir: ['Avenir', 'sans-serif'],
      caveat: ['Caveat', 'cursive'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'yellow50': '#FFFDE7',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}