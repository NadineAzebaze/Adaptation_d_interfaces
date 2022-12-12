import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClerkPageComponent} from "./pages/clerk-module/clerk-page/clerk-page.component";
import {ScreenChefComponent} from "./pages/screen-chef/screen-chef.component";
import {RoleSelectionPageComponent} from "./pages/role-selection-page/role-selection-page.component";

const routes: Routes = [
  {path: 'clerk', component:ClerkPageComponent},
  {path: 'commands', component: ScreenChefComponent},

  {path: '', component:RoleSelectionPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
