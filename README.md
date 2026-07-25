# Recipe Book 📖

A personal recipe collection, built as a statically generated web app.

**[View live site](https://receitas-do-miguel.vercel.app/)**

## Why this exists

I'm a Data & AI Engineer by trade, but this project comes from a different part of my life. Years as a Scout and a semester abroad on Erasmus put me in charge of cooking for groups more times than I can count: camp kitchens, shared student houses, improvised meals with whatever ingredients were on hand. That's where most of these recipes come from, and this repo is where I collect and actually use them, built the way I build everything else: simple, versioned, and without infrastructure I don't need.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- Content stored as `.json` files (no database, recipes are added and edited via Git)
- Continuous deployment on [Vercel](https://vercel.com/)

The data layer is intentionally minimal: recipes are structured JSON documents rather than rows in a database, which keeps the project easy to fork, diff, and reason about, and leaves room to layer in retrieval or recommendation logic later without a migration.

## Project structure

```
.
├── app/
│   ├── page.js                  # home page (recipe listing)
│   ├── layout.js                # root layout + fonts
│   └── receitas/[slug]/page.js  # recipe detail page (dynamic route)
├── components/
│   ├── RecipeCard.js
│   └── Tag.js
├── data/receitas/                # one .json file per recipe
└── lib/recipes.js                # reads and shapes the recipe data
```

## Adding a new recipe

Create a file at `data/receitas/recipe-name.json` following this schema:

```json
{
  "title": "Recipe Name",
  "description": "Short, appetizing description.",
  "prepTime": 30,
  "servings": 4,
  "difficulty": "fácil",
  "tags": ["vegetarian", "quick"],
  "ingredients": [
    { "name": "flour", "quantity": 200, "unit": "g" }
  ],
  "steps": [
    "First step.",
    "Second step."
  ],
  "notes": "Optional tip."
}
```

Field names are in English so the schema reads consistently regardless of the
recipe's language; the values themselves (title, description, steps, tags,
difficulty, ...) are just written in whichever language the recipe is in, currently Portuguese for all of them.

`ingredients` can also be grouped into categories (e.g. for dishes with
sub-components like a sauce or filling), by nesting flat ingredient lists
under a `group` label instead of listing them directly:

```json
"ingredients": [
  {
    "group": "Sauce",
    "items": [
      { "name": "flour", "quantity": 200, "unit": "g" }
    ]
  }
]
```

A recipe uses one format or the other, not a mix of both.

The filename becomes the recipe's URL (`/receitas/recipe-name`).

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

The project is configured for automatic deployment on Vercel on every push to
`main`. See [vercel.com/docs](https://vercel.com/docs) for platform details.

## Roadmap

### Product

- [x] Search and filtering by tag / prep time
- [ ] Ingredient scaling by number of servings
- [ ] Multi-language support: an LLM translation agent that generates
      per-locale copies of each recipe's text fields (title, description,
      steps, notes) on top of the existing Portuguese schema, with a language
      switcher in the UI

### Engineering practices

- [ ] Automated tests (component tests for the recipe pages, at least)
- [ ] Expanded README: architecture diagram, key technical decisions, and screenshots of the app

### AI / data differentiators

- [ ] Pantry assistant: suggest recipes from a free-text list of ingredients the user already has at home
- [ ] Automatic nutrition breakdown per recipe (calories, macros), via a nutrition API or a small in-house estimation model
- [ ] "Similar recipes" recommendations using simple embeddings over ingredients/description (small ML/retrieval component)
- [ ] Recipe-card OCR: photograph a handwritten or printed recipe card and have a vision model extract it directly into the site's JSON schema
- [ ] A small classical ML baseline (e.g. scikit-learn) predicting recipe difficulty from structured features (ingredient count, step count, prep time)
