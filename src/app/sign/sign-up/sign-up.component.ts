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

  constructor(private router: Router) {

  }
  ngOnInit() {


  }

  form = new FormGroup({
    Cancel: new FormControl(),
    searchG1: new FormControl(),
    searchG2: new FormControl(),
    txtCommonInfo: new FormControl(),
    txtRequestDate: new FormControl(),
    txtExpireDate: new FormControl(),
    listServiceType: new FormControl(),
    listUrgentLevel: new FormControl(),
    listPriority: new FormControl(),
    activeButton: new FormControl(),
    criteriaSearchHide: new FormControl(),
    criteriaSearchShow: new FormControl(),
    criteriaSearch: new FormControl(),
    // username: new FormG/roup(),
  });

  sign(){
    if (this.username = ''){
      alert("แจ้งเตือน");
    }
    else{
      this.router.navigateByUrl("/landing");
    }
  }
}
