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

  private platsPriority: Dish[] = []
  private dessertPriority: Dish[] = []

  constructor(private router: Router) {
    this.generateTable();
  }

  get entrees() {
    let entrees: Dish[] = [];
    this.tables.forEach(table => {
      entrees = entrees.concat(table.dishes.filter(dish => dish.type === DishType.ENTREE))
    })
    return entrees;
  }

  get plats() {
    let plats: Dish[] = this.platsPriority;
    this.tables.forEach(table => {
      plats = plats.concat(table.dishes.filter(dish => dish.type === DishType.PLAT))
    })
    return plats;
  }

  get dessert() {
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
    for (let j = 0; j < this.getRandom(6, min); j++) {
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

  }

  generateTable(): void {
    if (this.tables.length < 7) {
      setTimeout(() => {
        let dishes: Dish[] = []
        this.generateRandomDishes(Entree, dishes)
        this.generateRandomDishes(Plat, dishes, 1)
        this.generateRandomDishes(Dessert, dishes)
        this.tables.push({
          id: this.tables.length + 1,
          dishes: dishes
        })
        this.generateTable();
        this.checkChangeScreen();
      }, this.getRandom(5000, 2000));
    }
  }

  setDoneTable(tableId: number, dishId: number) {
    const table = this.tables.find(t => t.id === tableId)
    if (!table)
      throw "Table null."
    console.log(table,table.dishes)
    const dish = table.dishes.find(d => d.id === dishId)
    if (!dish)
      throw "Dish null."
    dish.done = !dish.done;
    this.changePriority(table, dish)
    this.tables = this.tables.filter(f => !!f.dishes.find(d => !d.done))
    this.tables$.next(this.tables)
    this.checkChangeScreen()
  }

  checkChangeScreen() {
    if (this.tables.length > 6 && this.screen) this.router.navigate(['/busy']).then(_ => this.screen = false)
    if (this.tables.length < 7 && !this.screen) this.router.navigate(['/commands']).then(_ => this.screen = true)
  }

  changePriority(table: Table, dish: Dish) {
    let dishTypeToChangeOrder = dish.type===DishType.ENTREE ? DishType.PLAT : DishType.DESSERT
    if (!table.dishes.find(d => d.type === dish.type && !d.done)) {
        this.filterDish(table, dish.type)
        this.tables.filter(t => {
          if (t.id === table.id) t.dishes = t.dishes.filter(d => d.type !== dishTypeToChangeOrder)
        })
    }
  }

  private filterDish(table: Table, type: DishType) {
    //console.log(table.dishes.filter(dish => dish.type === DishType.PLAT))
    type === DishType.ENTREE ? this.platsPriority.push(...table.dishes.filter(dish => dish.type === DishType.PLAT)) : this.dessertPriority.push(...table.dishes.filter(dish => dish.type === DishType.DESSERT))
    //type === DishType.ENTREE ? this.platsPriority.push(table) : this.dessertPriority.push(table)

  }
}
