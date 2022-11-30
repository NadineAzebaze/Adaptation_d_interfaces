import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Recipe, RecipeStep} from "../models/recipe.model";
import {TutorialService} from "../../services/tutorial.service";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe!: Recipe;

  @Output()
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(public recipeService : RecipeService) {
  }


  ngOnInit(): void {
  }

  selectRecipe(): void {
    this.recipeSelected.emit(this.recipe);
  }


}
