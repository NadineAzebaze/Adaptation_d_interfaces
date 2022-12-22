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
  constructor(private commands: TableService) {
    this.subs = commands.tables$.subscribe(tables => this.tables = tables)
  }

  tables : Table[] = [];

  ngOnInit(): void {
    this.tables = this.commands.tables
    /*this.breakpointObserver
      .observe(['(min-width: 650px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) console.log("minnnnnn")
      })*/
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }
}
