import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";

const routes: Routes = [
  //home path
  {
    path:'',
    component:HomeComponent

  },
  //searched  with input variable :
  {
    path:'search-page/:game-search',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
