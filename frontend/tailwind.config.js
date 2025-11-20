/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colori logo Meetdrip
        primary: {
          DEFAULT: '#FFD700', // Giallo-oro brillante
          dark: '#FFB800', // Giallo-oro più scuro
          light: '#FFE44D',
        },
        secondary: {
          DEFAULT: '#00BFFF', // Blu brillante
          dark: '#0099CC',
          light: '#33CCFF',
        },
        background: {
          DEFAULT: '#0F0F0F', // Sfondo scuro premium (grigio scuro invece di nero puro)
          card: '#1A1A1A',
          elevated: '#252525',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0F0F0F 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFB800 50%, #FFA500 100%)',
        'gradient-gold-subtle': 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 184, 0, 0.05) 100%)',
      },
      boxShadow: {
        'premium': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'premium-lg': '0 20px 60px 0 rgba(0, 0, 0, 0.5)',
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.1)',
        'glow-blue': '0 0 20px rgba(0, 191, 255, 0.3), 0 0 40px rgba(0, 191, 255, 0.1)',
        'inner-premium': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 215, 0, 0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}

