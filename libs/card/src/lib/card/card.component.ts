import { Component, Input ,EventEmitter,Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialComponentsModule } from '@test/material-components';


@Component({
  selector: 'test-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() userDetails!: any;
  // @Input() deleteUser!: (id: any) => Observable<any>
  @Output() passId = new EventEmitter<[any,any,any]>();
  title: any = 'Edit User Details'
  constructor() {

  }
  editUser(id: number) {
    const isEdit = true;
    const isDelete = false;
    this.passId.emit([id, isDelete, isEdit]);
  }
  
  deleteUser(id:number){
    const isEdit = false;
    const isDelete = true;
    this.passId.emit([id, isDelete, isEdit]);
  }

}
