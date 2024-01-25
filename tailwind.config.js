/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1E6F9F',
        blue: '#4EA8DE',
        'purple-dark': '#5E60CE',
        purple: '#8284FA',
        gray: {
          700: '#0D0D0D',
          600: '#1A1A1A',
          500: '#262626',
          400: '#333333',
          300: '#808080',
          200: '#D9D9D9',
          100: '#F2F2F2',
        },
        danger: '#E25858',
      },
      lineHeight: {
        14: '1.4',
      },
    },
    fontFamily: {
      sans: 'Inter',
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
