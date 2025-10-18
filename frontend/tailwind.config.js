/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          25: '#F8F9FA'
        },
        brand: '#E63946',
        navy: '#1D3557'
      }
    }
  },
  plugins: []
}



