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

const RECIPE_STEP_GENOISE: RecipeStep[] = [
  {
    id: 'step1',
    description:'Préchauffer le four à 180 C (350 F)',
    image:'https://www.wikihow.com/images_en/thumb/a/a6/Preheat-an-Oven-Step-12-Version-3.jpg/v4-460px-Preheat-an-Oven-Step-12-Version-3.jpg'
  },
  {
    id: 'step2',
    description:'Séparer les blancs des jaunes',
    image:'https://astucesdegrandmere.net/wp-content/uploads/2022/06/iStock-588597386.jpg'
  },
  {
    id: 'step3',
    description:'Dans un saladier battre les blancs ainsi que l’extrait de vanille a grande vitesse. Quand ça commence a mousser ajouter le sucre en 3 fois.\n' +
        '\n' +
        'Continuer a battre a vitesse maximale jusqu’à ce que des pics se forment',
    image:''
  },
  {
    id: 'step4',
    description:'Ajouter les jaunes legerement battus et continuer a battre jusqu’à incorporation et un appareil léger',
    image:'https://santecool.net/wp-content/uploads/2018/11/A-1024x703.jpeg'
  },
  {
    id: 'step5',
    description:'Ajouter la farine et le cacao tamises et incorporer a l’aide d’une spatule délicatement.\n' +
        '\n' +
        'Beurrer et fariner un moule recouvert de papier sulfurisé de préférence et verser la préparation.',
    image:'https://www.marciatack.fr/wp-content/uploads/2014/04/chocolat-fondu-500x334.jpg'
  }
]

export const RECIPE: Recipe[] = [
  {
    id: 'coq_au_vin',
    name: 'Coq au vin',
    clerkSteps: [],
    showTutorial: true,
    image:''
  },
  {
    id: 'salade_nicoise',
    name: 'Salade niçoise',
    clerkSteps: [],
    showTutorial: false,
    image:''
  },
  {
    id: 'Genoise_chocolat_secret_maison',
    name: 'Genoise chocolat secret maison',
    clerkSteps: RECIPE_STEP_GENOISE,
    showTutorial: false,
    image:'https://www.amourdecuisine.fr/wp-content/uploads/2020/06/recette-g%C3%A9noise-au-chocolat-inratable-2.jpg'
  }
];
