/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        cusred: '#FC4747',
        cusgrey: '#5A698F',
        cusdarkblue:'#161D2F',
        cusdark:'#10141E'
      }
    },
  },
  plugins: [],
}

