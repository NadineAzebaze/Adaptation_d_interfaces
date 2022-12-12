import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import Dish from 'src/app/models/dish.model';
import Table from 'src/app/models/table.model';
import { TableService } from 'src/app/services/table.service';
@Component({
  selector: 'app-busy-screen-chef',
  templateUrl: './busy-screen-chef.component.html',
  styleUrls: ['./busy-screen-chef.component.less']
})
export class BusyScreenChefComponent {
  private subs?: Subscription;
  
  tableList : Table  []= [] ; // Observer 
  
  entree_lst: {id: number , dish : Dish}[] = [] ; // Those list contain pair {idTable, dishe}
  plat_lst:   {id: number , dish : Dish}[] = []; 
  dessert_lst:{id: number , dish : Dish}[] = []; 
  
  constructor(private commands :TableService){
    this.subs = commands.tables$.subscribe(table => this.tableList = table)
    this.populateList()
  }

  ngOnInit(): void {
    this.tableList = this.commands.tables
    this.populateList()
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }
  private  populateList () {
    
    this.tableList = this.commands.tables
    console.log("Table list ")
    console.log(this.tableList)
    console.log("comandes list ")
    console.log(this.commands.tables)
    this.tableList.forEach(curTable => {
      console.log("itterate")
      curTable.dishes.forEach(curDish => {
          switch(curDish.type){
            case "ENTREE":{
              this.entree_lst.push({id : curTable.id, dish: curDish})
              break;
            }
            case "PLAT":{
              this.plat_lst.push({id : curTable.id, dish: curDish})
              break;
            }
            case "DESSERT":{
              this.dessert_lst.push({id :curTable.id, dish : curDish})
              break;
            }
          }       
      });
      
    });
  }
}
