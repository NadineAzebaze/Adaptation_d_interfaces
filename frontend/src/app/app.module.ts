import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RecipeComponent} from "./recipe/recipe.component";
import {HomeComponent} from "./home/home.component";
import {RecipesComponent} from "./Recipes/recipes.component";
import {TutorialComponent} from "./tutorial/tutorial.component";

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HomeComponent,
    RecipesComponent,
    TutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
