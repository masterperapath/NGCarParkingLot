import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../@core/data/smart-table.service';


@Component({
    selector: 'ngx-cp009',
    templateUrl: './cp009.component.html',
    styleUrls: ['./cp009.component.scss'],
  })

  export class Cp009Component implements OnInit {
    title = 'ประวัติการจองที่จอดรถ';

      constructor(private router: Router,
                  private service: SmartTableService,) {
                    const data = this.service.getData();
                    this.source.load(data);
                  }

      ngOnInit() {

      }

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
          // id: {
          //   title: 'ID',
          //   type: 'number',
          //   filter: false,
          // },
          username: {
            title: 'Username',
            type: 'string',
            // filter: false,
          },
          date: {
            title: 'วันและเวลาที่จอง',
            type: 'date',
            // filter: false,
          },
          email: {
            title: 'E-mail',
            type: 'string',
            // filter: false,
          },
          type: {
            title: 'ประเภทการจอง',
            type: 'string',
            // filter: false,
          },
        },
      };


      onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
          event.confirm.resolve();
        } else {
          event.confirm.reject();
        }
      }
  }