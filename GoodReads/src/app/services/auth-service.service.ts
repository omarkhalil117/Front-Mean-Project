
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(  private http:HttpClient ) { }


  registe(body: Object)  : Observable<any>{
    return this.http.post('http://127.0.0.1:3000/users/register',body)
  }
}
