import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './usign/login/login.component';
import { SignUpComponent } from './usign/sign-up/sign-up.component';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LandingComponent } from './landingPage/landing/landing.component';

import { AppComponent } from './app.component';
import { Cp001Component } from './pages/cp001/cp001.component';
import { Cp002Component } from './pages/cp002/cp002.component';
import { Cp003Component } from './pages/cp003/cp003.component';
import { Cp004Component } from './pages/cp004/cp004.component';
import { Cp005Component } from './pages/cp005/cp005.component';

import { RouterModule } from '@angular/router';
import { NbThemeModule } from '@nebular/theme';
import { NgxTinymceModule } from 'ngx-tinymce';
import { ThemeModule } from './@theme/theme.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './@core/core.module';
import { NbLayoutModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingComponent,
    DashboardComponent,
    Cp001Component,
    Cp002Component,
    Cp003Component,
    Cp004Component,
    Cp005Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),

    NbLayoutModule,
    NbButtonModule,
    NgbModule.forRoot(),
    //  ThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
