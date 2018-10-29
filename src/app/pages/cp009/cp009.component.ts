import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { RanderNumberComponent } from './randernumber.component';
import { SmartTableService } from '../../@core/data/smart-table.service';


@Component({
  selector: 'ngx-cp009',
  templateUrl: './cp009.component.html',
  styleUrls: ['./cp009.component.scss'],
})

export class Cp009Component implements OnInit {
  title = 'ประวัติการจองที่จอดรถ';

  constructor(private router: Router,
    private service: SmartTableService, ) {
    // const data = this.service.getData();
    const dataTable = this.data;
    this.source.load(this.data);
    // this.sourceInprogress.load(this.dataProcessing);
  }

  ngOnInit() {

  }

  sourceInprogress: LocalDataSource = new LocalDataSource();
  source: LocalDataSource = new LocalDataSource();


  settings = {
    pager: {
      display: true,
    },
    actions: {
      delete: false, add: false, edit: false
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      // confirmDelete: true,
    },
    columns: {
      No: {
        title: 'ลำดับ',
        type: 'string',
        filter: false,
        width: '5%',
        // renderComponent: RanderNumberComponent,
        // count: true
      },
      // id: {
      //   title: 'ID',
      //   type: 'number',
      //   filter: false,
      // },
      username: {
        title: 'Username',
        type: 'string',
        filter: false,
      },
      email: {
        title: 'E-mail',
        type: 'string',
        filter: false,
      },
      hisdate: {
        title: 'วันและเวลาที่จอง',
        type: 'date',
        // filter: false,
      },
      type: {
        title: 'ประเภทการจอง',
        type: 'string',
        // filter: false,
      },
    },
  };


  data = [{
    No: '1',
    id: 0,
    username: 'admin',
    hisdate: '20 Mar 2018 / 16:00',
    email: '001@gmail.com',
    type: 'vip',
  }, {
    No: '1',
    id: 1,
    username: 'admin',
    hisdate: '15 Dec 2018 / 16:00',
    email: '001@gmail.com',
    type: 'vip',
  }, {
    No: '1',
    id: 2,
    username: 'admin',
    hisdate: '01 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'vip',
  }, {
    No: '1',
    id: 3,
    username: 'admin',
    hisdate: '02 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'general',
  }, {
    No: '1',
    id: 4,
    username: 'admin',
    hisdate: '05 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'general',
  }, {
    No: '1',
    id: 5,
    username: 'admin',
    hisdate: '01 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'vip',
  }, {
    No: '1',
    id: 6,
    username: 'admin',
    hisdate: '06 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'general',
  }, {
    No: '1',
    id: 7,
    username: 'admin',
    hisdate: '07 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'general',
  }, {
    No: '1',
    id: 8,
    username: 'admin',
    hisdate: '08 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'general',
  }, {
    No: '1',
    id: 9,
    username: 'admin',
    hisdate: '15 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'vip',
  }, {
    No: '1',
    id: 10,
    username: 'admin',
    hisdate: '16 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'vip',
  }, {
    No: '1',
    id: 11,
    username: 'admin',
    hisdate: '17 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'vip',
  }, {
    No: '1',
    id: 12,
    username: 'admin',
    hisdate: '22 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'vip',
  }, {
    No: '1',
    id: 13,
    username: 'admin',
    hisdate: '25 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'vip',
  }, {
    No: '1',
    id: 14,
    username: 'admin',
    hisdate: '26 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'general',
  }, {
    No: '1',
    id: 15,
    username: 'admin',
    hisdate: '28 Feb 2018 / 16:00',
    email: '001@gmail.com',
    type: 'general',
  }];


  onNo(event): void {
    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
    alert("1");
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}