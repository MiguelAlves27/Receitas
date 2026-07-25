'use client';

import { useMemo, useState } from 'react';
import RecipeCard from './RecipeCard';
import { ALL_DIFFICULTIES, FILTER_TAGS, tagColor } from '../lib/colors';

function normalize(text) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

const PREP_TIME_RANGES = [
  { label: '≤ 15 min', min: 0, max: 15 },
  { label: '15–40 min', min: 15, max: 40 },
  { label: '> 40 min', min: 40, max: Infinity },
];

export default function RecipesExplorer({ recipes }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState(null);
  const [activeDifficulty, setActiveDifficulty] = useState(null);
  const [activePrepTime, setActivePrepTime] = useState(null);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());

    return recipes.filter((recipe) => {
      if (activeDifficulty && (recipe.difficulty || 'fácil') !== activeDifficulty) {
        return false;
      }
      if (activePrepTime) {
        const prepTime = recipe.prepTime ?? 0;
        if (prepTime <= activePrepTime.min || prepTime > activePrepTime.max) return false;
      }
      if (activeTag && !(recipe.tags || []).includes(activeTag)) {
        return false;
      }
      if (q) {
        const haystack = normalize(
          [recipe.title, recipe.description, ...(recipe.tags || [])].join(' ')
        );
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [recipes, query, activeTag, activeDifficulty, activePrepTime]);

  function toggleTag(tag) {
    setActiveTag((prev) => (prev === tag ? null : tag));
  }

  function toggleDifficulty(difficulty) {
    setActiveDifficulty((prev) => (prev === difficulty ? null : difficulty));
  }

  function togglePrepTime(range) {
    setActivePrepTime((prev) => (prev?.label === range.label ? null : range));
  }

  function clearFilters() {
    setQuery('');
    setActiveTag(null);
    setActiveDifficulty(null);
    setActivePrepTime(null);
  }

  const hasActiveFilters = query || activeTag || activeDifficulty || activePrepTime;

  return (
    <div>
      <div className="mb-8">
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Procurar por nome, ingrediente ou tag..."
            className="w-full bg-white border border-line rounded-full pl-11 pr-5 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-shadow"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs uppercase tracking-[0.15em] text-ink/40 font-mono mr-1">
          dificuldade
        </span>
        {ALL_DIFFICULTIES.map((difficulty) => (
          <button
            key={difficulty}
            type="button"
            onClick={() => toggleDifficulty(difficulty)}
            className={`text-xs font-semibold uppercase tracking-[0.08em] rounded-full px-3 py-1.5 border transition-colors ${
              activeDifficulty === difficulty
                ? 'bg-accent text-white border-accent'
                : 'bg-white text-ink/60 border-line hover:border-accent/40'
            }`}
          >
            {difficulty}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs uppercase tracking-[0.15em] text-ink/40 font-mono mr-1">
          tempo de preparação
        </span>
        {PREP_TIME_RANGES.map((range) => (
          <button
            key={range.label}
            type="button"
            onClick={() => togglePrepTime(range)}
            className={`text-xs font-semibold uppercase tracking-[0.08em] rounded-full px-3 py-1.5 border transition-colors ${
              activePrepTime?.label === range.label
                ? 'bg-accent text-white border-accent'
                : 'bg-white text-ink/60 border-line hover:border-accent/40'
            }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-xs uppercase tracking-[0.15em] text-ink/40 font-mono mr-1">
          tags
        </span>
        {FILTER_TAGS.map((tag) => {
          const active = activeTag === tag;
          const color = tagColor(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              className={`text-xs font-medium rounded-full px-3 py-1.5 border transition-colors ${
                active
                  ? `${color.bg} ${color.text} ${color.border} ring-1 ring-inset ring-current`
                  : 'bg-white text-ink/60 border-line hover:border-ink/30'
              }`}
            >
              {tag}
            </button>
          );
        })}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs font-medium text-accent hover:underline ml-1"
          >
            limpar filtros
          </button>
        )}
      </div>

      <p className="text-xs font-mono text-ink/40 mb-4">
        {filtered.length} {filtered.length === 1 ? 'receita' : 'receitas'}
      </p>

      {filtered.length === 0 ? (
        <p className="text-ink/50 italic py-10 text-center">
          Não encontrei nenhuma receita com esses filtros.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
