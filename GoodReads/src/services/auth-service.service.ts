import { AddAuthHeaderService } from './add-auth-header.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(  private http:HttpClient, private AddAuthHeaderService:AddAuthHeaderService ) { }


  registe(body: Object)  : Observable<any>{

    if(this.AddAuthHeaderService.handleRequestOption()){
      return this.http.post('http://127.0.0.1:3000/users/register',body,this.AddAuthHeaderService.handleRequestOption())
    }
    else{
      return this.http.post('http://127.0.0.1:3000/users/register',body)
    }
    
  }
  
}
