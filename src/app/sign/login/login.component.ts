import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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
}
