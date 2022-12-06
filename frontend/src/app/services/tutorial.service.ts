import {Injectable} from "@angular/core";
import {Recipe, RecipeStep} from "../models/recipe.model";
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TutorialService {

  recipeSteps: RecipeStep[] = [];
  subject = new BehaviorSubject<RecipeStep[]>([]);


  constructor(private http: HttpClient) {
    this.retrieveRecipeSteps();
  }



  retrieveRecipeSteps(): void {
    this.http.get<RecipeStep[]>("http://localhost:3000/recipe").subscribe((recipes) => {
       const recipesList = recipes;
      this.subject.next(this.recipeSteps);
    });
  }


 /* nextRecipeStep(recipe-list: RecipeStep, recipeStep: RecipeStep): void{
    const recipeStepUrl = this.recipeUrl + '/' + recipe-list.id + '/' + this.recipeStepsPath + '/' + recipeStep.id;
    this.http.get<RecipeStep>(recipeStepUrl).subscribe((recipeStepNext) => {
      this.recipeStepNext$.next(recipeStepNext);
    });
  }*/

  /*getRecipeStep(recipeId: string, recipeStepId: string): void{

  }*/
}






