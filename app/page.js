import RecipesExplorer from '../components/RecipesExplorer';
import { getAllRecipes, getAllTags } from '../lib/recipes';

export default function HomePage() {
  const recipes = getAllRecipes();
  const allTags = getAllTags();

  return (
    <div>
      <div className="mb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-accent/80 mb-2">o livro de receitas</p>
        <h1 className="font-display italic text-3xl md:text-4xl text-ink">
          O que se vai cozinhar hoje?
        </h1>
      </div>

      {recipes.length === 0 ? (
        <p className="text-ink/50 italic">
          Ainda não há receitas aqui. Adiciona um ficheiro .json em{' '}
          <code className="font-mono">data/receitas</code> para começares.
        </p>
      ) : (
        <RecipesExplorer recipes={recipes} allTags={allTags} />
      )}
    </div>
  );
}
