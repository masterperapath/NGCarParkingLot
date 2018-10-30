import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { KendoDateComponent } from './component-kendo/date/date.component';


const routes: Routes = [{
    path: '',
    component: FormsComponent,
    children: [{
        path: 'input',
        component: KendoDateComponent,
    },{
        path: 'date',
        component: KendoDateComponent,
    }]

}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule
    ],
})

export class FormsRoutingModule {

}

export const routedComponents = [
    FormsComponent,
    KendoDateComponent,
]