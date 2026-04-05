/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono:  ['Geist Mono', 'monospace'],
        sans:  ['Geist Mono', 'monospace'],
      },
      colors: {
        paper:  '#f5f2ec',
        paper2: '#ece9e1',
        ink:    '#0e0e0e',
        accent: {
          DEFAULT: '#c8401a',
          dark:    '#a8320e',
          2:       '#e8a020',
        },
        neutral: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      maxWidth: {
        content: '1100px',
      },
      keyframes: {
        scrollpulse: {
          '0%, 100%': { transform: 'scaleY(1)', opacity: '0.3' },
          '50%':      { transform: 'scaleY(0.5)', opacity: '1' },
        },
      },
      animation: {
        scrollpulse: 'scrollpulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
