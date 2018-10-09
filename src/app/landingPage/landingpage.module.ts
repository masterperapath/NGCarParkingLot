import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../@theme/theme.module';
import { LandingPageComponent } from './landingpage.component';



const LANDING_COMPONENTS = [
  LandingPageComponent,
];
@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    
  ],
  declarations: [
    LANDING_COMPONENTS,

  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LandingPageModule { }
