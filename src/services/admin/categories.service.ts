import { AddAuthHeaderService } from './../add-auth-header.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient,private AddAuthHeaderService:AddAuthHeaderService) { }

  displayCategories():Observable<any>{
    return  this._HttpClient.get(`${environment.apiurl}/categories`,this.AddAuthHeaderService.handleRequestOption())
  }
  deleteCategory(id:String):Observable<any>{
    return this._HttpClient.delete(`${environment.apiurl}/categories/${id}`,this.AddAuthHeaderService.handleRequestOption())
  }
  addCategory(body:object):Observable<any>{
    return this._HttpClient.post(`${environment.apiurl}/categories`,  body, this.AddAuthHeaderService.handleRequestOption())
  }
  updateCategory(body:object,id:String):Observable<any>{
    return this._HttpClient.patch(`${environment.apiurl}/categories/${id}`,  body,this.AddAuthHeaderService.handleRequestOption())
  }
}
