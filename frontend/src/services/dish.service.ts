import { Injectable } from '@angular/core';
import Dish from "../app/models/dish.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  public dishes: Dish[] = []

  public dishes$ = new BehaviorSubject<Dish[]>([]);

  constructor() {
  }

  setDoneDishes(dishId:number){
    console.log(this.dishes)
    this.dishes[dishId].done=true
    this.dishes$.next(this.dishes.filter(dish => dish.done))
  }
}
