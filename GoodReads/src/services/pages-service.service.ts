import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PagesServiceService {

  res:any;
  constructor(private http : HttpClient) { }

  getUserBooksCount(userId:String)
  {
    this.http.get(`http://localhost:3000/${userId}`).subscribe((data:any)=>{
      this.res = data.fullInfo.books.length;
    })

    return this.res;
  }

  getAuthorPages(pageNum:string)
  {
    return this.http.get(`http://localhost:3000/authors/page/${pageNum}`)
  }
}
