import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.mocule';

// import { DatePickerModule, DateInputsModule } from '@progress/kendo-angular-dateinputs'; 
// import { IntlModule } from '@progress/kendo-angular-intl';

import { KendoDateComponent } from './component-kendo/date/date.component';


const components = [
    ...routedComponents,
    KendoDateComponent
];

@NgModule ({
    imports: [
        ThemeModule,
        FormsRoutingModule,
        // DatePickerModule,
        // DateInputsModule,
        // IntlModule,
    ],
    exports: [],
    declarations: [
        components,
    ],
    entryComponents: [
        components,
    ]

})

export class FormsModule {  }