import {Injectable, OnDestroy} from "@angular/core";
import {BehaviorSubject, interval, Subscription} from "rxjs";
import {Recipe, RecipeService} from "./recipe.service";


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
    this.currentStep = 0;
    this.currentStep$.next(this.currentStep);

    this.selectedRecipe = recipe;
    this.selectedRecipe$.next(this.selectedRecipe);
    this.startChrono();
  }

  toggleExpert() {
    this.expert = !this.expert;
    this.expert$.next(this.expert);
    this.startChrono();
  }

  next() {
    if (!this.selectedRecipe) return;
    this.currentStep = Math.min(this.currentStep + 1, this.selectedRecipe.steps.length - 1);
    this.currentStep$.next(this.currentStep);
    this.startChrono();
  }

  previous() {
    if (!this.selectedRecipe) return;
    this.currentStep = Math.max(this.currentStep - 1, 0);
    this.currentStep$.next(this.currentStep);
    this.startChrono();
  }

  private startChrono() {
    if (this.expert) return;
    if (!this.selectedRecipe) return;
    this.startDate = Date.now();
    this.endDate = this.startDate + this.selectedRecipe.steps[this.currentStep].duration * 1000;

    this.chrono = {
      percent: 0,
      remainingTime: this.selectedRecipe.steps[this.currentStep].duration,
      overdue: false,
      completed: false
    }
  }

  private updateChrono() {
    if (this.expert) return;
    if (!this.selectedRecipe) return;
    if(this.chrono.completed) return;
    const now = Date.now();
    const duration = this.endDate - this.startDate;
    if(duration == 0) return;

    const elapsed = now - this.startDate;
    const remaining = this.endDate - now;
    const percent = elapsed / duration;

    this.chrono = {
      percent,
      remainingTime: remaining / 1000,
      overdue: remaining < 0,
      completed: false
    }
    this.chrono$.next(this.chrono);
  }

  stopChrono() {
    this.chrono = {
      percent: 1,
      remainingTime: 0,
      overdue: false,
      completed: true
    }
    this.chrono$.next(this.chrono);
  }
}






