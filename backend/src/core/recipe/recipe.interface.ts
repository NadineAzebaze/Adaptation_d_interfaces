export interface Recipe {
  id: string;
  name: string;
  image?:string;
  clerkSteps: RecipeStep[];
}

export interface RecipeStep {
  description: string;
  image?: string;
}
