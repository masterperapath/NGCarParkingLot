import { Component } from '@angular/core';

var status = 'การชำระเงินสำเร็จ';

@Component({
  selector: 'ngx-cp005',
  templateUrl: './cp005.component.html',
  styleUrls: ['./cp005.component.scss']
})
export class Cp005Component {
  title = 'MasterPerapathKanthongCp005Component';
  titleStatus = status;
}
