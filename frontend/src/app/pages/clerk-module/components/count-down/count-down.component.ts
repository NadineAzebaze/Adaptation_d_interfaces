import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.less']
})

export class CountDownComponent implements OnInit, OnDestroy {

  @Input()
  recipe : Recipe;

    private subscription!: Subscription;

    public dateNow = new Date();
    public dDay = new Date('Jan 01 2021 00:00:00');
    //ici rajouter le nombre de minutes qu'il faut pour 
    public minutesofDateToReach : number; 
    public dateToReach = new Date();
    

    public timeDifference!: number;
    public secondsToDday!: number;
    public minutesToDday!: number;
    public hoursToDday!: number;
    public daysToDday!: number;

    constructor(public recipeService : RecipeService) {
      this.recipeService.recipeSelected$.subscribe((recipe) => {
        this.recipe = recipe;
      })

      minutesofDateToReach = this.dateNow.getMinutes() + this.recipe.time ;
      dateToReach = this.dateNow.setMinutes(this.minutesofDateToReach);
      milliSecondsInASecond = 1000;
      hoursInADay = 24;
      minutesInAnHour = 60;
      SecondsInAMinute  = 60;
    }

    private getTimeDifference () {
      
        this.timeDifference = this.dateToReach.getTime() - new  Date().getTime();
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
    }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }

}
