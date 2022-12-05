import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Recipe} from '../models/recipe.model'
import {RecipeStep} from "../models/recipe.model";
import {TutorialService} from "../../services/tutorial.service";
import {RecipeService} from "../../services/recipe.service";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  @Input()
  recipeSteps: RecipeStep[] = [];
  recipes: Recipe[] = [];

  @Output()
  recipeStepSelected: EventEmitter<RecipeStep> = new EventEmitter<RecipeStep>();


  constructor(private tutorialService: TutorialService) {

  }

  ngOnInit(): void {
    this.tutorialService.subject.subscribe(v => this.recipeSteps = v);
  }

  nextRecipeStep(recipeStep: RecipeStep): void{
    //this.tutorialService.nextRecipeStep(this.currentStep, recipeStep);
  }





}
