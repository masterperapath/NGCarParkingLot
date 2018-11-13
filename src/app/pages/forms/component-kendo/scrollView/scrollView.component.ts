import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'kendo-date',
    styleUrls: ['./scrollView.component.scss'],
    templateUrl: './scrollView.component.html',
  })
  export class ScrollViewComponent {
    public items: any[] = [
      { title: 'Flower', url: 'http://bit.ly/2cJjYuB' },
      { title: 'Mountain', url: 'http://bit.ly/2cTBNaL' },
      { title: 'Sky', url: 'http://bit.ly/2cJl3Cx' }
    ];
    public width = '100%';
    public height = '500px';
  }
  