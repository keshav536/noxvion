/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Professional Light Blue & White Design System ──────────
        'white': '#FFFFFF',
        'off-white': '#F8FAFC',
        'navy': '#0A2540',
        'royal-blue': '#1E3A8A',
        'sky-blue': '#3B82F6',
        'sky-blue-hover': '#2563EB',
        'light-blue-tint': '#EFF6FF',
        'light-blue-soft': '#F0F7FF',

        // Token Mappings
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8FAFC',
        'nox-base': '#FFFFFF',
        'nox-layer': '#F8FAFC',
        'nox-layer-high': '#FFFFFF',
        'nox-border': 'rgba(10,37,64,0.08)',
        'nox-border-dim': 'rgba(10,37,64,0.04)',
        'nox-border-active': 'rgba(30,58,138,0.22)',
        'nox-cyan': '#3B82F6',
        'nox-cyan-dim': '#1E3A8A',
        'nox-royal': '#1E3A8A',
        'nox-navy': '#0A2540',
        'nox-text': '#0A2540',
        'nox-text-muted': '#4A6080',
        'nox-text-dim': '#64748B',

        // Surface tokens
        'surface': '#FFFFFF',
        'surface-dim': '#F8FAFC',
        'surface-container': '#FFFFFF',
        'surface-container-high': '#EFF6FF',
        'on-surface': '#0A2540',
        'on-surface-variant': '#4A6080',
        'outline': 'rgba(10,37,64,0.08)',
        'outline-variant': 'rgba(10,37,64,0.04)',

        // Semantic tokens
        'accent': '#1E3A8A',
        'accent-hover': '#3B82F6',
        'accent-soft': 'rgba(30,58,138,0.08)',
        'accent-glow': 'rgba(59,130,246,0.20)',
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
      boxShadow: {
        'card-soft': '0 4px 20px -2px rgba(10, 37, 64, 0.05), 0 2px 6px -1px rgba(10, 37, 64, 0.03)',
        'card-hover': '0 16px 32px -4px rgba(10, 37, 64, 0.08), 0 4px 12px -2px rgba(30, 58, 138, 0.06)',
        'nav-scrolled': '0 4px 20px -2px rgba(10, 37, 64, 0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
