import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagesServiceService {

  res:any;
  constructor(private http : HttpClient) { }

  getUserBooksCount(userId:String)
  {
    this.http.get(`${environment.apiurl}/${userId}`).subscribe((data:any)=>{
      this.res = data.fullInfo.books.length;
    })

    return this.res;
  }

  getAuthorPages(pageNum:string)
  {
    return this.http.get(`${environment.apiurl}/authors/page/${pageNum}`)
  }

  getUserBooksPages(userId:string , pageNum:string)
  {
    return this.http.get(`${environment.apiurl}/users/${userId}/page/${pageNum}`)
  }

  getUserAuthors(page:String , userId:String)
  {
    return this.http.get(`${environment.apiurl}/authors/${userId}/page/${page}`)
  }
}
