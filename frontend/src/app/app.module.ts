import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RecipeComponent} from "./recipe/recipe.component";
import {HomeComponent} from "./home/home.component";
import {TutorialComponent} from "./tutorial/tutorial.component";
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './screen-chef/table/table.component';
import { TypeDishComponent } from './screen-chef/table/type-dish/type-dish.component';
import {RecipeStepComponent} from "./recipe-step/recipe-step.component";
import { ScreenChefComponent } from './screen-chef/screen-chef.component';
import {ClerkTaskListComponent} from "./clerk-task-list/clerk-task-list.component";
import {ClerkHeaderComponent} from "./components/clerk-header/clerk-header.component";
import {SidePanelComponent} from "./components/side-panel/side-panel.component";
import {RecipeStepOverviewComponent} from "./components/recipe-step-overview/recipe-step-overview.component";
import {RecipePlayerComponent} from "./components/recipe-player/recipe-player.component";

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HomeComponent,
    TableComponent,
    TypeDishComponent,
    TutorialComponent,
    RecipeStepComponent,
    ScreenChefComponent,
    ClerkTaskListComponent,
    ScreenChefComponent,
    SidePanelComponent,
    ClerkHeaderComponent,
    RecipeStepOverviewComponent,
    RecipePlayerComponent
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
