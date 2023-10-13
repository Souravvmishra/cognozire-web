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
      colors : {
        "cg-white" : "#F0F0F0",
        "cg-red" : "#FF473F",
        "cg-blue" : "#5252D4",
        "cg-black" : "#202020",
        
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
