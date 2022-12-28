import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {Step} from "../../../../services/recipe.service";
import {interval, Subscription} from "rxjs";
import {ChronometerState, TutorialService} from "../../../../services/tutorial.service";

const clock = interval(100);

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.less']
})
export class RecipeStepComponent implements OnDestroy {

  @Input()
  recipeStep!: Step;

  @Input()
  expert = false;

  chrono: ChronometerState = {
    percent: 0,
    remainingTime: 0,
    overdue: false,
    completed: false
  }
  private chronoSubscription?: Subscription;

  constructor(private tutorialService: TutorialService) {
    this.chronoSubscription = tutorialService.chrono$.subscribe(chrono => this.chrono = chrono);
  }

  ngOnDestroy(): void {
    this.chronoSubscription?.unsubscribe();
  }
}

