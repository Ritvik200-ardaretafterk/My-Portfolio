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
        primary: '#D93644',
        secondary: '#D9832C',
        dark: '#33190F',
        darker: '#1A0D08',
        cream: '#F5F0E6',
        beige: '#EBE1D2',
        'tiger-orange': '#D9832C',
        'tiger-brown': '#8B5A2B',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(217, 54, 68, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(217, 131, 44, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
