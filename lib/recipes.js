import fs from 'fs';
import path from 'path';

const RECIPES_DIR = path.join(process.cwd(), 'data', 'receitas');

export function getAllSlugs() {
  return fs
    .readdirSync(RECIPES_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));
}

export function getAllRecipes() {
  return getAllSlugs()
    .map((slug) => getRecipeBySlug(slug))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getRecipeBySlug(slug) {
  const filePath = path.join(RECIPES_DIR, `${slug}.json`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  return { ...data, slug };
}
