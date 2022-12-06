import {Injectable} from '@angular/core';
import Table from "../models/table.model";
import {BehaviorSubject} from "rxjs";
import {Entree, Plat, Dessert} from "../../../../backend/src/mocks/dishes.mock"
import Dish from "../models/dish.model";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  public tables: Table[] = []
  public tables$ = new BehaviorSubject<Table[]>([]);

  constructor() {
    this.tables = this.generateTables()
  }

  getRandom(indexMax: number, min: number = 0) {
    return Math.floor(Math.random() * (indexMax - min) + min);
  }

  generateRandomDishes(type: Dish[], dishes: Dish[], min: number = 0){
    var indexMax = Entree.length;
    for (let j = 0; j < this.getRandom(6,min); j++) {
      var indexRandom = this.getRandom(indexMax);
      dishes.push({
        id: type[indexRandom].id,
        name: type[indexRandom].name,
        type: type[indexRandom].type,
        done: type[indexRandom].done
      });
    }

  }


  generateTables(): Table[] {
    var tables = []
    for (let i = 1; i < 7; i++) {
      let dishes: Dish[] = []
      this.generateRandomDishes(Entree,dishes)
      this.generateRandomDishes(Plat,dishes,1)
      this.generateRandomDishes(Dessert,dishes)
      tables.push({
        id: i,
        dishes: dishes
      })
    dishes.forEach(dish => console.log(dish.id,dish.name))
    }


    return tables

  }

  setDoneTable(tableId: number, dishId: number) {
    const table = this.tables.find(t => t.id === tableId)
    if (!table)
      throw "Table null."
    const dish = table.dishes.find(d => d.id === dishId)
    if (!dish)
      throw "Dish null."
    dish.done = true;

    this.tables = this.tables.filter(f => !!f.dishes.find(d => !d.done))
    this.tables$.next(this.tables)
  }

}
