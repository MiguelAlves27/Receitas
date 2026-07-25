import { difficultyColor } from '../lib/colors';

export default function DifficultyBadge({ difficulty }) {
  const label = difficulty || 'fácil';
  const color = difficultyColor(label);
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] rounded-full px-3 py-1 ${color.bg} ${color.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${color.dot}`} />
      {label}
    </span>
  );
}
