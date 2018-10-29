//import Library
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName, FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { ToasterModule } from 'angular2-toaster';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../@core/data/smart-table.service';

// * import provider
import {MysqlService} from '../services/mysql.service';

//QRCode
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angularx-qrcode';

//import Sub_Page
import { ModalComponent } from './cp005/modalalert/modalalert.component';
import { QRcodeComponent } from './cp005/qrcode/qrcode.component';
import { RanderNumberComponent } from './cp009/randernumber.component';

//import Page
import { DashboardComponent } from './dashboard/dashboard.component';
import { Cp001Component } from './cp001/cp001.component';
import { Cp002Component } from './cp002/cp002.component';
import { Cp003Component } from './cp003/cp003.component';
import { Cp004Component } from './cp004/cp004.component';
import { Cp005Component } from './cp005/cp005.component';
import { Cp006Component } from './cp006/cp006.component';
import { Cp007Component } from './cp007/cp007.component';
import { Cp008Component } from './cp008/cp008.component';
import { Cp009Component } from './cp009/cp009.component';
// import { GetCustomersComponent } from '../get-customers/get-customers.component';
// import { PostCustomersComponent } from '../post-customers/post-customers.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  DashboardComponent,
  Cp001Component,
  Cp002Component,
  Cp003Component,
  Cp004Component,
  Cp005Component,
  Cp006Component,
  Cp007Component,
  Cp008Component,
  Cp009Component,
  ModalComponent,
  QRcodeComponent,
  RanderNumberComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    ToasterModule.forRoot(),
    // TablesRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    NgxQRCodeModule,
    QRCodeModule,
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  entryComponents: [
    ModalComponent,

  ],
  providers: [
    SmartTableService,MysqlService
  ],
  
})
export class PagesModule {
}
