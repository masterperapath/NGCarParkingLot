import { Component, OnInit, Input } from '@angular/core'                              ;
import { Router                   } from '@angular/router'                            ;
import { NgbModal                 } from '@ng-bootstrap/ng-bootstrap'                 ;
import { WINDOW                   } from "../../@theme/layouts/landing/window.service";

@Component({
  selector: 'ngx-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  title = 'LandingComponent';
  public myAngularxQrCode: string = null;
  
  constructor(private router: Router) {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  ngOnInit() {

  }

  dashboard(){
    this.router.navigateByUrl('pages/dashboard');
  }

  login() {
    this.router.navigateByUrl('sign/login');
  }

  signup() {
    this.router.navigateByUrl('sign/sign-up');
  }

  forgot() {
    this.router.navigateByUrl('sign/forgot');
  }

}
