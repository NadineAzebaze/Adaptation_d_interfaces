import {Injectable, OnDestroy} from "@angular/core";
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {Recipe} from "./recipe.service";


const clock = interval(100);

export interface ChronometerState {
  percent: number;
  remainingTime: number;
  overdue: boolean;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TutorialService implements OnDestroy {
  private selectedRecipe?: Recipe;
  private currentStep = 0;
  private expert = false;
  private chrono: ChronometerState = {
    percent: 0,
    remainingTime: 0,
    overdue: false,
    completed: false
  };
  private startDate: number = 0;
  private endDate: number = 0;
  selectedRecipe$ = new BehaviorSubject<Recipe | undefined>(undefined);
  currentStep$ = new BehaviorSubject<number>(0);
  expert$ = new BehaviorSubject<boolean>(false);
  chrono$ = new BehaviorSubject<ChronometerState>(this.chrono);


  private clockSubs?: Subscription;

  constructor() {
    this.clockSubs = clock.subscribe(() => {
      this.updateChrono();
    });
  }

  ngOnDestroy(): void {
    this.clockSubs?.unsubscribe();
  }

  selectRecipe(recipe: Recipe) {
    // Reset current step
    this.currentStep = 0;
    this.currentStep$.next(this.currentStep);

    // Set the selected recipe
    this.selectedRecipe = recipe;
    this.selectedRecipe$.next(this.selectedRecipe);

    // Reset chrono
    this.startChrono();
  }

  toggleExpert() {
    // Change expert mode
    this.expert = !this.expert;
    this.expert$.next(this.expert);

    // Reset chrono
    this.startChrono();
  }

  next() {
    // Check a recipe is selected
    if (!this.selectedRecipe) return;

    // Change the current step (check if it is not out of bounds)
    this.currentStep = Math.min(this.currentStep + 1, this.selectedRecipe.steps.length - 1);
    this.currentStep$.next(this.currentStep);

    // Reset chrono
    this.startChrono();
  }

  previous() {
    // Check a recipe is selected
    if (!this.selectedRecipe) return;

    // Change the current step (check if it is not out of bounds)
    this.currentStep = Math.max(this.currentStep - 1, 0);
    this.currentStep$.next(this.currentStep);

    // Reset chrono
    this.startChrono();
  }

  private startChrono() {
    // Check the user is not in expert mode
    if (this.expert) return;

    // Check a recipe is selected
    if (!this.selectedRecipe) return;

    // Set the start date and end date with the duration of the step.
    this.startDate = Date.now();
    this.endDate = this.startDate + this.selectedRecipe.duration * 1000;
    //this.endDate = this.startDate + this.selectedRecipe.steps[this.currentStep].duration * 1000;

    // Create chrono state for first time
    this.chrono = {
      percent: 0,
      remainingTime: this.selectedRecipe.duration,
      //remainingTime: this.selectedRecipe.steps[this.currentStep].duration,
      overdue: false,
      completed: false
    }
  }

  private updateChrono() {
    // Check the user is not in expert mode
    if (this.expert) return;

    // Check a recipe is selected
    if (!this.selectedRecipe) return;

    // Check if the chrono is completed
    if (this.chrono.completed) return;

    const now = Date.now();

    // Compute the total duration of the chrono (step duration)
    const duration = this.endDate - this.startDate;

    // Check a chrono is setted, avoid division by 0
    if (duration == 0) return;

    // Compute elapsed time, remaining time
    const elapsed = now - this.startDate;
    const remaining = this.endDate - now;

    // Compute percent from elapsed time
    const percent = elapsed / duration;

    // Update chrono state
    this.chrono = {
      percent,
      remainingTime: remaining / 1000,
      overdue: remaining < 0,
      completed: false
    }
    this.chrono$.next(this.chrono);
  }

  stopChrono() {
    // Reset chrono state
    this.chrono = {
      percent: 1,
      remainingTime: 0,
      overdue: false,
      completed: true
    }
    this.chrono$.next(this.chrono);
  }
}






