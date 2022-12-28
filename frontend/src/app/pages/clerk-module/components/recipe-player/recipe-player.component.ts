import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {Recipe} from "../../../../services/recipe.service";
import {TutorialService} from "../../../../services/tutorial.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-player',
  templateUrl: './recipe-player.component.html',
  styleUrls: ['./recipe-player.component.less']
})
export class RecipePlayerComponent implements OnDestroy {
  @Input() recipe!: Recipe;
  @Input() expert = false;

  currentStep: number = 0;

  private currentStepSubscription?: Subscription;

  constructor(public tutorialService: TutorialService) {
    this.currentStepSubscription = tutorialService.currentStep$.subscribe(step => this.currentStep = step);
  }

  ngOnDestroy(): void {
    this.currentStepSubscription?.unsubscribe();
  }
}
