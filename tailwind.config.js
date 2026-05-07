/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf8ef',
        'slate-650': '#56616e',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 12px 35px rgba(6, 78, 59, 0.08)',
        soft: '0 18px 45px rgba(6, 78, 59, 0.16)',
        premium: '0 24px 70px rgba(6, 78, 59, 0.18)',
      },
    },
  },
  plugins: [],
};
