/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home':"url('/home/background-home-mobile.jpg')"
      },
      fontFamily:{
        'barlow-condensed':'Barlow Condensed',
        'bellefair':'Bellefair',
        'barlow':'Barlow'
      }
    },
  },
  plugins: [],
}
