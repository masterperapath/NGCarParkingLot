import { Component, OnInit } from '@angular/core';
import { MysqlService } from '../services/mysql.service';

@Component({
  selector: 'ngx-post-customers',
  templateUrl: './post-customers.component.html',
  styleUrls: ['./post-customers.component.scss'],
  providers:[MysqlService],
})
export class PostCustomersComponent implements OnInit {

  constructor(private _mysqlService: MysqlService) { }

  ngOnInit() {
  }

  addCustomer(firstName:string, lastName:string, licensePlate:string){
    if(this._mysqlService.addMysqlCustomersDatas(firstName, lastName, licensePlate)){
      alert('Data Inserted Successfully');
    }
  }

}
