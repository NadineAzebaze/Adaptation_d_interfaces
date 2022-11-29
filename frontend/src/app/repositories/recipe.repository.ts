import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import Recipe from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeRepository {
  recipes: Recipe[] = []
  subject: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);

  constructor(private http: HttpClient) { }

  async fetchRecipes() {
  }

  async fetchRecipe(id: String) {}

  getRecipe(id: String) {
    return this.recipes.find(r => r.id === id);
  }
}
