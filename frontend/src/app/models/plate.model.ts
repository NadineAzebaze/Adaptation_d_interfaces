import {Recipe} from "./recipe.model";

export default class Plate {
    constructor(public id: String, public name: String, public recipeId: String) {}
}
