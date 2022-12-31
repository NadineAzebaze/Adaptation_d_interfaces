import {Injectable} from "@angular/core";
import {BehaviorSubject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TutorialService} from "./tutorial.service";
import {Recipe, RecipeService} from "./recipe.service";


export interface ClerkTask {
  name: string;
  qte: number;
  recipe: string;
  state: "pending"|"began"
}

@Injectable({
  providedIn: 'root'
})

export class ClerkTaskService {
  clerkTaskList: ClerkTask[] = [];
  subject = new BehaviorSubject<ClerkTask[]>([]);

  private recipes: Recipe[] = [];
  private recipeSubscription?: Subscription;

  constructor(private http: HttpClient, private tutorialService: TutorialService, private recipeService: RecipeService) {
    this.retrieveTasks();
    this.recipeSubscription = this.recipeService.recipes$.subscribe(recipes => this.recipes = recipes);
    this.recipeService.retrieveRecipes();
  }

  retrieveTasks(): void {
    /* this.http.get<ClerkTask[]>("http://localhost:3000/clerk-task").subscribe((clerkTaskList) => {
      this.clerkTaskList = clerkTaskList;
      this.subject.next(this.clerkTaskList);
    }); */
    this.clerkTaskList = [
      {
        name: "Sauce vinaigrette spéciale maison",
        qte: 1,
        recipe: "1",
        state: "pending"
      }, {
        name: "Génoise forêt noire",
        qte: 1,
        recipe: "2",
        state: "pending"
      }, {
        name: "Salade noçoise",
        qte: 4,
        recipe: "3",
        state: "pending"
      }
    ]
    this.subject.next(this.clerkTaskList);
  }

  beginTask(clerkTask: ClerkTask): void {
    // Select a recipe in the tutorial
    this.tutorialService.selectRecipe(this.recipes.find(recipe => recipe.id === clerkTask.recipe) as Recipe);

    // Change the state of the task
    clerkTask.state = "began";
  }

  completeTask(clerkTask: ClerkTask): void {
    // Remove the completed task
    this.clerkTaskList = this.clerkTaskList.filter(task => task !== clerkTask);

    // Stop the chrono of the tutorial
    this.tutorialService.stopChrono();

    // Update the list
    this.subject.next(this.clerkTaskList);
  }

}
