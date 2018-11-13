import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as frLocale from 'date-fns/locale/fr';
import { DatepickerOptions  } from 'ng2-datepicker';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { DatetimePopupModule } from 'ngx-bootstrap-datetime-popup';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api



@Component({
  selector: 'ngx-cp003',
  templateUrl: './cp003.component.html',
  styleUrls: ['./cp003.component.scss'],
})
export class Cp003Component implements OnInit {
  title = 'ระบบจองที่จอดรถ';
  lotType = 'General';
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM D[,] YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: frLocale,
    minDate: new Date(Date.now()), // Minimal selectable date
    maxDate: new Date(Date.now()),  // Maximal selectable date
    barTitleIfEmpty: 'Click to select a date',
    placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
    addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
  };

  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  confirm() {
    this.router.navigateByUrl("/pages/cp004");
  }

  public txtRequestDateValue: Date = new Date(2018, 4, 28);
}

