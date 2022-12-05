export interface Recipe {
  id: string;
  name: string;
  clerkSteps: RecipeStep[];
}

export interface RecipeStep {
  description: string;
  image?: string;
}
