import { Component, Input } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'test-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss'],
})
export class ModalPopupComponent {

  constructor(private modalService:NgbModal){}
  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
