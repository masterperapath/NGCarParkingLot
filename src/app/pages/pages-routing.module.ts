import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { Cp001Component } from './cp001/cp001.component';
import { Cp002Component } from './cp002/cp002.component';
import { Cp003Component } from './cp003/cp003.component';
import { Cp004Component } from './cp004/cp004.component';
import { Cp005Component } from './cp005/cp005.component';
import { Cp006Component } from './cp006/cp006.component';
import { Cp007Component } from './cp007/cp007.component';
import { Cp008Component } from './cp008/cp008.component'; 
import { Cp009Component } from './cp009/cp009.component';
// import { GetCustomersComponent } from '../get-customers/get-customers.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [ {
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'cp001',
    component: Cp001Component,
  }, {
    path: 'cp002',
    component: Cp002Component,
  }, {
    path: 'cp003',
    component: Cp003Component,
  }, {
    path: 'cp004',
    component: Cp004Component,
  }, {
    path: 'cp005',
    component: Cp005Component,
  }, {
    path: 'cp006',
    component: Cp006Component,
  },{
    path: 'cp007',
    component: Cp007Component,
  },{
    path: 'cp008',
    component: Cp008Component,
  },{
    path: 'cp009',
    component: Cp009Component,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: DashboardComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}