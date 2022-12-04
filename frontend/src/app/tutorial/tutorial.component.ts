import {Component, Input, OnInit} from "@angular/core";
import {Recipe} from '../models/recipe.model'
import {RecipeStep} from "../models/recipe.model";
import {TutorialService} from "../../services/tutorial.service";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  @Input()
  recipe!: Recipe;

  constructor(private tutorialService: TutorialService) {

  }

  ngOnInit(): void {
  }

  nextRecipeStep(recipeStep: RecipeStep): void{
    this.tutorialService.nextRecipeStep(this.recipe, recipeStep);
  }


}
