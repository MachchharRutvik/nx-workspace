import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from '@test/ui';
import { ModalService } from 'libs/material-components/src/lib/modal.service';

@Component({
  selector: 'test-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() modal: NgbActiveModal | null = null;
  @Input() title!:string

  constructor(private modalService:ModalService) { }

  onSubmit() {
    // Do something with form data
    if (this.modal) {
      this.modal.close('Save click');
    }
  }

  onCancel() {
    this.modalService.closeModal()
  }
}
