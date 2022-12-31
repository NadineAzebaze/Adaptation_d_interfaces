import {Injectable} from "@angular/core";
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TutorialService} from "./tutorial.service";
import {Recipe, RecipeService} from "./recipe.service";


const clock = interval(3000);
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
  private clerkTasks: ClerkTask[] = [];
  clerkTasks$ = new BehaviorSubject<ClerkTask[]>([]);

  private recipes: Recipe[] = [];
  private recipeSubscription?: Subscription;

  constructor(private http: HttpClient, private tutorialService: TutorialService, private recipeService: RecipeService) {
    this.retrieveTasks();
    this.recipeSubscription = this.recipeService.recipes$.subscribe(recipes => this.recipes = recipes);
    this.recipeService.retrieveRecipes();

    clock.subscribe(() => {
      this.generateTask();
    });
  }

  retrieveTasks(): void {
    this.clerkTasks$.next(this.clerkTasks);
  }

  generateTask(): void {
    const recipe = this.recipes[Math.floor(Math.random() * this.recipes.length)];
    this.clerkTasks.push({
      name: recipe.name,
      qte: Math.floor(Math.random() * 10) + 1,
      recipe: recipe.id,
      state: "pending"
    });
    this.clerkTasks$.next(this.clerkTasks);
  }

  beginTask(clerkTask: ClerkTask): void {
    // Select a recipe in the tutorial
    this.tutorialService.selectRecipe(this.recipes.find(recipe => recipe.id === clerkTask.recipe) as Recipe);

    // Change the state of the task
    clerkTask.state = "began";
  }

  completeTask(clerkTask: ClerkTask): void {
    // Remove the completed task
    this.clerkTasks = this.clerkTasks.filter(task => task !== clerkTask);

    // Stop the chrono of the tutorial
    this.tutorialService.stopChrono();

    // Update the list
    this.clerkTasks$.next(this.clerkTasks);
  }

}
