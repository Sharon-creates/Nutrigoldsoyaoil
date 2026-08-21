/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F5A800',
          light: '#FFD060',
          dark: '#E07800',
        },
        amber: '#E8860A',
        cream: '#FFFBF3',
        ivory: '#FFF3D0',
        green: {
          DEFAULT: '#2D7A4B',
          light: '#E8F5EE',
        },
        charcoal: '#1C1917',
        warm: '#78716C',
        border: '#E8D9B5',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-14px) rotate(1.5deg)' },
          '66%': { transform: 'translateY(-7px) rotate(-0.8deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(36px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        goldShimmer: {
          '0%': { backgroundPosition: '-200%' },
          '100%': { backgroundPosition: '200%' },
        },
      },
      animation: {
        float: '7s ease-in-out infinite float',
        floatSlow: '9s ease-in-out infinite floatSlow',
        fadeInUp: '0.8s ease-out forwards fadeInUp',
        goldShimmer: '4s linear infinite goldShimmer',
      },
    },
  },
  plugins: [],
}
