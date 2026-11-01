/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#050811',
          900: '#080D1B',
          800: '#10182D',
          700: '#17223D',
          600: '#212E52',
        },
        lavender: {
          soft: '#C8B7F0',
          glow: '#D8CCF6',
          deep: '#9D86D6',
        },
        moonlight: {
          silver: '#E6E8F0',
          pale: '#F4F5FA',
        },
        blush: {
          pink: '#F0BFD0',
          rose: '#E295AC',
          glow: '#FCE7F0',
        },
        warmWhite: '#FFF8F2',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['"Great Vibes"', 'cursive'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'moon-glow': '0 0 60px 15px rgba(200, 183, 240, 0.25), 0 0 100px 30px rgba(230, 232, 240, 0.15)',
        'moon-subtle': '0 0 35px 8px rgba(200, 183, 240, 0.18)',
        'card-glow': '0 10px 35px -10px rgba(16, 24, 45, 0.7), 0 0 20px 2px rgba(200, 183, 240, 0.08)',
        'letter-glow': '0 15px 45px rgba(8, 13, 27, 0.6), 0 0 30px rgba(240, 191, 208, 0.12)',
        'love-glow': '0 0 50px rgba(240, 191, 208, 0.4), 0 0 100px rgba(200, 183, 240, 0.2)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.025)' },
        },
        twinkle: {
          '0%': { opacity: '0.2', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

