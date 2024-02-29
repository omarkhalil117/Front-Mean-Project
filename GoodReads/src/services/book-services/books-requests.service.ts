import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BooksRequestsService {

  constructor(private http : HttpClient) { }

  getBooksWithPagination(page: Number) {
    return this.http.get(`${environment.apiurl}/books/page/${page}`);
  }

  getBook(_id : number) {
    return this.http.get(`${environment.apiurl}/books/${_id}`);
  }

  createBook(data: Object) {
    return this.http.post(`${environment.apiurl}/books`, data);
  }

  deleteBook(id : number) {
    return this.http.delete(`${environment.apiurl}/books/${id}`);
  }

  updateBook(id : number, data: Object) {
    return this.http.patch(`${environment.apiurl}/books/${id}`, data);
  }

  createReview(id : string, data: Object) {
    return this.http.post(`${environment.apiurl}/books/${id}/reviews`, data);
  }
 
  updateUserRate(userId: string, bookId: string, data: any) {
    console.log(data)
    console.log(`${environment.apiurl}/users/${userId}/book?bookId=${bookId}`)
    return this.http.patch(`${environment.apiurl}/users/${userId}/book?bookId=${bookId}`, {rating:data});
  }

}

 