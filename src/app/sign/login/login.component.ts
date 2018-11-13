import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import swal, { SweetAlertOptions } from 'sweetalert2';
import { NbAuthSocialLink } from '@nebular/auth';
import { NbAuthService } from '@nebular/auth';
import { MysqlService } from './../../services/mysql.service';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { ModalAlComponent } from './modalalert/modalalert.component';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'LoginComponent';

  username : any;
  password : any;


  constructor(private router: Router, 
              private service:MysqlService, 
              private modalService: NgbModal) {
  
  }
  ngOnInit() {

  }

  form = new FormGroup({
    username : new FormControl(),
    password : new FormControl(),
    // username: new FormG/roup(),
  });

  relanding(){
    this.router.navigateByUrl("/landing");
  }

  Confirm(){
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    this.password = (<HTMLInputElement>document.getElementById("password")).value;

    let data = {
      "username": this.username,
      "password": this.password
    }

    console.log(this.username, this.password);
    if(this.username == "" || this.password == ""){
      // alert("ไม่ช่องใดช่องหนึ่งว่างกรุณากรอกใหม่");
    } else {
      // ใส่ Json ที่นี่
      
      this.service.login(this.username, this.password).subscribe(res=>{
        const returnData = JSON.parse(res["_body"]);
        // console.log(returnData.status);
        if (returnData.status) {
          this.router.navigate(["/pages/dashboard"]);
        } else {
          this.router.navigate(["/sign/login"]);
          alert("Username or Password Incorrect");
        }
      });
    }

  }
  
  showLargeModal() {
    console.log("in");
    const activeModal = this.modalService.open(ModalAlComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Alert';
  }
  
    
  }
  
