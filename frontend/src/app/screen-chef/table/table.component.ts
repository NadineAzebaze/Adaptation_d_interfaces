import {Component, Input, OnInit} from '@angular/core';
import Table from "../../models/table.model";
import {DishType} from "../../models/dish.model";
import {TableService} from "../../../services/table.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})

export class TableComponent implements OnInit {
  @Input() table! : Table


  constructor(private tableService: TableService) {
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

  setDoneTable(dishId: number) {
    this.tableService.setDoneTable(this.table.id, dishId);
  }

  ngOnInit(): void {
  }
}

