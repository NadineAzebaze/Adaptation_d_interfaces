import {Component, OnInit} from '@angular/core';
import TypeDish from "../models/typeDish.model";
import Table from "../models/table.model";

@Component({
  selector: 'app-screen-chef',
  templateUrl: './screen-chef.component.html',
  styleUrls: ['./screen-chef.component.less']
})
export class ScreenChefComponent implements OnInit {

  constructor() { }

  table : Table[] =[];

  ngOnInit(): void {

    for (let i = 0; i < 6; i++) {
      var entree = new TypeDish("entree", ["salade niçoise", "salade de chèvre chaud"])
      var plat = new TypeDish("plat", ["daube", "lasagne", "escalope milanaise"])
      var dessert = new TypeDish("dessert", ["tiramisu", "tropesiene"])
      this.table[i]=new Table(i, [entree, plat, dessert])

    }
  }










}
