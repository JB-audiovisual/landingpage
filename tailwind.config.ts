import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#dae4f0',
          200: '#b8cce3',
          300: '#8badd1',
          400: '#5a89bb',
          500: '#3d6a9f',
          600: '#2d5280',
          700: '#1e3a5f',
          800: '#152a45',
          900: '#0f1f33',
          950: '#0a1525',
        },
        accent: {
          50: '#fdfbf3',
          100: '#faf4dc',
          200: '#f4e6b3',
          300: '#edd580',
          400: '#e5c04d',
          500: '#d4a527',
          600: '#b8891e',
          700: '#966c19',
          800: '#7a5618',
          900: '#654717',
          950: '#3a2709',
        },
        cyan: {
          50: '#f0f9fa',
          100: '#d9f0f3',
          200: '#b8e2e8',
          300: '#87cdd7',
          400: '#50b1c0',
          500: '#3495a4',
          600: '#2c798a',
          700: '#286271',
          800: '#27515d',
          900: '#24444f',
          950: '#132b34',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1e3a5f 0%, #2d5280 50%, #d4a527 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(102, 126, 234, 0.3)',
        'glow-lg': '0 0 60px rgba(102, 126, 234, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(102, 126, 234, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config
