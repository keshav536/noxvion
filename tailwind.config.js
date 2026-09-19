/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── NOXVION Dark Design System ──────────────────────────────────
        // Backgrounds
        'bg-primary': '#000000',
        'bg-secondary': '#0A0A0A',
        'navy': '#000000',               // remapped: was #0A2540
        'royal-blue': '#3B82F6',         // remapped: was #1E3A8A
        'sky-blue': '#60A5FA',           // remapped: was #3B82F6
        'light-blue-tint': '#111827',    // remapped: was #EFF6FF

        // NOXVION Design Token Surface System
        'nox-base': '#000000',
        'nox-layer': '#0A0A0A',
        'nox-layer-high': '#111111',
        'nox-border': 'rgba(255,255,255,0.10)',
        'nox-border-dim': 'rgba(255,255,255,0.06)',
        'nox-border-active': 'rgba(255,255,255,0.22)',
        'nox-cyan': '#3B82F6',
        'nox-cyan-dim': '#1D4ED8',
        'nox-royal': '#1D4ED8',
        'nox-navy': '#000000',
        'nox-text': '#FFFFFF',
        'nox-text-muted': '#D4D4D8',
        'nox-text-dim': '#A1A1AA',

        // Surface tokens (dark)
        'surface': '#000000',
        'surface-dim': '#0A0A0A',
        'surface-container': '#111111',
        'surface-container-high': '#171717',
        'on-surface': '#FFFFFF',
        'on-surface-variant': '#D4D4D8',
        'outline': 'rgba(255,255,255,0.10)',
        'outline-variant': 'rgba(255,255,255,0.06)',

        // New semantic tokens
        'accent': '#3B82F6',
        'accent-hover': '#60A5FA',
        'accent-soft': 'rgba(59,130,246,0.14)',
        'accent-glow': 'rgba(59,130,246,0.32)',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display': ['64px', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-md': ['48px', { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '600' }],
        'headline-lg': ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '500' }],
        'label-caps': ['11px', { lineHeight: '1.2', letterSpacing: '0.12em', fontWeight: '600' }],
        'technical': ['12px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '400' }],
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
        'halo-breath': 'haloBreath 4s ease-in-out infinite',
        'word-up': 'wordUp 0.55s cubic-bezier(0.16,1,0.3,1) forwards',
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
        haloBreath: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(1.18)' },
        },
        wordUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
