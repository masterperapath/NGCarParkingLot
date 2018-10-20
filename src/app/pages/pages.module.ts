//import Library
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { ToasterModule } from 'angular2-toaster';


//import Sub_Page
import { ModalComponent } from './cp005/modalalert/modalalert.component';

//import Page
import { DashboardComponent } from './dashboard/dashboard.component';
import { Cp001Component } from './cp001/cp001.component';
import { Cp002Component } from './cp002/cp002.component';
import { Cp003Component } from './cp003/cp003.component';
import { Cp004Component } from './cp004/cp004.component';
import { Cp005Component } from './cp005/cp005.component';
import { Cp006Component } from './cp006/cp006.component';
import { Cp007Component } from './cp007/cp007.component';
  

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent,
  Cp001Component,
  Cp002Component,
  Cp003Component,
  Cp004Component,
  Cp005Component,
  Cp006Component,
  Cp007Component,
  ModalComponent,

];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    ToasterModule.forRoot(),
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  entryComponents: [
    ModalComponent,

  ]
  
})
export class PagesModule {
}
