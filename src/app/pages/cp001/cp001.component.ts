import { Component, OnInit } from '@angular/core';
import { customer } from '../../api/customer';
import { MysqlService } from '../../services/mysql.service';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'ngx-cp001component',
  templateUrl: './cp001.component.html',
  styleUrls: ['./cp001.component.scss']
})
export class Cp001Component implements OnInit {
  ItemObservable: Observable<any>;
  customersMysql: customer[];
  usersLocal = [];
  textLocal: String;


  constructor(private _mysqlService: MysqlService) { }

  ngOnInit() {
    this.getCustomersMysql();
  }

  public getCustomersMysql() {
    // ! Original Code
    this._mysqlService.getMysqlUsersDatas()
      .subscribe((resp) =>{
          // res => this.customersMysql = res,
          // err => console.error(err.status)
          // console.log('Dataaaaaaa -----> ', resp);
          this.customersMysql = resp;

        }, (error) => {
          console.log('Errorrrrr ----> ', error)
        }
      );
    
  }
}
