import Link from 'next/link';
import Tag from './Tag';
import DifficultyBadge from './DifficultyBadge';
import { difficultyColor } from '../lib/colors';

export default function RecipeCard({ recipe }) {
  const accentDot = difficultyColor(recipe.difficulty || 'fácil').dot;

  return (
    <Link
      href={`/receitas/${recipe.slug}`}
      className="group block bg-white border border-line rounded-xl p-6 relative overflow-hidden hover:border-transparent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
    >
      <span className={`absolute top-0 left-0 h-1.5 w-full ${accentDot}`} />

      <div className="flex items-start justify-between gap-3 mb-3">
        <DifficultyBadge difficulty={recipe.difficulty} />
        <span className="font-mono text-xs text-ink/40 whitespace-nowrap pt-1">
          ⏱ {recipe.prepTime}min
        </span>
      </div>

      <h2 className="font-display italic text-2xl text-ink group-hover:text-accent transition-colors mb-2 leading-snug">
        {recipe.title}
      </h2>
      <p className="text-sm text-ink/70 mb-4 leading-relaxed line-clamp-2">
        {recipe.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {(recipe.tags || []).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
