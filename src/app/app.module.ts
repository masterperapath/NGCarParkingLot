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

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbButtonModule } from '@nebular/theme/components/button/button.module';
import { NbCardModule } from "@nebular/theme/components/card/card.module";
import { NbInputModule } from "@nebular/theme";
import { NgDatepickerModule } from 'ng2-datepicker';
import { LandingPageComponent } from './landingPage/landingpage.component';
const PAGES_COMPONENTS = [

];
@NgModule({
  declarations: [AppComponent],
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
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
