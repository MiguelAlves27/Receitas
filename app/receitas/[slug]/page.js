import Link from 'next/link';
import { getAllSlugs, getRecipeBySlug } from '../../../lib/recipes';
import Tag from '../../../components/Tag';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const recipe = getRecipeBySlug(params.slug);
  return { title: `${recipe.title} — O Meu Caderno de Receitas` };
}

function IngredientRow({ ing }) {
  return (
    <li className="flex justify-between gap-3 text-sm border-b border-line pb-2">
      <span className="text-ink/80">{ing.name}</span>
      <span className="font-mono text-ink/50 whitespace-nowrap">
        {ing.quantity}
        {ing.unit ? ` ${ing.unit}` : ''}
      </span>
    </li>
  );
}

export default function RecipePage({ params }) {
  const recipe = getRecipeBySlug(params.slug);
  const isGrouped = recipe.ingredients.every((entry) => Array.isArray(entry.items));

  return (
    <article>
      <Link href="/" className="text-sm text-accent hover:underline mb-6 inline-block">
        ← voltar ao caderno
      </Link>

      <header className="mb-8 pb-6 border-b border-line">
        <p className="text-xs uppercase tracking-[0.15em] text-accent mb-2">
          {recipe.difficulty || 'fácil'}
        </p>
        <h1 className="font-display italic text-3xl md:text-4xl text-ink mb-3">
          {recipe.title}
        </h1>
        <p className="text-ink/70 max-w-xl leading-relaxed mb-4">{recipe.description}</p>
        <div className="flex flex-wrap items-center gap-4 font-mono text-sm text-ink/60">
          <span>⏱ {recipe.prepTime} min</span>
          <span>🍽 {recipe.servings} porções</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {(recipe.tags || []).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-10">
        <section>
          <h2 className="font-display text-lg text-accent mb-4">Ingredientes</h2>
          {isGrouped ? (
            <div className="space-y-5">
              {recipe.ingredients.map((section, i) => (
                <div key={i}>
                  <h3 className="text-xs uppercase tracking-[0.1em] text-ink/50 mb-2">
                    {section.group}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((ing, j) => (
                      <IngredientRow key={j} ing={ing} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-2">
              {recipe.ingredients.map((ing, i) => (
                <IngredientRow key={i} ing={ing} />
              ))}
            </ul>
          )}
        </section>

        <section>
          <h2 className="font-display text-lg text-accent mb-4">Modo de preparo</h2>
          <ol className="space-y-4">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-accent/70 text-sm shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-ink/80 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          {recipe.notes && (
            <p className="mt-6 text-sm italic text-ink/60 border-l-2 border-accent pl-4">
              {recipe.notes}
            </p>
          )}
        </section>
      </div>
    </article>
  );
}
