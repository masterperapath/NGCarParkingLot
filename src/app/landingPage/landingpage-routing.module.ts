import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing/landing.component';
import { LandingPageComponent } from './landingpage.component';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent,
  children: [
    {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  }
  ,{
    path: 'landing',
    component: LandingComponent 
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {

}

export const QUESTION_COMPONENTS = [
  LandingPageComponent,
  LandingComponent
];