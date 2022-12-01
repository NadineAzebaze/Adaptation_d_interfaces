import {Component, Input, OnInit} from '@angular/core';
import Table from "../models/table.model";
import TypeDish from "../models/typeDish.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})

export class TableComponent implements OnInit {
  add =0;

  @Input() id! : number


  entree = new TypeDish("entree",["salade niçoise","salade de chèvre chaud"])
  plat = new TypeDish("plat",["daube","lasagne","escalope milanaise"])
  dessert = new TypeDish("dessert",["tiramisu","tropesiene"])
  table = new Table(this.id,[this.entree,this.plat,this.dessert])

  tableLength = this.entree.dishes.length + this.plat.dishes.length + this.dessert.dishes.length

  constructor() {
  }

  ngOnInit(): void {
  }

  strikeOut(dish: string) {
    // @ts-ignore
    document.getElementById(dish).innerHTML = '<del>' + document.getElementById(dish).textContent + '</del>';
    this.add+=1;
    if(this.add===this.tableLength) this.deleteTable()

  }

  deleteTable(){
    console.log("delete",this.id)

    // @ts-ignore
    document.getElementById("table"+this.id).remove();
  }
}

