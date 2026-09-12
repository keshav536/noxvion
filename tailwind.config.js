/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Central Blue-and-White Theme Tokens
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8FAFC',
        'navy': '#0A2540',
        'royal-blue': '#1E3A8A',
        'sky-blue': '#3B82F6',
        'light-blue-tint': '#EFF6FF',
        // NOXVION Design System Tokens
        'nox-base': '#FFFFFF',
        'nox-layer': '#F8FAFC',
        'nox-layer-high': '#EFF6FF',
        'nox-border': '#D9E7F5',
        'nox-border-dim': '#E2EDF8',
        'nox-border-active': '#BBD3F2',
        'nox-cyan': '#3B82F6',
        'nox-cyan-dim': '#1E3A8A',
        'nox-royal': '#1E3A8A',
        'nox-navy': '#0A2540',
        'nox-text': '#0A2540',
        'nox-text-muted': '#334E68',
        'nox-text-dim': '#627D98',
        // Surface tokens
        'surface': '#FFFFFF',
        'surface-dim': '#F8FAFC',
        'surface-container': '#EFF6FF',
        'surface-container-high': '#D9E7F5',
        'on-surface': '#0A2540',
        'on-surface-variant': '#334E68',
        'outline': '#D9E7F5',
        'outline-variant': '#BBD3F2',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '600' }],
        'display-md': ['48px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline-lg': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '500' }],
        'headline-md': ['24px', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '500' }],
        'label-caps': ['12px', { lineHeight: '1.2', letterSpacing: '0.1em', fontWeight: '600' }],
        'technical': ['13px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '400' }],
      },
      spacing: {
        '18': '72px',
        'desktop-margin': '64px',
        'mobile-margin': '20px',
        'gutter': '24px',
      },
      maxWidth: {
        'nox': '1440px',
        'content': '1200px',
      },
      borderRadius: {
        DEFAULT: '10px',
        'none': '0px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        'card': '16px',
        'button': '10px',
        'pill': '9999px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};

