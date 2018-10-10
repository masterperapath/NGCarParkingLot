import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SignComponent } from './sign.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotComponent } from './forgot/forgot.component';

import { from } from 'rxjs';

const routes: Routes = [{
  path: '',
  component: SignComponent,
  children: [{
    path: 'login',
    component: LoginComponent 
  }, {
    path: 'sign-up',
    component: SignUpComponent 
  }, {
    path: 'forgot',
    component: ForgotComponent 
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignRoutingModule {

}

export const SIGN_COMPONENTS = [
  LoginComponent,
  SignUpComponent,
  SignComponent,
  ForgotComponent,

];