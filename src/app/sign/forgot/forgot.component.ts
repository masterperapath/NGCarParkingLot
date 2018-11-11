import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'ngx-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  title = 'Forgot Password';

  email : any;


  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  form = new FormGroup({
    email : new FormControl(),
    // username: new FormG/roup(),
  });

  send(){
    this.email = (<HTMLInputElement>document.getElementById("email")).value;

    if(this.email == "") {
     alert("กรุณากรอก E-Mail");
    }else{
      this.router.navigateByUrl("/landing");
    }
  }
}
