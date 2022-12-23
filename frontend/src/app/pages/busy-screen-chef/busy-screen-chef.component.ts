import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import Dish, {DishType} from 'src/app/models/dish.model';
import Table from 'src/app/models/table.model';
import {TableService} from 'src/app/services/table.service';

@Component({
  selector: 'app-busy-screen-chef',
  templateUrl: './busy-screen-chef.component.html',
  styleUrls: ['./busy-screen-chef.component.less']
})
export class BusyScreenChefComponent {
  private subs?: Subscription;

  tables! : Table  []; // Observer





  constructor(private tableService :TableService){
    this.subs = tableService.tables$.subscribe(tables => {this.tables = tables})

  }

  ngOnInit(): void {
    this.tables = this.tableService.tables;
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }

  get entrees() {
    let entrees: Dish[]=[];
    this.tables.forEach(table => {
      entrees = entrees.concat(table.dishes.filter(dish => dish.type===DishType.ENTREE))
    })
    return entrees;
  }
  get plats() {
    return this.tableService.plats
    /*let plats: Dish[]=[];
    this.tables.forEach(table => {
      plats = plats.concat(table.dishes.filter(dish => dish.type===DishType.PLAT))
    })
    return plats;*/
  }
  get dessert() {
    return this.tableService.dessert
  }

  setDoneTable(tableId: number, dishId: number) {
    this.tableService.setDoneTable(tableId,dishId)
  }

  allDishesNotDone(dishes: Dish[], typeDish: string) {
    return dishes.find(dish => !dish.done && dish.type===typeDish)
  }
}
