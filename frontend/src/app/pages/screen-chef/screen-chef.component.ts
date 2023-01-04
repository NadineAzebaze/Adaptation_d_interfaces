import {Component, OnDestroy, OnInit} from '@angular/core';
import Table from "../../models/table.model";
import {TableService} from "../../services/table.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-screen-chef',
  templateUrl: './screen-chef.component.html',
  styleUrls: ['./screen-chef.component.less']
})
export class ScreenChefComponent implements OnInit, OnDestroy {

  private subs?: Subscription;
  public tableClick!: number
  constructor(private tableService: TableService) {
    this.subs = tableService.tables$.subscribe(tables => this.tables = tables)
  }

  tables : Table[] = [];

  ngOnInit(): void {
    this.tables = this.tableService.tables
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }

  setPosition(tableId: number) {
    this.tableClick = tableId;
  }

  addTable() {
    this.tableService.generateTable();
  }
}
