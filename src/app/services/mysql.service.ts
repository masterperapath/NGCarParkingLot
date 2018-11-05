import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MysqlService {
  constructor(public _http: Http) {  }
  private _baseUrlController = 'http://localhost/NGCarParkingLot/src/PHP/index.php/';

  getMysqlUsersDatas() {
    // todo: Try to Connect to controller
    return this._http.get(this._baseUrlController+'User/getAllUser').map(rep => rep.json());
  }

  public addMysqlCustomersDatas(_firstName: string, _lastName: string, _licensePlate:string) {
    const url = 'http://localhost:4200/PHP/post_customers.php';
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(url, {customerID: '', firstName: _firstName, lastName: _lastName, licensePlate: _licensePlate}, {headers: headers})
      .map((res: Response) => res.text())
      .subscribe(res => {
        console.log(res.toString());
      });
  }
}

