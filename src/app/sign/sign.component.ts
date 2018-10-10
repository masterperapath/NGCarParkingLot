import { Component } from '@angular/core';

@Component({
  selector: 'sign-pages',
  template: `
  <ngx-two-columns-layout>

  <router-outlet></router-outlet>
  </ngx-two-columns-layout>
  `,
})
export class SignComponent {
}
