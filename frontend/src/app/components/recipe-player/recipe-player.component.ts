import {Component, Input, OnInit} from '@angular/core';
import {Recipe, RecipeStep} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-player',
  templateUrl: './recipe-player.component.html',
  styleUrls: ['./recipe-player.component.less']
})
export class RecipePlayerComponent implements OnInit {
  @Input() recipe!: Recipe;
  step: number = 0;
  currentStep!: RecipeStep;

  ngOnInit(): void {
    this.currentStep = this.recipe.clerkSteps[this.step];
  }
}
