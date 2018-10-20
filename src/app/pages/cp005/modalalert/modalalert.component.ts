import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ modalContent }}
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="Confirm()">Yes</button>
      <button class="btn btn-md btn-danger" (click)="closeModal()">No</button>
    </div>
  `,
})
export class ModalComponent {

  modalHeader: string;
  modalContent = `ต้องการกลับไปหน้าเริ่มต้นหรือไม่`;

  constructor(private activeModal: NgbActiveModal,
              private router: Router,) { }


  Confirm(){
    this.router.navigateByUrl("/pages/dashboard");
  }

  closeModal() {
    this.activeModal.close();
  }


}