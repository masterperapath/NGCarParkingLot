import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';

import { DateComponent } from './component-kendo/date/date.component';
import { ScrollViewComponent } from './component-kendo/scrollView/scrollView.component';
import { MultiSelectComponent } from './component-kendo/multi-select/multi-selectcomponent';

const routes: Routes = [{
  path: '',
  component: FormsComponent,
  children: [{
    path: 'inputs',
    component: FormInputsComponent,
  }, {
    path: 'layouts',
    component: FormLayoutsComponent,
  }, {
    path: 'date',
    component: DateComponent,
  }, {
    path: 'multiselect',
    component: MultiSelectComponent,
  }, {
    path: 'scrollview',
    component: ScrollViewComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {

}

export const routedComponents = [
  FormsComponent,
  FormInputsComponent,
  FormLayoutsComponent,
  DateComponent
];
