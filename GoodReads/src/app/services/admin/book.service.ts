import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _HTTPClient:HttpClient) { }

  displayBooks():Observable<any>{
    return  this._HTTPClient.get('http://127.0.0.1:3000/books')
  }
  deleteBooks(id:String):Observable<any>{
    return this._HTTPClient.delete(`http://127.0.0.1:3000/books/${id}`)
  }
  addBooks(body:object):Observable<any>{
    return this._HTTPClient.post(`http://127.0.0.1:3000/books`,  body)
  }
  updateBooks(body:FormData,id:String):Observable<any>{
    return this._HTTPClient.patch(`http://127.0.0.1:3000/books/${id}`,  body)
  }
}
