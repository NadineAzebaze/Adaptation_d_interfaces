export class Recipe {
    constructor(public id: String, public name: String, public clerkSteps: RecipeStep[], public showTutorial: boolean, public image:string|undefined, public time:number) {
    }
}

export class RecipeStep {
    constructor(public id: String, public description: string, public image: string|undefined, public forApprentice:boolean) {

    }
}
