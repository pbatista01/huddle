/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleCyan: 'hsl(193, 100%, 96%)',
        darkCyan: 'hsl(192, 100%, 9%)',
        grayBlue: 'hsl(208, 11%, 55%)',
        pink: 'hsl(322, 100%, 66%)',
    },
    backgroundImage: {
      'hero-mobile': "url('./src/images/bg-hero-mobile.svg')",
      'hero-desktop': "url('./src/images/bg-hero-desktop.svg')",
    },
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      base: '18px',
    },
    screens: {
      'lgplus': '1440px',
    },
  },
  plugins: [],
}
}
