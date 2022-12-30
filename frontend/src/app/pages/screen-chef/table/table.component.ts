import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Table from "../../../models/table.model";
import Dish, {DishType} from "../../../models/dish.model";
import {TableService} from "../../../services/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})

export class TableComponent implements OnInit {
  @Input() table! : Table

  @Input() position!: number;

  @Output() setTableClick = new EventEmitter<number>();
  @Output() tableID = new EventEmitter<number>();
  @Input() busy: boolean = false;

  constructor(public tableService: TableService) {
  }

  get entrees() {
    return this.table.dishes.filter(d => d.type === DishType.ENTREE)
  }
  get plats() {
    return this.table.dishes.filter(d => d.type === DishType.PLAT)
  }
  get dessert() {
    return this.table.dishes.filter(d => d.type === DishType.DESSERT)
  }

  entreesBusy(tables: Table[] | null = null) {
    console.log(this.tableService.entreesBusy(tables))
    return this.tableService.entreesBusy(tables)
  }
  platsBusy(tables: Table[] | null = null) {
    return this.tableService.platsBusy(tables)
  }
  dessertBusy(tables: Table[] | null = null) {
    return this.tableService.dessertsBusy(tables)
  }

  allDishesNotDone(dishes: Dish[], typeDish: string = "") {
    return typeDish!=="" ? dishes.find(dish => !dish.done && dish.type===typeDish) : dishes.find(dish => !dish.done)
  }

  setDoneTable(tableID:number,dishId: number) {
    this.tableService.setDoneTable(tableID, dishId);
  }

  ngOnInit(): void {
  }

}

