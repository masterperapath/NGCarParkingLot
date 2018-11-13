import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NbButtonComponent } from "@nebular/theme/components/button/button.component";

import { FormGroup, FormControl, Validators } from '@angular/forms';

var objToday = new Date(),
  weekday = new Array('อาทิตย์','จันทร์','อังคาร','พุธ','พฤหัสบดี','ศุกร์','เสาร์'),
  dayOfWeek = weekday[objToday.getDay()],
  //domEnder = new Array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ),
  dayOfMonth = objToday.getDate(),
  months = new Array('มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'),
  curMonth = months[objToday.getMonth()],
  curYear = objToday.getFullYear()+543,
  curHour = objToday.getHours() /*> 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours())*/,
  curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes();
  //curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
  //curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = "วัน"+dayOfWeek+" ที่ "+dayOfMonth+" "  + " " + curMonth + " " + curYear+ "  เวลา " + curHour + ":" + curMinute;


@Component({
  selector: 'ngx-cp002',
  templateUrl: './cp002.component.html',
  styleUrls: ['./cp002.component.scss'],
})
export class Cp002Component implements OnInit {
  title = 'ระบบจองที่จอดรถ';
  headerText = 'เลือกประเภทที่จอดรถ';
  // displayDate = new Date().toLocaleDateString();
  displayDate = today;

  lotType : any;


  q1: any;
  q2: any;
  q3: any;
  myDateMDY: any;
  time: any;
  timea: any;

  constructor(private router: Router) {
    
  }
  ngOnInit() {
    // this.ismeridian = this.ismeridian;
    this.timea = this.displayDate;
    this.ismeridian = !this.ismeridian;
    // this.time = (<HTMLInputElement>document.getElementById("time")).value;
    // console.log(this.time);

  }

  ismeridian: boolean = true;
 
  mytime: Date = new Date();

  meridians = ['AM', 'PM'];

  // isMeridian = true;

  general() {
    this.lotType = "General";
    this.q1.style.display = "none";
    this.q2.style.display = "block";
    // this.router.navigateByUrl("/pages/cp003");
    }

    defective() {
      this.lotType = "Defective";
      this.q1.style.display = "none";
      this.q2.style.display = "block";
      // this.router.navigateByUrl("/pages/cp006");
    }
  
    vip() {
      this.lotType = "VIP"
      this.q1.style.display = "none";
      this.q2.style.display = "block";
      // this.router.navigateByUrl("/pages/cp007");
    }  

    confirm() {
    console.log()
      this.q2.style.display = "none";
      this.q3.style.display = "block";
    }

    payment() {
      this.router.navigateByUrl("/pages/cp005");
    }

    form = new FormGroup({
      q1: new FormControl(),
      q2: new FormControl(),
      q3: new FormControl(),
      time: new FormControl(),
      timea: new FormControl(),
      // myDateMDY: new FormControl(new Date()),
    });



    ngAfterViewInit() {
      this.q1 = document.getElementById('q1');
      this.q2 = document.getElementById('q2');
      this.q3 = document.getElementById('q3');
      this.timea = document.getElementById('timea');
    }  
}


// //NbButtonComponent
// @NbButtonComponent({
//   selector: 'nb-button',
// })
// export class nbButton {
// }

