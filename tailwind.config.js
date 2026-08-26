/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // NOXVION Design System
        'nox-base': '#0A0A0B',
        'nox-layer': '#161618',
        'nox-layer-high': '#1C1C1E',
        'nox-border': '#262626',
        'nox-border-dim': '#1F1F1F',
        'nox-border-active': '#404040',
        'nox-cyan': '#00F0FF',
        'nox-cyan-dim': '#00C8D4',
        'nox-text': '#d4e4fa',
        'nox-text-muted': '#94A3B8',
        'nox-text-dim': '#64748B',
        // Surface tokens
        'surface': '#051424',
        'surface-dim': '#051424',
        'surface-container': '#122131',
        'surface-container-high': '#1c2b3c',
        'on-surface': '#d4e4fa',
        'on-surface-variant': '#c7c6ca',
        'outline': '#919094',
        'outline-variant': '#46464a',
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
        DEFAULT: '0px',
        'none': '0px',
        'sm': '2px',
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

