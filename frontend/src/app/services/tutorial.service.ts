import {Injectable} from "@angular/core";
import {Recipe, RecipeStep} from "../models/recipe.model";
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TutorialService {
  private selectedRecipe?: Recipe;
  private currentStep = 0;
  private expert = false;
  recipeSteps: RecipeStep[] = [];
  selectedRecipe$ = new BehaviorSubject<Recipe | undefined>(undefined);
  currentStep$ = new BehaviorSubject<number>(0);
  expert$ = new BehaviorSubject<boolean>(false);
  subject = new BehaviorSubject<RecipeStep[]>([]);



  constructor(private http: HttpClient) {
    this.retrieveRecipeSteps();
  }

  toggleExpert() {
    // Change expert mode
    this.expert = !this.expert;
    this.expert$.next(this.expert);

  }

  retrieveRecipeSteps(): void {
    this.http.get<RecipeStep[]>("http://localhost:3000/recipe").subscribe((recipes) => {
        const recipesList = recipes;
        this.subject.next(this.recipeSteps);
    });
  }

}






