import { Component, OnInit } from '@angular/core';
import { customer } from '../api/customer';
import { MysqlService } from '../services/mysql.service';

@Component({
  moduleId: module.id,
  selector: 'ngx-get-customers',
  templateUrl: './get-customers.component.html',
  styleUrls: ['./get-customers.component.scss']
})
export class GetCustomersComponent implements OnInit {

  customersMysql: customer[];
  usersLocal = [];
  textLocal: String;


  constructor(private _mysqlService: MysqlService) { }

  ngOnInit() {
    this.getCustomersMysql();
    // this.getUsersLocal();
    // this.getTextLocal();
  }

  private getCustomersMysql() {
    this._mysqlService.getMysqlUsersDatas()
      .subscribe(
        res => this.customersMysql = res,
        err => console.error(err.status)
      );
  }

  // private getUsersLocal() {
  //   this._mysqlService.getLocalUsersDatas()
  //     .subscribe(
  //       res => this.usersLocal = res,
  //       err => console.error(err.status)
  //     );
  // }

  // private getTextLocal() {
  //   this._mysqlService.getLocalTextDatas()
  //     .subscribe(
  //       res => this.textLocal = res,
  //       err => console.error(err.status)
  //     );
  // }

}
