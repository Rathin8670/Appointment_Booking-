/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':"rgb(29 78 216)",
        'primary-2':"rgb(34 211 238)"
      },

      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}

