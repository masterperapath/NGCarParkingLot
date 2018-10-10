import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  title = 'ForgotComponent';

  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  relanding(){
    this.router.navigateByUrl("/landing");
  }
}
