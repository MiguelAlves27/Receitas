/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta "caderno de receitas / azulejo"
        paper: '#F1ECE1',       // fundo tipo papel kraft claro
        ink: '#22333B',         // texto principal, quase preto azulado
        azulejo: '#2B5876',     // azul azulejo — cor de destaque estrutural
        azulejoDark: '#1B3A4B',
        saffron: '#E3A63E',     // mostarda/açafrão — acento quente
        paprika: '#B5432B',     // acento raro, "carimbo"
        line: '#D8CFBD',        // linhas/divisores subtis
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'tile-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 20 L20 0 L40 20 L20 40 Z' fill='none' stroke='%232B5876' stroke-opacity='0.08' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
