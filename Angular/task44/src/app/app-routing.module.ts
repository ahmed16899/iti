import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {component:HomeComponent , path:''},
  {component:DetailsComponent , path:'details/:id'},
  {component:StudentsComponent , path:'students'},
  {component:ErrorComponent , path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
