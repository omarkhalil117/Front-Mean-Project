import { AddAuthHeaderService } from './add-auth-header.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {
   }
   login(body: any, role:string)  : Observable<any>{
    body.role=role
    return this.http.post('http://127.0.0.1:3000/users/login',body)
  }
  getUser(id: any)  : Observable<any>{
    return this.http.get(`http://127.0.0.1:3000/users/${id}`)
  }
}
