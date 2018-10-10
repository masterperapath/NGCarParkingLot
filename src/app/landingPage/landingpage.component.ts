import { Component } from '@angular/core';

@Component({
  selector: 'landing-pages',
  template: `
  <ngx-sample-layout>

  <router-outlet></router-outlet>
  </ngx-sample-layout>
  `,
})
export class LandingPageComponent {
}
