import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MysqlService } from './../../services/mysql.service';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { } from 'rxjs';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  title = 'SignupComponent';

  username: any;
  password: any;
  conf_password: any;
  email: any;

  constructor(private router: Router, private service: MysqlService) {

  }
  ngOnInit() {
    // this.username = (<HTMLInputElement>document.getElementById("username")).value;
    // alert (this.username);
    console.log(this.username);
  }

  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    conf_password: new FormControl(),
    email: new FormControl(),
    // username: new FormG/roup(),
  });

  sign() {
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    this.conf_password = (<HTMLInputElement>document.getElementById("conf_password")).value;
    this.email = (<HTMLInputElement>document.getElementById("email")).value;
    // alert("Username is" + ":" + this.username);
    console.log(this.username, this.password, this.conf_password, this.email);

    if (this.username == "" || this.password == "" || this.conf_password == "" || this.email == "") {

      console.log("ว่าง");
    }
    else if (this.password != this.conf_password) {
      alert("Password and Comfirm password didn't match");
    }
    else {
      // ใส่ Json ที่นี่
      const data = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      this.service.register(data).subscribe(
        res => {
          // const returnData = JSON.parse(res["_body"]);
          // const returnData = res["_body"].json();
          console.log(res);

          // if (returnData.data === "1") 
          // {
          //   alert("Email has been used. Please use another email.");
          // } 
          // else if (returnData.data === "2") 
          // {
          //   alert("Register success.");
          //   this.router.navigate(["/sign/login"]);
          // }
          // else if (returnData.data === "3")
          // {
          //   alert("Username has been used. Please use another username.");
          // }
          // else
          //   alert("Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
          // console.log('res ----->', res);
        }
        
      );
    }
  }
}
