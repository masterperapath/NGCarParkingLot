import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { Cp001Component } from './cp001/cp001.component';
import { Cp002Component } from './cp002/cp002.component';
import { Cp003Component } from './cp003/cp003.component';
import { Cp004Component } from './cp004/cp004.component';
import { Cp005Component } from './cp005/cp005.component';
import { CP006Component } from './cp006/cp006.component';
 

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent,
  Cp001Component,
  Cp002Component,
  Cp003Component,
  Cp004Component,
  Cp005Component,
  CP006Component,

];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
