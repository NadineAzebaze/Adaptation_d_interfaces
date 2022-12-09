import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Subscription, interval } from 'rxjs';
import {Recipe} from "../../../../models/recipe.model";
import {RecipeService} from "../../../../services/recipe.service";

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.less']
})

export class CountDownComponent implements OnInit, OnDestroy {

  @Input()
  recipe! : Recipe;

    private subscription!: Subscription;

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

    constructor(public recipeService : RecipeService) {
    }

    private getTimeDifference () {

      //console.log(this.recipe.time);
      //console.log(this.recipe);
      this.dDay = new Date("'"+new Date().getMonth()+"' "+new Date().getDay()+"' "+new Date().getFullYear()+" 00:"+this.minutesofDateToReach+":00");
      this.dateToReach = this.dateNow.setMinutes(this.minutesofDateToReach);
      console.log(this.dDay);
      this.timeDifference = this.dateToReach - new  Date().getTime();

      this.allocateTimeUnits(this.timeDifference);
    }

  private allocateTimeUnits (timeDifference: number) {
        this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
        this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
        this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

    ngOnInit() {
       this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
      this.minutesofDateToReach = this.dateNow.getMinutes() + this.recipe.time;
    }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }

}
