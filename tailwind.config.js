/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF9',       // fundo
        cream: '#F5EEE4',       // fundo secundário, mais quente
        ink: '#18181B',         // texto principal
        line: '#E7E5E4',        // linhas/divisores subtis

        accent: '#B5432B',      // terracota — acento principal / difícil
        accentDark: '#8F3520',
        accentSoft: '#F4DED4',

        sage: '#4B7B4E',        // verde — fácil
        sageDark: '#385C3B',
        sageSoft: '#DEE9DB',

        amber: '#B8752E',       // âmbar — média
        amberDark: '#8F5A22',
        amberSoft: '#F3E3CC',

        ocean: '#2E6B7B',       // azul — variedade de tags
        oceanSoft: '#D9E8EC',

        plum: '#6B3F6B',        // roxo — variedade de tags
        plumSoft: '#EAD9EA',
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
