/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out'
      },
      colors: {
        primary: {
          DEFAULT: '#5c2d9b',
          50: '#f4f1f9',
          100: '#e9e3f4',
          200: '#d3c7e8',
          300: '#bca9dc',
          400: '#a68bd1',
          500: '#8f6dc5',
          600: '#7850b9',
          700: '#5c2d9b', // Main primary color
          800: '#4a2479',
          900: '#391c57',
          950: '#27143b',
        },
        secondary: {
          DEFAULT: '#ffffff',
          50: '#ffffff',
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#e5e5e5',
          400: '#d4d4d4',
          500: '#a3a3a3',
          600: '#737373',
          700: '#525252',
          800: '#404040',
          900: '#262626',
          950: '#171717',
        },
        tertiary: {
          DEFAULT: '#453799',
          50: '#f1f1f9',
          100: '#e4e3f4',
          200: '#cccae9',
          300: '#ada8dd',
          400: '#8f88d2',
          500: '#7168c7',
          600: '#5a4fbc',
          700: '#453799', // Main tertiary color
          800: '#382c7a',
          900: '#2c225c',
          950: '#1d163d',
        },
      },
    },
  },
  plugins: [],
}