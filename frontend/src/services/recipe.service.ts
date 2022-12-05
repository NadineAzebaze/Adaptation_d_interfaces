import {Injectable} from "@angular/core";
import {Recipe} from "../app/models/recipe.model";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  recipes: Recipe[] = [];
  subject = new BehaviorSubject<Recipe[]>([]);

  constructor(private http: HttpClient) {
    this.retrieveRecipes();
  }

  retrieveRecipes(): void {
    this.http.get<Recipe[]>("http://localhost:3000/recipe").subscribe((recipes) => {
      this.recipes = recipes;
      this.subject.next(this.recipes);
    });
  }
}
