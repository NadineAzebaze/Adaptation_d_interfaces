import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import Dish from 'src/app/models/dish.model';
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
    return this.tableService.entreesBusy
  }
  get plats() {
    return this.tableService.platsBusy
  }
  get dessert() {
    return this.tableService.dessertsBusy
  }

  setDoneTable(tableId: number, dishId: number) {
    this.tableService.setDoneTable(tableId,dishId)
  }

  allDishesNotDone(dishes: Dish[], typeDish: string) {
    return dishes.find(dish => !dish.done && dish.type===typeDish)
  }
}
