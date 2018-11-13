import { Component, ViewEncapsulation } from '@angular/core';
import { IntlService } from '@progress/kendo-angular-intl';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

@Component({
    selector: 'kendo-date',
    styleUrls: ['./date.component.scss'],
    templateUrl: './date.component.html',
  })
  export class DateComponent {
    public value: Date = new Date(2000, 2, 10);
  }
  