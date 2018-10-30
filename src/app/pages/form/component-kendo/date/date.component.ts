import { Component, OnInit, Input } from '@angular/core';
// import { HEROES } from '../../controller/data/data.component';
// import { Hero } from '../../controller/data-interface/data.component';

import { FormGroup, FormControl, Validators, FormControlName, FormsModule } from '@angular/forms';

@Component({
  selector: 'kendo-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class KendoDateComponent {
        public value: Date = new Date(2000, 2, 10);
}