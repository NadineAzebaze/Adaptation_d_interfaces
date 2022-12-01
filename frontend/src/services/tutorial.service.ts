import {Injectable} from "@angular/core";
import {Recipe, RecipeStep} from "../app/models/recipe.model";
import {BehaviorSubject, Subject} from "rxjs";
import {RECIPE} from "../../../backend/src/mocks/recipe.mock"
import {HttpClient} from "@angular/common/http";
import {RecipeRepository} from "../app/repositories/recipe.repository";

@Injectable({
  providedIn: 'root'
})

export class TutorialService {

  /**
   * The list of recipes retrieved from the mock
   * @private
   */
  private recipes: Recipe[] = RECIPE;
  private recipeRepository!: RecipeRepository;


  /**
   * Observable which contains the list of the recipes
   */
  public recipeSelected$: Subject<Recipe> = new Subject();
  public recipeStepNext$: Subject<RecipeStep> = new Subject();

  private recipeUrl ='/recipes';//todo
  private recipeStepsPath = 'recipeSteps';


  constructor(private http: HttpClient) {
    this.retrieveRecipes();
  }

  private retrieveRecipes(): void {
    this.http.get<Recipe[]>(this.recipeUrl).subscribe((recipeList) => {
        this.recipes = this.recipeRepository.recipes;
      }
    )
  }

  /**
   * select the nex step of the recipe that we want to do
   * @param recipe
   * @param recipeStep
   */
  nextRecipeStep(recipe: Recipe, recipeStep: RecipeStep): void{
    const recipeStepUrl = this.recipeUrl + '/' + recipe.id + '/' + this.recipeStepsPath + '/' + recipeStep.id;
    this.http.get<RecipeStep>(recipeStepUrl).subscribe((recipeStepNext) => {
      this.recipeStepNext$.next(recipeStepNext);
    });
  }

  getRecipeStep(recipeId: string, recipeStepId: string): void{
    //todo
  }
}
