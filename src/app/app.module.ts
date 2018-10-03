import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AppComponent } from './app.component';
import { Cp001Component } from './pages/cp001/cp001.component';
import { Cp002Component } from './pages/cp002/cp002.component';
import { Cp003Component } from './pages/cp003/cp003.component';
import { Cp004Component } from './pages/cp004/cp004.component';
import { Cp005Component } from './pages/cp005/cp005.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Cp001Component,
    Cp002Component,
    Cp003Component,
    Cp004Component,
    Cp005Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
