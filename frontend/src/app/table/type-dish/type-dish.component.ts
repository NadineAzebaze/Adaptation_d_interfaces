import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-type-dish',
  templateUrl: './type-dish.component.html',
  styleUrls: ['./type-dish.component.less']
})
export class TypeDishComponent implements OnInit{
  ngOnInit(): void {
  }

  @Input() dishclass: string='';

  @Input() dishesList!: string[];



}
