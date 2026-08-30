/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: '#181814',
          950: '#111110',
          900: '#181814',
          800: '#212019',
          700: '#2b2a22',
        },
        slate: {
          panel: '#211f1a',
          line: '#35342c',
        },
        bone: {
          DEFAULT: '#F3EEE2',
          dim: '#B9B4A6',
          faint: '#7c7969',
        },
        lime: {
          DEFAULT: '#CBFF4D',
          dim: '#9CC93B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
