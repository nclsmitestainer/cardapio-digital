/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: { default: '0 4px 4px rgba(0, 0, 0, .35)' },
      colors: {
        'bg-primary': '#161618',
        'bg-secondary': '#1e1e1f',
      },
      inset: { 'button-arrow': 'calc(50% - 36px) 0px 0px 8px' },
      height: { modal: '95vh' },
      width: { modal: '95vw' },
      flex: { '33': '1 1 33,3%' }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
