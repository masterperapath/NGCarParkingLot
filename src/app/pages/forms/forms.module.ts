import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';

import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { DateComponent } from './component-kendo/date/date.component';
import { MultiSelectComponent } from './component-kendo/multi-select/multi-selectcomponent';
import { ScrollViewComponent } from './component-kendo/scrollView/scrollView.component';
// import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
// import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

const components = [
  ...routedComponents,
  DateComponent,
  MultiSelectComponent,
  ScrollViewComponent
];

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    DatePickerModule,
    IntlModule,
    DateInputsModule,
    // DropDownsModule,
    // ScrollViewModule
  ],
  exports: [],
  declarations: [
    components
  ],
  entryComponents: [
    components
  ]
})
export class FormsModule { }
