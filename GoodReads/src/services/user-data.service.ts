import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http : HttpClient) { }

  getUserInfo(userId:String)
  {
   return this.http.get(`http://localhost:3000/users/${userId}`) 
  }
}
