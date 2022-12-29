export interface Recipe {
  id: string;
  name: string;
  image?:string;
  clerkSteps: RecipeStep[];
  time : number;
}

export interface RecipeStep {
  description: string;
  image?: string;
  forApprentice: boolean;
}
