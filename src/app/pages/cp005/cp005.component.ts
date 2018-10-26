import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modalalert/modalalert.component';

//QRCode
import { NgxQRCodeModule } from 'ngx-qrcode2';  
import { QRcodeComponent } from './qrcode/qrcode.component';

import 'style-loader!angular2-toaster/toaster.css';
import { ReadPropExpr } from '@angular/compiler';

var status = 'การชำระเงินสำเร็จ';

@Component({
  selector: 'ngx-cp005',
  templateUrl: './cp005.component.html',
  styleUrls: ['./cp005.component.scss']
})
export class Cp005Component implements OnInit {
  titleStatus = status;

constructor(private toasterService: ToasterService, 
            private router: Router,
            private modalService: NgbModal,){

}
ngxQrcode2    = 'https://www.npmjs.com/package/ngx-qrcode2';

position = 'toast-top-right';
animationType = 'fade';
title = 'Success';
content = `Save Image Success`;
timeout = 5000;
toastsLimit = 5;
type = 'success';

isNewestOnTop = true;
isHideOnClick = true;
isDuplicatesPrevented = false;
isCloseButton = true;

types: string[] = ['default', 'info', 'success', 'warning', 'error'];
animations: string[] = ['fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'];
// positions: string[] = ['toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center',
//   'toast-top-right', 'toast-bottom-right', 'toast-bottom-center', 'toast-bottom-left', 'toast-center'];
config: ToasterConfig;

ngOnInit() {

}

makeToast() {
  this.showToast(this.type, this.title, this.content);
}

private showToast(type: string, title: string, body: string) {
  this.config = new ToasterConfig({
    positionClass: this.position,
    timeout: this.timeout,
    newestOnTop: this.isNewestOnTop,
    tapToDismiss: this.isHideOnClick,
    preventDuplicates: this.isDuplicatesPrevented,
    animation: this.animationType,
    limit: this.toastsLimit,
  });
  const toast: Toast = {
    type: type,
    title: title,
    body: body,
    timeout: this.timeout,
    showCloseButton: this.isCloseButton,
    bodyOutputType: BodyOutputType.TrustedHtml,
  };
  this.toasterService.popAsync(toast);
  this.showLargeModal();
}

showLargeModal() {
  const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
  activeModal.componentInstance.modalHeader = 'Alert';
}
  
}

