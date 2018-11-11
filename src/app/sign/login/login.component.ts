import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbLoginComponent } from '@nebular/auth';

import { NbAuthSocialLink } from '@nebular/auth';
import { NbAuthService } from '@nebular/auth';

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'LoginComponent';

  username : any;
  password : any;


  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  form = new FormGroup({
    username : new FormControl(),
    password : new FormControl(),
    // username: new FormG/roup(),
  });

  relanding(){
    this.router.navigateByUrl("/landing");
  }

  Confirm(){
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;


    console.log(this.username, this.password);
    if(this.username == "" || this.password == ""){
      alert("ไม่ช่องใดช่องหนึ่งว่างกรุณากรอกใหม่");
    }else {
      // ใส่ Json ที่นี่
      this.router.navigateByUrl("/pages/dashboard");
    }

  }
}
