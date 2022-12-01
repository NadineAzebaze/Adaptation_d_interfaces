import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RecipeComponent} from "./recipe/recipe.component";
import {HomeComponent} from "./home/home.component";
import {TutorialComponent} from "./tutorial/tutorial.component";
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TypeDishComponent } from './table/type-dish/type-dish.component';
import {RecipeStepComponent} from "./recipe-step/recipe-step.component";
import { ScreenChefComponent } from './screen-chef/screen-chef.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HomeComponent,
    TableComponent,
    TypeDishComponent,
    TutorialComponent,
    RecipeStepComponent,
    ScreenChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
