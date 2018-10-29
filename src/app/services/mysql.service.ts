import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MysqlService {

  constructor(public _http: Http) {
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

  public getMysqlUsersDatas() {
    // ! Original Code
    /*return this._http.get('http://localhost:4200/#/PHP/get_customers.php')
    .map(rep => rep.json());*/

    return this._http.get('http://localhost:4200/#/PHP/get_customers.php')
    .map((rep:Response) => rep.json());

    /*return this._http.get('http://localhost:4200/#/PHP/get_customers.php')*/
    /*.do(x => console.log(x))**/
  }

  // public getLocalUsersDatas() {
  //   return this._http.get('http://localhost:4200/PHP/sample_data.json')
  //   /* .do(x => console.log(x))**/
  //     .map(rep => rep.json());
  // }

  // public getLocalTextDatas() {
  //   return this._http.get('./assets/read.txt')
  //   /* .do(x => console.log(x))**/
  //     .map(rep => rep.text());
  // }
}

