import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from '../../api/customer';
import { MysqlService } from '../../services/mysql.service';


@Component({
    selector: 'ngx-cp008',
    templateUrl: './cp008.component.html',
    styleUrls: ['./cp008.component.scss'],
})

export class Cp008Component implements OnInit {
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
            .subscribe(
                res => this.customersMysql = res,
                err => console.error(err.status)
            );

    }
}