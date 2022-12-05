import {Component, Input, OnInit} from '@angular/core';
import Table from "../../models/table.model";
import TypeDish from "../../models/typeDish.model";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})

export class TableComponent implements OnInit {
  dishesDone = 0;

  @Input() id!: number

  @Input() table! : Table

  nbrEntreeDone=0;
  nbrPlatDone=0;
  nbrDessertDone=0;
  constructor() {
  }

  entrees! : TypeDish
  plats! : TypeDish
  desserts! : TypeDish
  tableLength = 0;


  ngOnInit(): void {
    console.log(this.table)
    this.entrees = this.table.alldishes[0]
    this.plats = this.table.alldishes[1]
    this.desserts = this.table.alldishes[2]
    this.tableLength = this.entrees.dishes.length + this.plats.dishes.length + this.desserts.dishes.length
  }

  strikeOut(dishId: string) {
    console.log(dishId)
    // @ts-ignore
    var dish = document.getElementById(dishId).textContent
    // @ts-ignore
    document.getElementById(dishId).innerHTML = '<del>' + dish + '</del>';
    // @ts-ignore
    this.checkIfDeleteDish(dish)
    this.dishesDone += 1;
    if (this.dishesDone === this.tableLength) this.deleteTable()

  }

  deleteTable() {
    // @ts-ignore
    var firstIndex = document.getElementsByTagName("app-table")[0].attributes["ng-reflect-id"].value
    document.getElementsByTagName("app-table")[this.id - firstIndex].remove()
    // @ts-ignore
    var allCommands = document.getElementsByClassName("allCommands")[this.id - firstIndex]

    // @ts-ignore
    allCommands.style["grid-template-columns"] = "repeat(3,1fr)"

  }

  checkIfDeleteDish(dish:string) {
    // @ts-ignore
    if (this.entrees.dishes.includes(dish)) {
      this.nbrEntreeDone+=1;
      // @ts-ignore
      if (this.nbrEntreeDone===this.entrees.dishes.length) document.getElementById(this.entrees.type+this.id).remove()
    } else { // @ts-ignore
      if (this.plats.dishes.includes(dish)) {
        this.nbrPlatDone+=1;
        // @ts-ignore
        if (this.nbrPlatDone===this.plats.dishes.length) document.getElementById(this.plats.type+this.id).remove()
      } else {
        this.nbrDessertDone+=1;
        // @ts-ignore
        if (this.nbrDessertDone===this.desserts.dishes.length) document.getElementById(this.desserts.type+this.id).remove()
      }
    }
  }


}

