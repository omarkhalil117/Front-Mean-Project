import { AddAuthHeaderService } from './../add-auth-header.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient,private AddAuthHeaderService:AddAuthHeaderService) { }

  displayCategories():Observable<any>{
    return  this._HttpClient.get('http://127.0.0.1:3000/categories',this.AddAuthHeaderService.handleRequestOption())
  }
  deleteCategory(id:String):Observable<any>{
    return this._HttpClient.delete(`http://127.0.0.1:3000/categories/${id}`,this.AddAuthHeaderService.handleRequestOption())
  }
  addCategory(body:object):Observable<any>{
    return this._HttpClient.post(`http://127.0.0.1:3000/categories`,  body, this.AddAuthHeaderService.handleRequestOption())
  }
  updateCategory(body:object,id:String):Observable<any>{
    return this._HttpClient.patch(`http://127.0.0.1:3000/categories/${id}`,  body,this.AddAuthHeaderService.handleRequestOption())
  }
}
