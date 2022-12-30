import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Subscription, interval } from 'rxjs';
import {Recipe} from "../../../../models/recipe.model";
import {RecipeService} from "../../../../services/recipe.service";
import {TutorialService} from "../../../../services/tutorial.service";

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.less']
})

export class CountDownComponent implements OnInit, OnDestroy {

  @Input()
  recipe! : Recipe;
  recipes : Recipe[] = [];

  @Input()
  expert = false;

  constructor(private tutorialService: TutorialService, public recipeService : RecipeService) {
  }

    private subscription!: Subscription;

    public progressBar: any;

    public dateNow = new Date();
    public dDay = new Date('Jan 01 2021 00:00:00');
    public minutesofDateToReach! : number ;
    public dateToReach!: number;
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference!: number;
    public secondsToDday!: number;
    public minutesToDday!: number;
    public hoursToDday!: number;
    public daysToDday!: number;
    public progressWidth!: number;

  /**
   * creating a date to reach taking in account the actual time and the time to do the recipe
   * then calculating the time Difference use to update the count-down timer
   * @private
   */
  private getTimeDifference () {
      this.dateToReach = this.dateNow.setMinutes(this.minutesofDateToReach);
      this.timeDifference = this.dateToReach - Date.now();
      this.allocateTimeUnits(this.timeDifference);
    }

  /**
   * Allocating units to each parameter of the timer
   * @param timeDifference
   * @private
   */
  private allocateTimeUnits (timeDifference: number) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);

        this.progressBar = document.querySelector(".progress-inner");

        let divider = this.recipe.time;
        let progressPass = this.timeDifference / divider;
        this.progressWidth = 100 - progressPass*2/1000 ;
        if(this.progressWidth < 0) {
          return;
        }

        console.log(this.progressWidth);
        if(this.timeDifference>0){
          this.progressBar.style.width = this.progressWidth + "%";
        }else{
          this.progressBar.style.width = "0%";
        }

        if(this.progressWidth >  50 && this.progressWidth <75){
          this.progressBar.style.background = "orange";
        } else if( this.progressWidth > 75 && this.progressWidth <100){
          this.progressBar.style.background = " red";

        } else {
          this.progressBar.style.background = "#753BBD";
        }
  }

    ngOnInit() {

      this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
       //calculating the minutes to reach for the date to reach we are creating
      this.minutesofDateToReach = this.dateNow.getMinutes() + this.recipe.time;

      //Updating the actual recipe with the recipe on which we clicked for the count-down timer to update too
      this.recipeService.retrieveRecipes();
      this.recipes = this.recipeService.recipes;
      for(let i=0; i<this.recipes.length; i++){
        if(this.recipes[i].showTutorial){
          this.recipe = this.recipes[i];
        }
      }

    }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }

}
