module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          light: '#FFFFFF',
          dark: '#242835',
          bg: '#242835e3',
        },
        red: {
          light: '#FF3131',
          dark: '#D10000',
        },
        green: {
          light: '#41AB00',
          dark: '#5EF800',
        },
        'grey-600': {
          dark: 'rgba(255, 255, 255, 0.6)',
        },
        'grey-300': {
          light: 'rgba(0, 0, 0, 0.3)',
          dark: 'rgba(255, 255, 255, 0.3)',
        },
        'grey-50': {
          light: 'rgba(0, 0, 0, 0.05)',
          dark: 'rgba(255, 255, 255, 0.05)',
        },
      },
    },
    fontFamily: {
      d2coding: ['D2 Coding'],
    },
    fontSize: {
      body: ['18px', '21px'],
      display: ['28px', '32px'],
    },
  },
  plugins: [],
};
