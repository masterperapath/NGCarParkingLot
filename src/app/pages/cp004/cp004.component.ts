import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-cp004',
  templateUrl: './cp004.component.html',
  styleUrls: ['./cp004.component.scss']
})
export class Cp004Component implements OnInit{
  title = 'MasterPerapathKanthongCp004Component';

  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  payment() {
    this.router.navigateByUrl("/pages/cp005");
  }

}
