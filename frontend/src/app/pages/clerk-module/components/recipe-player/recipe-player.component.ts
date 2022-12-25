import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Recipe} from '../../../../models/recipe.model'
import {RecipeStep} from "../../../../models/recipe.model";
import {TutorialService} from "../../../../services/tutorial.service";
import {RecipeService} from "../../../../services/recipe.service";
import {RecipeListComponent} from "../recipe-list/recipe-list.component";

@Component({
  selector: 'app-recipe-player',
  templateUrl: './recipe-player.component.html',
  styleUrls: ['./recipe-player.component.less']
})
export class RecipePlayerComponent implements OnInit {

  @Input()
  recipe!: Recipe;


  @Input() apprentise = false;
  currentStepIndex: number = 0;
  step!: RecipeStep;
  recipes : Recipe[] = [];

  constructor(private tutorialService: TutorialService, private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    //updating the recipe so that it always correspond to the one on which we have clicked
    this.recipeService.retrieveRecipes();
    this.recipes = this.recipeService.recipes;
    for(let i=0; i<this.recipes.length; i++){
      if(this.recipes[i].showTutorial){
        this.recipe = this.recipes[i];
      }
    }
    this.step = this.recipe.clerkSteps[0];
  }


  /**
   * got to the previous step of the recipe
   */
  previous() {
    if(this.currentStepIndex >= this.recipe.clerkSteps.length - 1) return;
    this.currentStepIndex++;
    this.step = this.recipe.clerkSteps[this.currentStepIndex]
  }

  /**
   * go to the next step of the recipe
   */
  next() {
    if(this.currentStepIndex == 0) return;
    this.currentStepIndex--;
    this.step = this.recipe.clerkSteps[this.currentStepIndex]
  }
}
