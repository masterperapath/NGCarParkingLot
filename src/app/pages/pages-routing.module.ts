import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LandingComponent } from '../landingPage/landing/landing.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'landing',
     component: LandingComponent,
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: '',
    redirectTo: 'iot-dashboard',
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