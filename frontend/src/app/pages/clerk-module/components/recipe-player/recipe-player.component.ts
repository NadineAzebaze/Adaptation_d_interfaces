import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Recipe} from '../../../../models/recipe.model'
import {RecipeStep} from "../../../../models/recipe.model";
import {TutorialService} from "../../../../services/tutorial.service";

@Component({
  selector: 'app-recipe-player',
  templateUrl: './recipe-player.component.html',
  styleUrls: ['./recipe-player.component.less']
})
export class RecipePlayerComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() apprentise = false;
  currentStepIndex: number = 0;
  step!: RecipeStep;


  constructor(private tutorialService: TutorialService) {

  }

  ngOnInit(): void {
    this.step = this.recipe.clerkSteps[this.currentStepIndex];
  }

  nextRecipeStep(recipeStep: RecipeStep): void{
    //this.tutorialService.nextRecipeStep(this.currentStep, recipeStep);
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