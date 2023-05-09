import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal.service';

@Component({
  selector: 'test-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() modal: NgbActiveModal | null = null;
  @Output() userDetails = new EventEmitter<any>()
  @Input() title!:string
  @Input() button!:string

  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.createForm()
  }
  createForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/
      )]]
    })
  }
  ngOnInit() {
  
  }
  onCancel() {
    this.modalService.closeModal()
  }
  onSubmit() {
    // Do something with form data
    const userData = this.userForm.getRawValue()
    console.log(userData,"from form")
    this.userDetails.emit(userData)
    
  }

}
