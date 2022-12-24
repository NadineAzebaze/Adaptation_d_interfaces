import {Injectable} from '@angular/core';
import Table from "../models/table.model";
import {BehaviorSubject} from "rxjs";
import {Dessert, Entree, Plat} from "../../../../backend/src/mocks/dishes.mock"
import Dish, {DishType} from "../models/dish.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public tables: Table[] = [];
  private screen = true;
  public tables$ = new BehaviorSubject<Table[]>([]);
  private tablePriorityPlat: Table[] = [];
  private tablePriorityDessert: Table[] = []

  constructor(private router: Router) {
    this.generateTable();
  }

  get entreesBusy() {
    let entrees: Dish[]=[];
    this.tables.forEach(table => {
      entrees = entrees.concat(table.dishes.filter(dish => dish.type===DishType.ENTREE))
    })
    return entrees;
  }

  get platsBusy() {
    let plats: Dish[] = []
    this.tables.forEach(table => {
      plats = plats.concat(table.dishes.filter(dish => dish.type === DishType.PLAT))
    })
    return plats;
  }

  get dessertsBusy() {
    let desserts: Dish[] = [];
    this.tables.forEach(table => {
      desserts = desserts.concat(table.dishes.filter(dish => dish.type === DishType.DESSERT))
    })
    return desserts;
  }

  getRandom(indexMax: number, min: number = 0) {
    return Math.floor(Math.random() * (indexMax - min) + min);
  }

  generateRandomDishes(type: Dish[], dishes: Dish[], min: number = 0) {
    const indexMax = Entree.length;
    const numberOfDishes = this.getRandom(6, min);
    for (let j = 0; j < numberOfDishes; j++) {
      const indexRandom = this.getRandom(indexMax);
      const dishToAdd = {
        id: type[indexRandom].id,
        name: type[indexRandom].name,
        type: type[indexRandom].type,
        done: type[indexRandom].done,
        number: 1,
        table: this.tables.length + 1

      };
      const dish = dishes.find(d => d.id == dishToAdd.id);
      if (dish) dish.name = dish.name + " x " + (++dish.number);
      else {
        dishes.push(dishToAdd)
      }
    }
     return numberOfDishes===0 && type[0].type === DishType.ENTREE;

  }

  generateTable(): void {
    if (this.tables.length < 7) {
      setTimeout(() => {
        let dishes: Dish[] = []
        let noEntree = this.generateRandomDishes(Entree, dishes)
        this.generateRandomDishes(Plat, dishes, 1)
        this.generateRandomDishes(Dessert, dishes)
        this.tables.push({
          id: this.tables.length + 1,
          dishes: dishes
        })
        this.generateTable();
        this.checkChangeScreen();
        if (noEntree) {
          this.tablePriorityPlat.push(this.tables[this.tables.length-1])
          this.tables = this.tablePriorityPlat.concat(this.tables.filter(table => this.tablePriorityPlat.indexOf(table) < 0))
        }
      }, this.getRandom(5000, 2000));
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
    if (dish.done) this.changePriority(table, dish)
    this.tables = this.tables.filter(f => !!f.dishes.find(d => !d.done))
    this.checkChangeScreen()
    this.tables$.next(this.tables)
  }

  checkChangeScreen() {
    if (this.tables.length > 6 && this.screen) this.router.navigate(['/busy']).then(_ => this.screen = false)
    if (this.tables.length < 7 && !this.screen) this.router.navigate(['/commands']).then(_ => this.screen = true)
  }

  changePriority(table: Table, dish: Dish) {
    if (!table.dishes.find(d => d.type === dish.type && !d.done)) {
      let tablePriority = dish.type === DishType.ENTREE ? this.tablePriorityPlat : this.tablePriorityDessert
      table.dishes = table.dishes.filter(d => d.type !== dish.type)
      tablePriority.push(table)
      this.tables = tablePriority.concat(this.tables.filter(table => tablePriority.indexOf(table) < 0))
    }
  }
}
