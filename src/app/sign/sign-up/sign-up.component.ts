import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  title = 'SignupComponent';

  username : any;
  password : any;
  conf_password : any;
  email : any;

  constructor(private router: Router) {

  }
  ngOnInit() {
    // this.username = (<HTMLInputElement>document.getElementById("username")).value;
      // alert (this.username);
      console.log(this.username);
  }

  form = new FormGroup({
    username : new FormControl(),
    password : new FormControl(),
    conf_password : new FormControl(),
    email : new FormControl(),
    // username: new FormG/roup(),
  });

  sign(){
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;
    this.conf_password = (<HTMLInputElement>document.getElementById("conf_password")).value;
    this.email = (<HTMLInputElement>document.getElementById("email")).value;
    // alert("Username is" + ":" + this.username);
    console.log(this.username, this.password, this.conf_password, this.email);

    if (this.username == "" || this.password == "" || this.conf_password == "" || this.email == ""){
      
      console.log("ว่าง");
    }
    else{
      // ใส่ Json ที่นี่
      this.router.navigateByUrl("/landing");
    }
  }
}
