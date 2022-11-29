export default class Recipe {
    constructor(public id: String, public name: String, public clerkSteps: RecipeStep[]) {

    }
}

export class RecipeStep {
    constructor(public description: string, public image: string) {

    }
}