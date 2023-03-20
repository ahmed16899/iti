import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {component:HomeComponent , path:''},
  {component:AddComponent , path:'add'},
  {component:UpdateComponent , path:'update/:id'},
  // {component:ErrorComponent , path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
