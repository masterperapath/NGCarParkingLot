import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  title = 'SignupComponent';

  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  relanding(){
    this.router.navigateByUrl("/landing");
  }
}
