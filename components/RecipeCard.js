import Link from 'next/link';
import Tag from './Tag';

export default function RecipeCard({ recipe }) {
  return (
    <Link
      href={`/receitas/${recipe.slug}`}
      className="group block bg-white border border-line rounded-sm p-5 relative hover:border-accent/40 hover:shadow-sm transition-all duration-150"
    >
      <span className="absolute top-3 right-3 font-mono text-[0.65rem] text-ink/40">
        {String(recipe.prepTime).padStart(2, '0')}min
      </span>
      <p className="text-xs uppercase tracking-[0.15em] text-accent mb-1">
        {recipe.difficulty || 'fácil'}
      </p>
      <h2 className="font-display text-xl text-ink group-hover:text-accent transition-colors mb-2 pr-14">
        {recipe.title}
      </h2>
      <p className="text-sm text-ink/70 mb-4 leading-relaxed">{recipe.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {(recipe.tags || []).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
