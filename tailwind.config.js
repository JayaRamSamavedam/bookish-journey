/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', 
  theme: {

    container: {
      center: true,
    },
    extend: {
      keyframes: {
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          wiggle: 'wiggle 1s ease-in-out infinite',
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      backgroundImage: {
        "img":'url("./alternating-arrowhead.svg")',
        // 'sea1':'url("./him1.jpg")',
        // 'sea2':'url("./him2.jpg")',
        // 'sea3':'url("./him3.jpg")',
        // 'sea4':'url("./him4.jpg")',
        // // 'sea2': 'url("https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
        // // 'sea2': 'url("https://images.unsplash.com/photo-1524704654690-b56c05c78a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")',
        // // 'sea3': 'url("https://images.unsplash.com/photo-1503177847378-d2048487fa46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")',
        // "test-img":'url("./img.jpg")',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  content: [
    // ...
    'node_modules/flowbite-react/lib/esm/**/*.js'
]
};