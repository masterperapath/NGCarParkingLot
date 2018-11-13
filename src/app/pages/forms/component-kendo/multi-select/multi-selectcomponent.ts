import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'kendo-date',
    styleUrls: ['./multi-select.component.scss'],
    templateUrl: './multi-select.component.html',
  })
  export class MultiSelectComponent {
    public listItems: Array<string> = [
      'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
      'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];
  public value = ['Basketball', 'Cricket'];
  }
  