export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sol: {
          bg: '#080808',
          card: '#111111',
          border: '#1a1a1a',
          green: '#40916C',
          'green-dark': '#1B4332',
          'green-mid': '#2D6A4F',
          'green-light': '#D8F3DC',
          text: '#e0e0e0',
          sub: '#888888',
          dim: '#555555',
        }
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
}
