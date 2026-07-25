// Paleta de cores por tag/dificuldade, mantida aqui para o Tailwind JIT
// conseguir encontrar as classes literais (não podem ser construídas em runtime).

export const FILTER_TAGS = ['carne', 'peixe', 'sobremesa'];

const TAG_PALETTE = {
  carne: { bg: 'bg-accentSoft', text: 'text-accentDark', border: 'border-accent/30' },
  peixe: { bg: 'bg-oceanSoft', text: 'text-ocean', border: 'border-ocean/30' },
  sobremesa: { bg: 'bg-plumSoft', text: 'text-plum', border: 'border-plum/30' },
};

const DEFAULT_TAG_COLOR = { bg: 'bg-white', text: 'text-ink/60', border: 'border-line' };

export function tagColor(tag) {
  return TAG_PALETTE[tag] || DEFAULT_TAG_COLOR;
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
