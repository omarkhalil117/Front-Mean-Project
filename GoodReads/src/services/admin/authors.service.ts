import { AddAuthHeaderService } from './../add-auth-header.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _HTTPClient: HttpClient,
    private auth:AddAuthHeaderService) { }

  displayAuthors():Observable<any>{
    return  this._HTTPClient.get(`${environment.apiurl}/authors`)
  }
  deleteAuthors(id:String):Observable<any>{
    return this._HTTPClient.delete(`${environment.apiurl}/authors/${id}`, this.auth.handleRequestOption())
  }
  addAuthors(body:object):Observable<any>{
    return this._HTTPClient.post(`${environment.apiurl}/authors`,  body , this.auth.handleRequestOption())
  }
  updateAuthors(body:object,id:String):Observable<any>{
    return this._HTTPClient.patch(`${environment.apiurl}/authors/${id}`,  body , this.auth.handleRequestOption())
  }
}
