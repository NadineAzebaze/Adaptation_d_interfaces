import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'app-clerk-page',
  templateUrl: './clerk-page.component.html',
  styleUrls: ['./clerk-page.component.less']
})
export class ClerkPageComponent implements OnInit {

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
