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
  tablePriorityPlat: Table[] = [];
  tablePriorityDessert: Table[] = [];

  public busy = false;

  constructor(private router: Router) {
    this.generateAllTables();
  }

  entreesBusy(tables: Table[] | null) {
    let entrees: Dish[]=[];
    let tableList = tables===null ? this.tables : tables!
    tableList.forEach(table => {
      entrees = entrees.concat(table.dishes.filter(dish => dish.type===DishType.ENTREE))
    })
    return entrees;
  }

  platsBusy(tables: Table[] | null) {
    let plats: Dish[] = []
    let tableList = tables===null ? this.tables.filter(table => this.tablePriorityPlat.indexOf(table)<0) : tables!
    tableList.forEach(table => {
      plats = plats.concat(table.dishes.filter(dish => dish.type === DishType.PLAT))
    })
    return plats;
  }

  dessertsBusy(tables: Table[] | null) {
    let desserts: Dish[] = [];
    let tableList = tables===null ? this.tables.filter(table => this.tablePriorityDessert.indexOf(table)<0) : tables!
    tableList.forEach(table => {
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
      if (dish) dish.name = dish.number>1 ? dish.name.slice(0,-1) + (++dish.number) : dish.name + " x " + (++dish.number);
      else {
        dishes.push(dishToAdd)
      }
    }
    return numberOfDishes===0 && type[0].type === DishType.ENTREE;

  }

  generateAllTables(): void {
    if (this.tables.length < 9) {
      setTimeout(() => {
        this.generateTable()
      }, this.getRandom(5000, 2000));
    }
  }

  generateTable(){
    let dishes: Dish[] = []
    let noEntree = this.generateRandomDishes(Entree, dishes)
    this.generateRandomDishes(Plat, dishes, 1)
    this.generateRandomDishes(Dessert, dishes)
    this.tables.push({
      id: this.tables.length + 1,
      dishes: dishes
    })
    this.generateAllTables();
    this.checkChangeScreen();
    if (noEntree ) this.changePriority(this.tables[this.tables.length-1], DishType.ENTREE)
  }

  setDoneTable(tableId: number, dishId: number) {
    const table = this.tables.find(t => t.id === tableId)
    if (!table)
      throw "Table null."

    const dish = table.dishes.find(d => d.id === dishId)
    console.log(dish!.table,table.id, "laaaa")
    if (!dish)
      throw "Dish null."
    dish.done = !dish.done;
    if (dish.done) this.changePriority(table, dish.type)
    this.tables = this.tables.filter(f => !!f.dishes.find(d => !d.done))
    this.checkChangeScreen()
    this.tables$.next(this.tables)
  }

  checkChangeScreen() {
    if (this.tables.length > 6 && this.screen) this.router.navigate(['/busy']).then(_ => {
      this.screen = false;
      this.changeOrderTable(this.tablePriorityPlat);
      this.changeOrderTable(this.tablePriorityDessert);
    })
    if (this.tables.length < 7 && !this.screen) this.router.navigate(['/commands']).then(_ => {
      this.screen = true;
      this.reorderTable();
    })
  }

  changePriority(table: Table, dishType: DishType) {
    if (!table.dishes.find(d => d.type === dishType && !d.done)) {
      let tablePriority = dishType === DishType.ENTREE ? this.tablePriorityPlat : this.tablePriorityDessert
      table.dishes = table.dishes.filter(d => d.type !== dishType)
      tablePriority.push(table)
      this.changeOrderTable(tablePriority)
    }
  }

  changeOrderTable(tablePriority : Table[]){
    if (!this.screen) this.tables = tablePriority.concat(this.tables.filter(table => tablePriority.indexOf(table) < 0))
  }

  private reorderTable() {
    this.tables = this.tables.sort((table1,table2) => table1.id-table2.id)
  }
}
