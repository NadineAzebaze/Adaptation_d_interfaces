import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Recipe, RecipeStep} from "../models/recipe.model";
import {TutorialService} from "../../services/tutorial.service";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipes: Recipe[] = [];

  @Output()
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(public recipeService : RecipeService) {
  }


  ngOnInit(): void {
    this.recipeService.subject.subscribe(v => this.recipes = v);
  }

  selectRecipe(): void {
    //this.recipeSelected.emit(this.recipe);
  }


}
