import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../@theme/theme.module';
import { LandingPageComponent } from './landingpage.component';



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    LandingPageComponent,

  ],
})
export class LandingPageModule { }
