import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { QRCodeModule } from 'angularx-qrcode';

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'qra-root',
    templateUrl: './qrcode.component.html',
    styleUrls: ['./qrcode.component.scss']
  })


  export class QRcodeComponent {

    public QRCodedata: string = null;

    constructor(private router: Router,) { 
      this.QRCodedata = 'https://web.facebook.com/MasTerPZa';
    }

  
  }