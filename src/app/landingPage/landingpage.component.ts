import { Component } from '@angular/core';

@Component({
  selector: 'landing-pages',
  template: `
  <ngx-three-columns-layout>

  <router-outlet></router-outlet>
  </ngx-three-columns-layout>
  `,
})
export class LandingPageComponent {
}
