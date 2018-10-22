import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {

  }
  ngOnInit() {

  }

  // form = new FormGroup({

  // });

  relanding(){
    this.router.navigateByUrl("/landing");
  }

  carparking(){
    this.router.navigateByUrl("/pages/cp002");
  }

  history() {
    this.router.navigateByUrl("/pages/cp009");
  }

}
