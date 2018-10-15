import { Component } from '@angular/core';
// import { NbButtonComponent } from "@nebular/theme/components/button/button.component";

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
export class Cp002Component {
  title = 'MasterPerapathKanthongCp002Component';
  headerText = 'เลือกประเภทที่จอดรถสำหรับคนจริง';
  // displayDate = new Date().toLocaleDateString();
  displayDate = today;
}


// //NbButtonComponent
// @NbButtonComponent({
//   selector: 'nb-button',
// })
// export class nbButton {
// }

