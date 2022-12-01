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


  entree = new TypeDish("entree", ["salade niçoise", "salade de chèvre chaud"])
  nbrEntreeDone=0;
  plat = new TypeDish("plat", ["daube", "lasagne", "escalope milanaise"])
  nbrPlatDone=0;
  dessert = new TypeDish("dessert", ["tiramisu", "tropesiene"])
  nbrDessertDone=0;
  table = new Table(this.id, [this.entree, this.plat, this.dessert])

  tableLength = this.entree.dishes.length + this.plat.dishes.length + this.dessert.dishes.length

  constructor() {
  }

  ngOnInit(): void {
  }

  strikeOut(dishId: string) {
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
    if (this.entree.dishes.includes(dish)) {
      this.nbrEntreeDone+=1;
      // @ts-ignore
      if (this.nbrEntreeDone===this.entree.dishes.length) document.getElementById(this.entree.type+this.id).remove()
    } else { // @ts-ignore
      if (this.plat.dishes.includes(dish)) {
        this.nbrPlatDone+=1;
        // @ts-ignore
        if (this.nbrPlatDone===this.plat.dishes.length) document.getElementById(this.plat.type+this.id).remove()
      } else {
        this.nbrDessertDone+=1;
        // @ts-ignore
        if (this.nbrDessertDone===this.dessert.dishes.length) document.getElementById(this.dessert.type+this.id).remove()
      }
    }
  }


}

