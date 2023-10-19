/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, -40px)' },
          '100%': { transform: 'translate(0, 0px)' },
        },
        floating2: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, +20px)' },
          '100%': { transform: 'translate(0, 0px)' },
        },
        shine: {
          "100%": { left: "125%" },
        },
        wave: {
          '0%, 100%': {transform: 'rotate(0deg)'},
          '25%': {transform: 'rotate(-10deg)'},
          '75%': {transform: 'rotate(10deg)'},
        },
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',  
        floating: 'floating 5s infinite ease-in-out', 
        floating2: 'floating2 5s infinite ease-in-out', 
        shine: "shine 1s",   
        wave: "wave 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
