import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddAuthHeaderService } from '../add-auth-header.service';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _HTTPClient:HttpClient, private AddAuthHeaderService:AddAuthHeaderService) { }

  displayBooks():Observable<any>{
    return  this._HTTPClient.get(`${environment.apiurl}/books`,this.AddAuthHeaderService.handleRequestOption())
  }
  deleteBooks(id:String):Observable<any>{
    return this._HTTPClient.delete(`${environment.apiurl}/books/${id}`,this.AddAuthHeaderService.handleRequestOption())
  }
  addBooks(body:object):Observable<any>{
    return this._HTTPClient.post(`${environment.apiurl}/books`,body,this.AddAuthHeaderService.handleRequestOption())
  }
  updateBooks(body:FormData,id:String):Observable<any>{
    return this._HTTPClient.patch(`${environment.apiurl}/books/${id}`,body,this.AddAuthHeaderService.handleRequestOption())
  }
}

