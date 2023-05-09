import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { FormComponent } from './form/form.component';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private userDetailsSubject = new Subject<any>();
  
  constructor(private modal: NgbModal) { }

  openModal(title: string, userDetails: any,button:string) {
    const modalRef = this.modal.open(FormComponent);

    if (userDetails) {
      modalRef.componentInstance.userForm.patchValue({
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        email: userDetails.email,
        mobile: userDetails.mobile
      });
    }

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.button = button
    modalRef.componentInstance.userDetails.subscribe((userData: any) => {
      this.userDetailsSubject.next(userData);
    });
  }

  closeModal() {
    const modalRef = this.modal.dismissAll(FormComponent);
  }

  getUserDetails() {
    return this.userDetailsSubject.asObservable();
  }}
