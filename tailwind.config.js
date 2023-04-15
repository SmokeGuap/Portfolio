/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'dark-blue': '#010026',
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      },
    },
  },
  plugins: [],
};
