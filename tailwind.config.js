/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0C0C0C',
        'surface-alt': '#141414',
        'surface-raised': '#1C1C1C',
        'surface-border': '#2A2A2A',
        'text-primary': '#E0E0E0',
        'text-secondary': '#9A9A9A',
        accent: '#20C997',
        'accent-hover': '#1DB954',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['60px', { lineHeight: '60px', fontWeight: '400', letterSpacing: '-0.65px' }],
        'display-lg': ['36px', { lineHeight: '40px', fontWeight: '400', letterSpacing: '-0.9px' }],
        'display-md': ['24px', { lineHeight: '32px', fontWeight: '700', letterSpacing: '-0.6px' }],
        'display-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'eyebrow': ['14px', { lineHeight: '20px', fontWeight: '600', letterSpacing: '2.52px' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'code': ['13px', { lineHeight: '18px', fontWeight: '400' }],
        'button-md': ['16px', { lineHeight: '24px', fontWeight: '600' }],
      },
      borderRadius: {
        'card': '8px',
        'button': '6px',
        'chip': '4px',
        'pill': '9999px',
      },
      spacing: {
        'xxs': '2px',
        'xs': '4px',
      },
      borderWidth: {
        'hairline': '1px',
        'card-emph': '3px',
      },
    },
  },
  plugins: [],
}
