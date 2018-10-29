import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell  } from 'ng2-smart-table';

import { Router } from '@angular/router';

@Component({
  selector: 'button-cancel',
  template: `
    <button class="btn btn-block btn-outline-danger" (click)="onClick()">X</button>
  `,
})
export class RanderNumberComponent implements ViewCell, OnInit {

  constructor(private router: Router) { }
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
//   @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    // this.renderValue = this.value.toString().toUpperCase();

  }

//   onClick() {
//     this.save.emit(this.rowData);
//   }
}