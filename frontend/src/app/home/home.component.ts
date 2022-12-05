import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Recipe} from "../models/recipe.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public isApprenti = false;
  public selectedRecipe?: Recipe;
  constructor(public router : Router) {
  }

  ngOnInit(): void {
  }


  changeMode() {
    this.isApprenti = !this.isApprenti;
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(recipe)
  }
}
