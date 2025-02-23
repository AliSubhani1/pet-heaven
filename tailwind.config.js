/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bounce: 'bounce 0.5s ease-in-out',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        fieldwork: ['Fieldwork', 'sans-serif'],
      },
      lineHeight: {
        110: '1.1',
        120: '1.2',
      },
      boxShadow: {
        '3xl': '0px 0px 5px 0px #0000001A',
      },
    },
    colors: {
      white: {
        0: '#ffffff',
        1: 'F5F5F5',
      },
      green: {
        0: '#2E9C3F',
      },
      red: {
        0: '#D81B39',
      },
      yellow: {
        0: '#F7A009',
        1: '#FCEED5',
      },
      black: {
        0: '#000000',
      },
      gray: {
        0: '#EBEEEF',
        1: '#667479',
        2: '#99A2A5',
        3: '#F6F6F6',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
  },
  plugins: [],
};
