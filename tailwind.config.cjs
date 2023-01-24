/** @type {import('tailwindcss').Config} */ 
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      fontFamily: {
        ptSans: "'PT Sans', sans-serif",
        openSans: "'Open Sans', sans-serif",
      },
      fontSize: {
        sm: ['0.875rem', '1.25rem'],
        base: ['1rem', '1.5rem'],
        lg: ['1.125rem', '1.75rem'],
        xl: ['1.25rem', '1.75rem'],
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['34px', '48px'],
        '4xl': ['2.25rem', '2.5rem'],
        '8xl': ['6rem', '100px'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      gridTemplateColumns: {
        '12': 'repeat(12, 1fr);',
        '8': 'repeat(8, 1fr);',
        '4': 'repeat(4, 1fr);',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '960px',
        xl: '1440px',
      },
      extend: {
        colors: {
          white: '#E5E8E8',
          pewter: '#8D9797',
          gray: '#4E545C',
          jet: '#000401',
        },
        keyframes: {
          slideRight: {
            '0%': {transform: 'translateX(-60%)', opacity: 0},
            '100%': {transform: 'translateX(0%)', opacity: 1},
          },
          slideTop: {
            '0%': {transform: 'translateY(100%)', opacity: 0},
            '100%': {transform: 'translateY(0%)', opacity: 1},
          },
        },
        animation: {
          slideRight: 'slideRight 800ms forwards ease',
          slideTop: 'slideTop 500ms forwards ease',
        },
        backgroundImage: {},
      },
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
      require('tailwindcss-animation-delay'),
    ],
}