import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _HTTPClient: HttpClient) { }
  displayAuthors():Observable<any>{
    return  this._HTTPClient.get('http://127.0.0.1:3000/authors')
  }
  deleteAuthors(id:String):Observable<any>{
    console.log(id)
    return this._HTTPClient.delete(`http://127.0.0.1:3000/authors/${id}`)
  }
  addAuthors(body:object):Observable<any>{
    return this._HTTPClient.post(`http://127.0.0.1:3000/authors`, body)
  }
  updateAuthors(body:object,id:String):Observable<any>{
    return this._HTTPClient.patch(`http://127.0.0.1:3000/authors/${id}`,  body)
  }
}
