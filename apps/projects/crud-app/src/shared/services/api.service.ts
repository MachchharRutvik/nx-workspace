import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http: HttpClient) { }
  baseURL = environment.baseURL
  addUserDetails(userDetails: any) {
    console.log("in Api add user")
    try {
      return this.http.post(this.baseURL, userDetails)
    } catch (error: any) {
      return throwError(() => new Error(error));
    }

  }
  getAllUserDetails() {
    try {
      return this.http.get(this.baseURL)
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }
  getUserDetails(id: any) {
    try {
      return this.http.get(this.baseURL + id)
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }
  deleteUserDetails(id: number) {
    console.log(id, "idsdds")
    try {
      return this.http.delete(this.baseURL + id)
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }
  editUser(user: any, id: any) {
    console.log(user, "api")
    try {
      return this.http.put(this.baseURL+ id, user)
    } catch (error: any) {
      return throwError(() => new Error(error))
    }
  }
}
