// Paleta de cores por tag/dificuldade, mantida aqui para o Tailwind JIT
// conseguir encontrar as classes literais (não podem ser construídas em runtime).

const TAG_PALETTE = [
  { bg: 'bg-accentSoft', text: 'text-accentDark', border: 'border-accent/30' },
  { bg: 'bg-sageSoft', text: 'text-sageDark', border: 'border-sage/30' },
  { bg: 'bg-amberSoft', text: 'text-amberDark', border: 'border-amber/30' },
  { bg: 'bg-oceanSoft', text: 'text-ocean', border: 'border-ocean/30' },
  { bg: 'bg-plumSoft', text: 'text-plum', border: 'border-plum/30' },
];

export function tagColor(tag) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = (hash * 31 + tag.charCodeAt(i)) >>> 0;
  }
  return TAG_PALETTE[hash % TAG_PALETTE.length];
}

const DIFFICULTY_PALETTE = {
  'fácil': { bg: 'bg-sageSoft', text: 'text-sageDark', dot: 'bg-sage' },
  'média': { bg: 'bg-amberSoft', text: 'text-amberDark', dot: 'bg-amber' },
  'difícil': { bg: 'bg-accentSoft', text: 'text-accentDark', dot: 'bg-accent' },
};

const DEFAULT_DIFFICULTY = { bg: 'bg-line', text: 'text-ink/60', dot: 'bg-ink/40' };

export function difficultyColor(difficulty) {
  return DIFFICULTY_PALETTE[difficulty] || DEFAULT_DIFFICULTY;
}

export const ALL_DIFFICULTIES = ['fácil', 'média', 'difícil'];
