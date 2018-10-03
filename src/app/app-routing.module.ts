import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//routerComponent
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Cp001Component } from './pages/cp001/cp001.component';
import { Cp002Component } from './pages/cp002/cp002.component';
import { Cp003Component } from './pages/cp003/cp003.component';
import { Cp004Component } from './pages/cp004/cp004.component';
import { Cp005Component } from './pages/cp005/cp005.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'cp001',
    component: Cp001Component
  }, {
    path: 'cp002',
    component: Cp002Component
  }, {
    path: 'cp003',
    component: Cp003Component
  }, {
    path: 'cp004',
    component: Cp004Component
  }, {
    path: 'cp005',
    component: Cp005Component
  }, 
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  AppComponent,
  DashboardComponent,
  Cp001Component,
  Cp002Component,
  Cp003Component,
  Cp004Component,
  Cp005Component,
];