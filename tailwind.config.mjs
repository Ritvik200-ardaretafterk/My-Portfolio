/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Cheerful vibrant palette */
        primary:       '#FF6B2B',   // orange
        'primary-dark':'#E55A1A',
        secondary:     '#2563EB',   // blue
        'secondary-light': '#60A5FA',
        accent:        '#EF4444',   // red
        'accent-light':'#FCA5A5',
        amber:         '#F59E0B',
        cream:         '#FDF6EC',
        beige:         '#EDE0CC',
        dark:          '#0A0A14',
        darker:        '#05050C',
        'dark-card':   '#141428',
        'dark-surface':'#0F0F1F',
        green:         '#10B981',
      },
      animation: {
        'gradient':        'gradient-shift 8s linear infinite',
        'float':           'float-y 5s ease-in-out infinite',
        'glow':            'pulse-glow 2.5s ease-in-out infinite alternate',
        'ticker':          'ticker-run 30s linear infinite',
        'orbit':           'orbit-spin 8s linear infinite',
        'orbit-reverse':   'orbit-spin 12s linear infinite reverse',
        'spin-slow':       'spin 20s linear infinite',
        'bounce-slow':     'bounce 3s ease-in-out infinite',
        'ping-slow':       'ping 3s cubic-bezier(0,0,0.2,1) infinite',
        'shimmer':         'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%':       { 'background-position': '100% 50%' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-16px)' },
        },
        'pulse-glow': {
          '0%':   { boxShadow: '0 0 16px rgba(255,107,43,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(255,107,43,0.8)' },
        },
        'ticker-run': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'orbit-spin': {
          from: { transform: 'translate(-50%,-50%) rotate(0deg)' },
          to:   { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundSize: {
        '300%': '300%',
        '400%': '400%',
      },
    },
  },
  plugins: [],
}

export default config
