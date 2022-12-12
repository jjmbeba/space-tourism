/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-mob':"url('/home/background-home-mobile.jpg')",
        'home-tab':"url('/home/background-home-tablet.jpg')",
        'home-desk':"url('/home/background-home-desk.jpg')"
      },
      fontFamily:{
        'barlow-condensed':'Barlow Condensed',
        'bellefair':'Bellefair',
        'barlow':'Barlow'
      },
      backgroundColor:{
        'menu':'rgba(255, 255, 255, 0.04)'
      },
      backdropBlur:{
        'menu':'40.7742px'
      }
    },
  },
  plugins: [],
}
