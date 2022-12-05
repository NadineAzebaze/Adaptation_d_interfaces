import {Component, Input} from '@angular/core';
import {RecipeStep} from "../../models/recipe.model";

@Component({
  selector: 'app-recipe-step-overview',
  templateUrl: './recipe-step-overview.component.html',
  styleUrls: ['./recipe-step-overview.component.less']
})
export class RecipeStepOverviewComponent {
  @Input() step!: RecipeStep;
}
