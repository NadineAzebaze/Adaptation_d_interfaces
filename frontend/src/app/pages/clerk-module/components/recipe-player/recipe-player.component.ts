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

  public recipes : Recipe[];
  constructor(private tutorialService: TutorialService, private recipeService: RecipeService) {
    this.recipes = this.recipeService.retrieveRecipes();
  }

  ngOnInit(): void {
    this.step = this.recipe.clerkSteps[this.currentStepIndex];
  }


  previous() {
    if(this.currentStepIndex >= this.recipe.clerkSteps.length - 1) return;
    this.currentStepIndex++;
    this.step = this.recipe.clerkSteps[this.currentStepIndex]
  }

  next() {
    if(this.currentStepIndex == 0) return;
    this.currentStepIndex--;
    this.step = this.recipe.clerkSteps[this.currentStepIndex]
  }
}
