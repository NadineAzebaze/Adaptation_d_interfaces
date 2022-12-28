import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Recipe, RecipeService} from "../../../services/recipe.service";
import {TutorialService} from "../../../services/tutorial.service";
import {Subscription} from "rxjs";



@Component({
  selector: 'app-clerk-page',
  templateUrl: './clerk-page.component.html',
  styleUrls: ['./clerk-page.component.less']
})
export class ClerkPageComponent implements OnDestroy {
  public selectedRecipe?: Recipe;
  public recipes: Recipe[] = [];
  public expert = false;

  private recipesSubscription?: Subscription;
  private selectedRecipeSubscription?: Subscription;
  private expertSubscription?: Subscription;

  constructor(public router: Router, private tutorialService: TutorialService, private recipeService: RecipeService) {
    this.recipesSubscription = recipeService.recipes$.subscribe(recipes => this.recipes = recipes);
    this.selectedRecipeSubscription = tutorialService.selectedRecipe$.subscribe(recipe => this.selectedRecipe = recipe);
    this.expertSubscription = tutorialService.expert$.subscribe(expert => this.expert = expert);
  }

  ngOnDestroy(): void {
    this.recipesSubscription?.unsubscribe();
    this.selectedRecipeSubscription?.unsubscribe();
    this.expertSubscription?.unsubscribe();
  }

  selectRecipe(recipe: Recipe) {
    this.tutorialService.selectRecipe(recipe);
  }
}
