/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta minimalista: neutros + um único acento
        paper: '#FAFAF9',       // fundo, quase branco
        ink: '#18181B',         // texto principal
        accent: '#B5432B',      // acento único, terracota
        accentDark: '#8F3520',
        line: '#E7E5E4',        // linhas/divisores subtis
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
