import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../@theme/theme.module';
import { LandingPageComponent } from './landingpage.component';
import { LandingRoutingModule, QUESTION_COMPONENTS } from './landingpage-routing.module';


@NgModule({
  imports: [
    LandingRoutingModule,
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    ...QUESTION_COMPONENTS,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LandingPageModule { 

}
