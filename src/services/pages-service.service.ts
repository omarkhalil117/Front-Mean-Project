import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AddAuthHeaderService } from './add-auth-header.service';

@Injectable({
  providedIn: 'root'
})
export class PagesServiceService {

  res:any;
  constructor(private http : HttpClient,
    private auth : AddAuthHeaderService) { }

  getAuthorPages(userId:any , pageNum:string)
  {
    return this.http.get(`${environment.apiurl}/${userId.id}/authors/page/${pageNum}` , this.auth.handleRequestOption())
  }

  getUserBooksPages(userId:any , pageNum:string)
  {
    console.log(userId)
    return this.http.get(`${environment.apiurl}/users/${userId.id}/page/${pageNum}` , this.auth.handleRequestOption())
  }

  getUserAuthors(page:String , userId:String)
  {
    return this.http.get(`${environment.apiurl}/authors/${userId}/page/${page}` , this.auth.handleRequestOption())
  }
}
