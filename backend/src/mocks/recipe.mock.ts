import {
  Recipe,
  RecipeStep,
} from '../../../frontend/src/app/models/recipe.model';

export const RECIPE_STEP: RecipeStep[] = [
  {
    id: 'step1',
    description: 'Faire mariner le coq dans du vin',
    image:
      'https://assets.afcdn.com/recipe/20170312/9120_w1024h576c1cx360cy560.webp',
  },
  {
    id: 'step2',
    description: 'Preparer les champignons',
    image: 'https://cdn.futura-sciences.com/sources/images/cepe-champignon.jpg',
  },
];

export const RECIPE: Recipe[] = [
  {
    id: 'coq_au_vin',
    name: 'Coq au vin',
    clerkSteps: [],
    showTutorial: true,
  },
  {
    id: 'salade_nicoise',
    name: 'Salade niçoise',
    clerkSteps: [],
    showTutorial: false,
  },
];
