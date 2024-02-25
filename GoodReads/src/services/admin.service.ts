import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) {
   }
   login(body: Object)  : Observable<any>{
    return this.http.post('http://127.0.0.1:3000/users/login',body)
  }
}
