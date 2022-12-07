import {Component, Input, OnInit} from "@angular/core";
import {RecipeStep} from "../../../../models/recipe.model";

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.less']
})
export class RecipeStepComponent implements OnInit {

  @Input()
  recipeStep!: RecipeStep;

  constructor() {
  }

  ngOnInit(): void {
  }

}

