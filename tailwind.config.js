/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── New Light Theme Tokens ──────────────────────────────────
        'warm-white':  '#FBFAF8',
        'near-black':  '#0B0D12',
        'blue-deep':   '#1E40AF',
        'blue-mid':    '#2563EB',
        'blue-bright': '#3B82F6',
        'blue-light':  '#93C5FD',
        'blue-pale':   '#DBEAFE',
        'blue-tint':   '#EFF6FF',
        'gray-body':   '#4B5563',
        'gray-muted':  '#6B7280',
        'gray-border': '#E5E7EB',

        // Legacy tokens kept for compatibility
        'white': '#FFFFFF',
        'off-white': '#F8FAFC',
        'navy': '#0A2540',
        'royal-blue': '#1E3A8A',
        'sky-blue': '#3B82F6',
        'sky-blue-hover': '#2563EB',
        'light-blue-tint': '#EFF6FF',
        'light-blue-soft': '#F0F7FF',
        'nox-text': '#0B0D12',
        'nox-text-muted': '#4B5563',
        'nox-royal': '#1E40AF',
        'accent': '#1E40AF',
        'accent-hover': '#3B82F6',
        'accent-soft': 'rgba(30,64,175,0.08)',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['ui-monospace', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display':     ['clamp(2.5rem,5.2vw,4.1rem)', { lineHeight: '0.97', letterSpacing: '-0.035em', fontWeight: '800' }],
        'display-md':  ['48px',  { lineHeight: '1.08', letterSpacing: '-0.03em', fontWeight: '700' }],
        'headline-lg': ['40px',  { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '700' }],
        'headline-md': ['24px',  { lineHeight: '1.35', letterSpacing: '-0.015em', fontWeight: '600' }],
        'label-caps':  ['11px',  { lineHeight: '1.2',  letterSpacing: '0.2em',   fontWeight: '600' }],
        'technical':   ['12px',  { lineHeight: '1.4',  letterSpacing: '0em',     fontWeight: '400' }],
      },
      spacing: {
        '18': '72px',
        'desktop-margin': '64px',
        'mobile-margin': '20px',
        'gutter': '24px',
      },
      maxWidth: {
        'nox': '1440px',
        'content': '1280px',
      },
      borderRadius: {
        DEFAULT: '12px',
        'none': '0px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        'card': '16px',
        'button': '12px',
        'pill': '9999px',
      },
      boxShadow: {
        'card':        '0 4px 24px rgba(11,13,18,0.06), 0 1px 4px rgba(11,13,18,0.04)',
        'card-hover':  '0 12px 40px rgba(30,64,175,0.12), 0 4px 12px rgba(11,13,18,0.06)',
        'glass':       '0 8px 32px rgba(30,64,175,0.10), 0 2px 8px rgba(11,13,18,0.06)',
        'nav':         '0 1px 24px rgba(11,13,18,0.08)',
        'button':      '0 4px 14px rgba(30,64,175,0.25)',
        // legacy
        'card-soft':   '0 4px 20px -2px rgba(10,37,64,0.05), 0 2px 6px -1px rgba(10,37,64,0.03)',
        'nav-scrolled':'0 4px 20px -2px rgba(10,37,64,0.06)',
      },
      animation: {
        'fade-up':  'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':  'fadeIn 0.5s ease-out forwards',
        'float':    'float 7s ease-in-out infinite',
        'float-card':'floatCard 4.5s ease-in-out infinite',
        'dot-pulse':'dotPulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(0.5deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-0.5deg)' },
        },
        floatCard: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
      },
    },
  },
  plugins: [],
};
