import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ClerkPageComponent} from "./pages/clerk-module/clerk-page/clerk-page.component";
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './pages/screen-chef/table/table.component';
import { TypeDishComponent } from './pages/screen-chef/table/type-dish/type-dish.component';
import { ScreenChefComponent } from './pages/screen-chef/screen-chef.component';
import {ClerkTaskListComponent} from "./pages/clerk-module/components/clerk-task-list/clerk-task-list.component";
import {ClerkHeaderComponent} from "./pages/clerk-module/components/clerk-header/clerk-header.component";
import {SidePanelComponent} from "./components/side-panel/side-panel.component";
import {RecipePlayerComponent} from "./pages/clerk-module/components/recipe-player/recipe-player.component";
import {RecipeStepComponent} from "./pages/clerk-module/components/recipe-step/recipe-step.component";
import { RoleSelectionPageComponent } from './pages/role-selection-page/role-selection-page.component';
import { ChangeModButtonComponent } from './components/change-mod-button/change-mod-button.component';
import {BusyScreenChefComponent} from "./pages/busy-screen-chef/busy-screen-chef.component";
import { RecipeItemComponent } from './pages/clerk-module/components/recipe-item/recipe-item.component';
import { FormatTimePipe } from './pipes/format-time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ClerkPageComponent,
    TableComponent,
    TypeDishComponent,
    RecipePlayerComponent,
    RecipeStepComponent,
    ScreenChefComponent,
    ClerkTaskListComponent,
    ScreenChefComponent,
    SidePanelComponent,
    ClerkHeaderComponent,
    RoleSelectionPageComponent,
    BusyScreenChefComponent,
    ChangeModButtonComponent,
    RecipeItemComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
