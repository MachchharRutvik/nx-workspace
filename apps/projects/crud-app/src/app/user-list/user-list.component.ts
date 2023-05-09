import { Component, OnInit } from '@angular/core';
import { CardModule } from '@test/card';
import { ApiService } from '../../shared/services/api.service'
import { HttpClient } from '@angular/common/http';
import { ModalPopupComponent } from 'libs/material-components/src/lib/modal-popup/modal-popup.component';
import { ModalService } from 'libs/material-components/src/lib/modal.service';
// import { ToastrService } from 'ngx-toastr';
// import { title } from 'process';
// import { error } from 'console';

// import { MatDialog } from "@angular/material/dialog";


@Component({
  selector: 'n-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  constructor(private api: ApiService, private modal: ModalService) {
  }
  ngOnInit() {
    this.getUsersDetails()
  }
  userDetails: any;
  userId: any

  getUsersDetails() {
    this.api.getAllUserDetails().subscribe((res) => {
      console.log("res", res)
      this.userDetails = res
    }, (err) => {
      console.log("error", err)
    })
  }
  addUser() {
    const title = "Add User"
    const button = "Add"
    this.modal.openModal(title, null, button)
    const subscription = this.modal.getUserDetails().subscribe((userDetails: any) => {
      console.log(userDetails, "userDetails in userlist")
      const userDetail = userDetails
      this.api.addUserDetails(userDetail).subscribe((res) => {
        this.modal.closeModal()
        // console.log(res)
        this.getUsersDetails()
        // alert("user added successfully")
        subscription.unsubscribe(); // unsubscribe here
      }, (err) => {
        console.log("error", err)
        this.modal.closeModal()
        alert("Error in adding user")
        subscription.unsubscribe(); // unsubscribe on error as well
      })
    })
  }

  deleteUser(id: number) {
    console.log(id, "id")
    this.api.deleteUserDetails(id).subscribe((res) => {
      const index = this.userDetails.findIndex((user: any) => user.id === id);
      if (index !== -1) {
        this.userDetails.splice(index, 1);
      }
      // alert("user deleted successfully")
    }, (err: any) => {
      console.log(err, "error in delete")
      alert("Error in deleting user")
      this.modal.closeModal()


    })
  }
  editUser(id: number) {
    console.log(id, "edit user detials")
    this.api.getUserDetails(id).subscribe((user) => {
      const title = "Edit user"
      const button = "Update"
      console.log(user, "user")
      this.modal.openModal(title, user, button);
      const subscription = this.modal.getUserDetails().subscribe((user: any) => {
        if (user) {
          this.api.editUser(user, id).subscribe((res) => {
            this.getUsersDetails()
            this.modal.closeModal()
            subscription.unsubscribe()
            // alert("user data updated")
          }, (err) => {
            console.log(err, "error from edituser")
            alert("error in updating user details")
            this.modal.closeModal()

            subscription.unsubscribe()
          })
        }
      })
    })
  }
  getId(id: any, isDelete: any, isEdit: any) {
    this.userId = id
    console.log(id, "evemt Emitter")
    if (isDelete == true) {
      this.deleteUser(id)
    }
    if (isEdit == true) {
      this.editUser(id)
    }
  }
  getUserDetailsFromAddForm(userData: any) {
    console.log(userData, "fromuser list")
  }
}
