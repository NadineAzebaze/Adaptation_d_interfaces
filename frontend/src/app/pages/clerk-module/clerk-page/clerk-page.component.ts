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


  /**
   * changing expert mode to apprentice mode
   */
  changeMode() {
    this.isApprenti = !this.isApprenti;
  }

  /**
   * affects the value of the recipe on which we clicked to the parameter recipe of the component
   * @param recipe
   */
  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(recipe)
  }
}
