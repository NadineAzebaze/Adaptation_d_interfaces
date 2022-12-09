import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Recipe, RecipeStep} from "../../../../models/recipe.model";
import {TutorialService} from "../../../../services/tutorial.service";
import {RecipeService} from "../../../../services/recipe.service";
import {RecipePlayerComponent} from "../recipe-player/recipe-player.component";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  @Input()
  recipes: Recipe[] = [];

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  constructor(public recipeService : RecipeService) {
  }


  ngOnInit(): void {
    this.recipeService.subject.subscribe(v => this.recipes = v);
  }

  selectRecipe(recipe: Recipe): void {
    this.recipeSelected.emit(recipe)
    recipe.showTutorial = !recipe.showTutorial;
    for(let i =0; this.recipes.length; i++){
      if(this.recipes[i] !== recipe){
        this.recipes[i].showTutorial = false;
      }
    }
  }


}
