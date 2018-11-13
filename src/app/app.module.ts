/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// * Generate QR Code
import { QRCodeModule } from 'angularx-qrcode';

import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { MysqlService } from './services/mysql.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbButtonModule } from '@nebular/theme/components/button/button.module';
import { NbCardModule } from "@nebular/theme/components/card/card.module";
import { NbInputModule } from "@nebular/theme";
import { NgDatepickerModule } from 'ng2-datepicker';
import { LandingPageComponent } from './landingPage/landingpage.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

// import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
// import { CalendarModule } from '@progress/kendo-angular-dateinputs';
// import { IntlModule } from '@progress/kendo-angular-intl';

// import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
// import { AutoCompleteModule } from '@progress/kendo-angular-dropdowns';
// import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
// import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
// import { LandingPageComponent } from './landingPage/landingpage.component';
// import {MysqlService} from './services/mysql.service';
// import { GetCustomersComponent } from './get-customers/get-customers.component';
// import { PostCustomersComponent } from './post-customers/post-customers.component';

// * import Http module
import { HttpModule } from '@angular/http';



const PAGES_COMPONENTS = [

];
@NgModule({
  declarations: [AppComponent,/* GetCustomersComponent, PostCustomersComponent*/],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbButtonModule,
    NbInputModule,
    NgDatepickerModule,
    NbCardModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    QRCodeModule,
    SweetAlert2Module.forRoot(),


    // DatePickerModule,
    // DateInputsModule,
    // CalendarModule,
    // IntlModule,
    HttpModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    MysqlService
  ],
})
export class AppModule {
}
