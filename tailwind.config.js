export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#121212',
          surface: '#1E1E1E',
          'surface-hover': '#262626',
          border: '#2E2E2E',
          primary: '#F5F5F5',
          muted: '#B7B7B7',
          accent: '#0077FF',
          'accent-hover': '#0A5ED6',
          'accent-text': '#000000',
        },
        bg: '#121212',
        surface: '#1E1E1E',
        'surface-hover': '#262626',
        accent: '#0077FF',
        'accent-hover': '#0A5ED6',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif'],
        display: ['Lora', 'sans-serif'],
      },
      borderRadius: {
        theme: '14px',
      },
    },
  },
  plugins: [],
};