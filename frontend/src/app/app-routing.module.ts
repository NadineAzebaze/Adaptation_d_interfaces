import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClerkPageComponent} from "./pages/clerk-module/clerk-page/clerk-page.component";
import {ScreenChefComponent} from "./pages/screen-chef/screen-chef.component";
import {RoleSelectionPageComponent} from "./pages/role-selection-page/role-selection-page.component";
import {BusyScreenChefComponent} from "./pages/busy-screen-chef/busy-screen-chef.component";

const routes: Routes = [
  {path: '', component:RoleSelectionPageComponent},
  {path: 'home', component:ClerkPageComponent},
  {path: 'commands', component: ScreenChefComponent},
  {path: 'busy', component: BusyScreenChefComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
