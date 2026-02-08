/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        terracota: 'rgb(137, 46, 32)',
        'terracota-light': 'rgba(137, 46, 32, 0.1)',
        'terracota-overlay': 'rgba(137, 46, 32, 0.7)',
        amarillo: 'rgb(255, 234, 0)',
        'amarillo-soft': 'rgba(255, 234, 0, 0.2)',
        'warm-white': '#FAF7F2',
        'beige-light': '#F5F1EB',
        'gray-warm': '#8B8578',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      minHeight: {
        'section': '70vh',
      },
    },
  },
  plugins: [],
};
