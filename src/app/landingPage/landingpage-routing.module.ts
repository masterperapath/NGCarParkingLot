import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LandingComponent } from './landing/landing.component';

const routes: Routes = [{
  path: '',
  component: LandingComponent,
  children: [{
    path: 'landing',
     component: LandingComponent,
  },{
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
