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

  public login (_username: string, _password: string){ //url, {customerID: '', firstName: _firstName, lastName: _lastName, licensePlate: _licensePlate}, {headers: headers}
    // return this._http.post(this._baseUrlController+'Auth/login').map(rep => rep.json());
    const url = this._baseUrlController+'Auth/login';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    _username = _username;
    return this._http.post(url, {username: _username, password: _password}, {headers: headers});//.map(rep => rep.json());
  }

  // _username: string, _password: string, _email:string
  public register (data){ //url, {customerID: '', firstName: _firstName, lastName: _lastName, licensePlate: _licensePlate}, {headers: headers}
    // return this._http.post(this._baseUrlController+'Auth/login').map(rep => rep.json());
    const url = this._baseUrlController+'Auth/register';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    data.headers = headers;
    console.log('Data is :' + data);
    return this._http.post(url, data);//.map(rep => rep.json());
  }
}

