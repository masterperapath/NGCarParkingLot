import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../@theme/theme.module';
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
})
export class LandingPageModule { 

}
