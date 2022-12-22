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

  public tables: Table[] = [];
  private screen = true;

  entree_lst: {id: number , dish : Dish}[] = [] ; // Those list contain pair {idTable, dishe}
  plat_lst:   {id: number , dish : Dish}[] = [];
  dessert_lst:{id: number , dish : Dish}[] = [];
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
      if (dish) dish.name = dish.name + " x " + (++dish.number);
      else {dishes.push(dishToAdd)}


    }

  }
  generateTable(): void {
    if(this.tables.length < 7){
      setTimeout(() =>{
        let dishes: Dish[] = []
        this.generateRandomDishes(Entree, dishes)
        this.generateRandomDishes(Plat, dishes, 1)
        this.generateRandomDishes(Dessert, dishes)
        this.tables.push({
          id: this.tables.length+1,
          dishes: dishes
        })
        this.generateTable();
        this.checkChangeScreen();
      }, this.getRandom(5000,2000));
    }
  }

  setDoneTable(tableId: number, dishId: number) {
    console.log("icicicicicic")
    const table = this.tables.find(t => t.id === tableId)
    if (!table)
      throw "Table null."
    const dish = table.dishes.find(d => d.id === dishId)
    if (!dish)
      throw "Dish null."
    dish.done = !dish.done;


    this.tables = this.tables.filter(f => !!f.dishes.find(d => !d.done))
    this.tables$.next(this.tables)
    this.checkChangeScreen()
  }

  populateList () {
    this.tables.forEach(curTable => {
      curTable.dishes.forEach(curDish => {
        switch(curDish.type){
          case "ENTREE":{
            this.entree_lst.push({id : curTable.id, dish: curDish})
            break;
          }
          case "PLAT":{
            this.plat_lst.push({id : curTable.id, dish: curDish})
            break;
          }
          case "DESSERT":{
            this.dessert_lst.push({id :curTable.id, dish : curDish})
            break;
          }
        }
      });

    });
  }

  checkChangeScreen() {
    if (this.tables.length > 6 && this.screen) this.router.navigate(['/busy']).then( _ => this.screen = false)
    if (this.tables.length < 7 && !this.screen) this.router.navigate(['/commands']).then(_ => this.screen= true)
  }
}
