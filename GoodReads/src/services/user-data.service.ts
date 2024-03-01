import { AddAuthHeaderService } from './add-auth-header.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http : HttpClient , private header :AddAuthHeaderService) { }

  getUserInfo(userId:String)
  {
  return this.http.get(`${environment.apiurl}/users/${userId}`, this.header.handleRequestOption()) 
  }
}
