import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if (this.username = ''){
      alert("แจ้งเตือน");
    }

  }

  relanding(){
    this.router.navigateByUrl("/landing");
  }
}
