import { Component } from '@angular/core';

@Component({
  selector: 'ngx-landing',
  template: `
  <landing-layout>

  <router-outlet></router-outlet>
  </landing-layout>
  `,
})
export class LandingPageComponent {

}
