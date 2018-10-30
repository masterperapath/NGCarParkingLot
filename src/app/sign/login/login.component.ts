import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NbLoginComponent } from '@nebular/auth';

import { NbAuthSocialLink } from '@nebular/auth';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'LoginComponent';



  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  relanding(){
    this.router.navigateByUrl("/landing");
  }

  Confirm(){
    this.router.navigateByUrl("/pages/dashboard");
  }
}
