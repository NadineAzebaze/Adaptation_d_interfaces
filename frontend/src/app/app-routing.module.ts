import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClerkPageComponent} from "./pages/clerk-module/clerk-page/clerk-page.component";
import {ScreenChefComponent} from "./pages/screen-chef/screen-chef.component";

const routes: Routes = [
  {path: 'clerk-page', component:ClerkPageComponent},
  {path: 'commands', component: ScreenChefComponent},
  {path: '', component:ScreenChefComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
