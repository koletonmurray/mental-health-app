/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: {
          DEFAULT: '#2B4D59',
          50: '#E6F4F2',
          100: '#C0E3D9',
          200: '#96D2BF',
          300: '#6CB1A6',
          400: '#468F8B',
          500: '#2B4D59', // Default level
          600: '#1D3B45',
          700: '#122C33',
          800: '#0A1E23',
          900: '#031117',
        },
        lightgreen: {
          DEFAULT: '#39998E',
          50: '#E6F8F7',
          100: '#C0F0E9',
          200: '#96E8DB',
          300: '#6CE1CD',
          400: '#46D9BF',
          500: '#39998E', // Default level
          600: '#286E67',
          700: '#1B524E',
          800: '#103837',
          900: '#061F23',
        },
        lemon: {
          DEFAULT: '#FFDC7C',
          50: '#FFFBE6',
          100: '#FFF8C0',
          200: '#FFF496',
          300: '#FFF06C',
          400: '#FFEB46',
          500: '#FFDC7C', // Default level
          600: '#FFCD56',
          700: '#FFC03B',
          800: '#FFB324',
          900: '#FFA000',
        },
        peach: {
          DEFAULT: '#FFAA67',
          50: '#FFF1E6',
          100: '#FFDCC0',
          200: '#FFC696',
          300: '#FFB36C',
          400: '#FFA146',
          500: '#FFAA67', // Default level
          600: '#FF984D',
          700: '#FF8B36',
          800: '#FF7E1F',
          900: '#FF7211',
        },
        sunset: {
          DEFAULT: '#DA674A',
          50: '#FFE6E6',
          100: '#FFC0C0',
          200: '#FF9696',
          300: '#FF6C6C',
          400: '#FF4646',
          500: '#DA674A', // Default level
          600: '#FF3434',
          700: '#FF1F1F',
          800: '#FF0C0C',
          900: '#FF0000',
        },
      },
      screens: {
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
      },
    },
  },
  plugins: [],
};