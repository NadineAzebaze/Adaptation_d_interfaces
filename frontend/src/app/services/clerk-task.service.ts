import {Injectable} from "@angular/core";
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TutorialService} from "./tutorial.service";
import {Recipe, RecipeService} from "./recipe.service";


const clock = interval(3000);
export class ClerkTask {
  public name!: string;
  public _qte!: number;
  public recipe!: string;
  public state!: "pending"|"began";

  constructor(name: string, qte: number, recipe: string, state: "pending" | "began") {
    this.name = name;
    this._qte = qte;
    this.recipe = recipe;
    this.state = state;
  }

  qte(value: number) {
    this._qte = value;
  }
}

@Injectable({
  providedIn: 'root'
})

export class ClerkTaskService {
  private clerkTasks: ClerkTask[] = [];
  clerkTasks$ = new BehaviorSubject<ClerkTask[]>([]);

  private recipes: Recipe[] = [];
  private recipeSubscription?: Subscription;
  private counter!:number;

  constructor(private http: HttpClient, private tutorialService: TutorialService, private recipeService: RecipeService) {
    this.retrieveTasks();
    this.recipeSubscription = this.recipeService.recipes$.subscribe(recipes => this.recipes = recipes);
    this.recipeService.retrieveRecipes();

    clock.subscribe(() => {
      this.generateTask();
    });
  }

  retrieveTasks(): void {

    /*this.clerkTasks$.next(this.clerkTasks);
  }
  generateTask(): void {
    const recipe = this.recipes[Math.floor(Math.random() * this.recipes.length)];
    this.clerkTasks.push({
      name: recipe.name,
      qte: Math.floor(Math.random() * 10) + 1,
      recipe: recipe.id,
      state: "pending"
    });
    this.clerkTasks$.next(this.clerkTasks);*/
    /* this.http.get<ClerkTask[]>("http://localhost:3000/clerk-task").subscribe((clerkTaskList) => {
      this.clerkTaskList = clerkTaskList;
      this.subject.next(this.clerkTaskList);
    }); */
    var clerktask1 = new ClerkTask("Coq au vin",
      2,
      "1",
      "pending");
    var clerktask2 = new ClerkTask("Salade niçoise",
      2,
      "2",
      "pending");
    var clerktask3 = new ClerkTask("Genoise chocolat secret maison",
      4,
      "3",
      "pending");
    this.clerkTaskList = [clerktask1,clerktask2,clerktask3];


    this.subject.next(this.clerkTaskList);

  }

  beginTask(clerkTask: ClerkTask): void {
    //setting counter to quantity
    this.counter = clerkTask._qte;
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
    this.counter--;
    console.log("counter", clerkTask);
    if(this.counter === 0 ){
      this.subject.next(this.clerkTaskList);
    } else {
      let u = new ClerkTask(clerkTask.name,this.counter, clerkTask.recipe,clerkTask.state);
      clerkTask = u;
      this.beginTask(clerkTask);
      clerkTask.qte(this.counter);
      //update clerkTaskList
      console.log("qte", clerkTask._qte);
    }
    
  }

}
