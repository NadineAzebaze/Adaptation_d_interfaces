import {Injectable} from '@angular/core';
import Table from "../models/table.model";
import {BehaviorSubject} from "rxjs";
import {Entree, Plat, Dessert} from "../../../../backend/src/mocks/dishes.mock"
import Dish from "../models/dish.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public tables: Table[] = []
  public tableNumber = 0;
  public tables$ = new BehaviorSubject<Table[]>([]);

  constructor(private router : Router) {
    this.generateTable();

  }

  getRandom(indexMax: number, min: number = 0) {
    return Math.floor(Math.random() * (indexMax - min) + min);
  }


  generateRandomDishes(type: Dish[], dishes: Dish[], min: number = 0) {
    const indexMax = Entree.length;
    for (let j = 0; j < this.getRandom(6, min); j++) {
      const indexRandom = this.getRandom(indexMax);
      const dishToAdd = {
        id: type[indexRandom].id,
        name: type[indexRandom].name,
        type: type[indexRandom].type,
        done: type[indexRandom].done,
        number: 1
      };
      const dish = dishes.find(d => d.id == dishToAdd.id);
      if (dish) dish.name = dish.number>1 ? dish.name.slice(0,-1) + (++dish.number) : dish.name + " x " + (++dish.number);
      else dishes.push(dishToAdd)
    }
  }
  generateTable(): void {
    this.tableNumber+=1;
    if(this.tables.length < 6){
      setTimeout(() =>{
        let dishes: Dish[] = []
        this.generateRandomDishes(Entree, dishes)
        this.generateRandomDishes(Plat, dishes, 1)
        this.generateRandomDishes(Dessert, dishes)
        this.tables.push({
          id: this.tableNumber,
          dishes: dishes
        })
        this.generateTable();
      }, this.getRandom(5000,2000));
    }
  }

  setDoneTable(tableId: number, dishId: number) {
    const table = this.tables.find(t => t.id === tableId)
    if (!table)
      throw "Table null."
    const dish = table.dishes.find(d => d.id === dishId)
    if (!dish)
      throw "Dish null."
    dish.done = !dish.done;


    this.tables = this.tables.filter(f => !!f.dishes.find(d => !d.done))
    this.tables$.next(this.tables)
  }

}
