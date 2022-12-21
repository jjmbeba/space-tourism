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
        'home-desk':"url('/home/background-home-desktop.jpg')",
        'dest-mob':"url('/destination/background-destination-mobile.jpg')",
        'dest-desk':"url('/destination/background-destination-desktop.jpg')",
        'dest-tab':"url('/destination/background-destination-tablet.jpg')",
        'crew-mob':"url('/crew/background-crew-mobile.jpg')",
        'crew-desk':"url('/crew/background-crew-desktop.jpg')",
        'crew-tab':"url('/crew/background-crew-tablet.jpg')",
        'tech-mob':"url('/technology/background-technology-mobile.jpg')",
        'tech-desk':"url('/technology/background-technology-desktop.jpg')",
        'tech-tab':"url('/technology/background-technology-tablet.jpg')",
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
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
