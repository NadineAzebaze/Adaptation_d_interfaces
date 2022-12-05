import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Dish, {DishType} from "../../../models/dish.model";

@Component({
  selector: 'app-type-dish',
  templateUrl: './type-dish.component.html',
  styleUrls: ['./type-dish.component.less']
})
export class TypeDishComponent implements OnInit{
  @Input() dishes!: Dish[]
  @Input() dishType!: string;
  @Output() setDone = new EventEmitter<Dish>();

  constructor() {
  }

  ngOnInit(): void {
  }

  get typeOfDish(): string {
    switch (this.dishType) {
      case DishType.ENTREE: return "entree";
      case DishType.PLAT: return "plat";
      case DishType.DESSERT: return "dessert";
      default: return this.dishType
    }
  }
}
