import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient) { }

  displayBooks():Observable<any>{
    return  this._HttpClient.get('http://127.0.0.1:3000/categories')
  }
}
