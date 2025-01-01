/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Certifique-se de que o TailwindCSS saiba onde procurar os arquivos JSX/TSX
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Adicionando uma cor personalizada
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Adicionando uma fonte personalizada
      },
    },
  },
  plugins: [],
}

