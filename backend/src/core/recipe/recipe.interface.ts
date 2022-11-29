export interface Recipe {
    id: String;
    name: String;
    clerkSteps: RecipeStep[]
}

export interface RecipeStep {
    description: String;
    image?: String;
}
