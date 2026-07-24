import RecipeCard from '../components/RecipeCard';
import { getAllRecipes } from '../lib/recipes';

export default function HomePage() {
  const recipes = getAllRecipes();

  return (
    <div>
      <div className="mb-10">
        <p className="text-ink/60 max-w-xl leading-relaxed">
          Uma coleção pessoal de receitas — algumas de família, outras aprendidas
          pelo caminho. Sem anúncios, sem histórias de vida antes do modo de preparo.
        </p>
      </div>

      {recipes.length === 0 ? (
        <p className="text-ink/50 italic">
          Ainda não há receitas aqui. Adiciona um ficheiro .json em{' '}
          <code className="font-mono">data/receitas</code> para começares.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
