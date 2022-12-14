import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import Table from 'src/app/models/table.model';
import {TableService} from 'src/app/services/table.service';

@Component({
  selector: 'app-busy-screen-chef',
  templateUrl: './busy-screen-chef.component.html',
  styleUrls: ['./busy-screen-chef.component.less']
})
export class BusyScreenChefComponent {
  private subs?: Subscription;
  tables! : Table  [];
  public tableClick!: number
  constructor(public tableService :TableService){
    this.subs = tableService.tables$.subscribe(tables => {this.tables = tables})
  }

  ngOnInit(): void {
    this.tables = this.tableService.tables;
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }

  entrees(tables: Table[] | null = null) {
    return this.tableService.entreesBusy(tables)
  }
  plats(tables: Table[] | null = null) {
    return this.tableService.platsBusy(tables)
  }
  dessert(tables: Table[] | null = null) {
    return this.tableService.dessertsBusy(tables)
  }

  setPosition(tableId: number) {
    this.tableClick = tableId;
  }

  addTable() {
    this.tableService.generateTable();
  }
}
