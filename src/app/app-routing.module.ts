import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'update/id', component: UpdateComponent},
  {path: '',redirectTo: 'home', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
