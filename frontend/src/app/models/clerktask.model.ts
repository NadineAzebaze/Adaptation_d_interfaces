import Recipe from "./recipe.model";

export default class ClerkTask {
    constructor(public id: String, public commandDate: Date, public quantity: number, public recipeId: String) {}
}