/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        peach: {
          lightest: '#FFF0E5',
          light: '#FFE5D4',
          DEFAULT: '#FFDAB9',
          medium: '#FFCC99',
          dark: '#FFBD80',
          darker: '#FF9F57',
        },
        gold: {
          light: '#FFE17D',
          DEFAULT: '#FFD700',
          dark: '#E5C000',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};