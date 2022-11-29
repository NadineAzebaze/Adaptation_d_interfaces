import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RecipeComponent} from "./recipe/recipe.component";
import {HomeComponent} from "./home/home.component";
import {TutorialComponent} from "./tutorial/tutorial.component";
import { HttpClientModule } from '@angular/common/http';
import {RecipeStepComponent} from "./recipe-step/recipe-step.component";

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HomeComponent,
    TutorialComponent,
    RecipeStepComponent
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
