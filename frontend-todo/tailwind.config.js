/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mybg: '#313642',
        textColor:"#EC6C5D",
        mainText:"#feffff",
        secondBg:"#232323"
        },
        fontFamily:{
          logo:"'Chivo Mono', monospace;"
        }
    },
  },
  plugins: [],
}
