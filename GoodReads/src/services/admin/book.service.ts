import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddAuthHeaderService } from '../add-auth-header.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _HTTPClient:HttpClient, private AddAuthHeaderService:AddAuthHeaderService) { }

  displayBooks():Observable<any>{
    return  this._HTTPClient.get('http://127.0.0.1:3000/books',this.AddAuthHeaderService.handleRequestOption())
  }
  deleteBooks(id:String):Observable<any>{
    return this._HTTPClient.delete(`http://127.0.0.1:3000/books/${id}`,this.AddAuthHeaderService.handleRequestOption())
  }
  addBooks(body:object):Observable<any>{
    return this._HTTPClient.post(`http://127.0.0.1:3000/books`,body,this.AddAuthHeaderService.handleRequestOption())
  }
  updateBooks(body:FormData,id:String):Observable<any>{
    return this._HTTPClient.patch(`http://127.0.0.1:3000/books/${id}`,body,this.AddAuthHeaderService.handleRequestOption())
  }
}



