/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#030712', // Ultra dark midnight
        surface: {
          DEFAULT: '#090d16',
          subtle: '#0f172a',
          card: '#0d1322',
          hover: '#131b2e',
        },
        brand: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          emerald: '#10b981',
          teal: '#14b8a6',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(6, 182, 212, 0.25)',
          muted: 'rgba(255, 255, 255, 0.04)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'card-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
