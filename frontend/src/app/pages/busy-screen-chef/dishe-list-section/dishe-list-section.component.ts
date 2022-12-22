import { Component, Inject, Input, OnInit } from '@angular/core';
import Dish from 'src/app/models/dish.model';
@Component({
  selector: 'app-dishe-list-section',
  templateUrl: './dishe-list-section.component.html',
  styleUrls: ['./dishe-list-section.component.less']
})
export class DisheListSectionComponent {
  constructor(){}
  @Input('sectionName') sectionName!: string;
  @Input('dishList') dishList : { id : number, dish : Dish }[] =[];
  
  ngOnInit(): void {
    console.log(this.dishList)
  }
}
