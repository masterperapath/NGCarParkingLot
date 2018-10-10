import { Component } from '@angular/core';

@Component({
  selector: 'landing-pages',
  template: `
  <ngx-two-columns-layout>

  <router-outlet></router-outlet>
  </ngx-two-columns-layout>
  `,
})
export class LandingPageComponent {
}
