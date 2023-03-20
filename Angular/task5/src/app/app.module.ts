import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    UpdateComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
