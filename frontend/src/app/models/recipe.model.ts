export class Recipe {
    constructor(public id: String, public name: String, public clerkSteps: RecipeStep[]) {
    }
}

export class RecipeStep {
    constructor(public id: String, public description: string, public image: string|undefined) {

    }
}
