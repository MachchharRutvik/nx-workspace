import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalService } from './modal.service';
// import { ModalPopupComponent } from './modal-popup/modal-popup.component';


@NgModule({
  imports: [CommonModule,NgbModalModule,FormsModule,ReactiveFormsModule],
  declarations: [FormComponent,ModalPopupComponent],
  entryComponents: [FormComponent],
  providers:[ModalService],
  exports:[ModalPopupComponent]
})
export class MaterialComponentsModule { }
