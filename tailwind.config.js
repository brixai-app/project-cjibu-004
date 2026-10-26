export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#121212',
          surface: '#1A1A1A',
          'surface-hover': '#242424',
          border: '#2C2C2C',
          primary: '#EAEAEA',
          muted: '#A6A6A6',
          accent: '#D4AF37',
          'accent-hover': '#B8921F',
          'accent-text': '#000000',
        },
        bg: '#121212',
        surface: '#1A1A1A',
        'surface-hover': '#242424',
        accent: '#D4AF37',
        'accent-hover': '#B8921F',
      },
      fontFamily: {
        sans: ['Lora', 'sans-serif'],
        display: ['Playfair Display', 'sans-serif'],
      },
      borderRadius: {
        theme: '14px',
      },
    },
  },
  plugins: [],
};