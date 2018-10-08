import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
   // <span class="created-by"><b><a href="https://www.youtube.com/channel/UChSTzaJv2bjZUYEG4YJ52uw?view_as=subscriber" target="_blank">Test</a></b></span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="https://web.facebook.com/MasTerPZa" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
