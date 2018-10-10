import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../@theme/theme.module';
import { SignRoutingModule, SIGN_COMPONENTS } from './sign-routing.module';

@NgModule({
  imports: [
    SignRoutingModule,
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    ...SIGN_COMPONENTS,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SignModule { 

}
