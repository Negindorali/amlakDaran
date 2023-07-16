/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
  ],
  theme: {
    colors:{
      'light-dark':'#1B222E',
      'blue':'#2B62C7',
      'light-grey':'#45536D',
      'disable-grey':'#6D7D9C',
      'green-success':'#4CAF50',
      'red':'#FF4A4A',
      'light-blue':'#DAE6FB',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

