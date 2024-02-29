import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksRequestsService {

  constructor(private http : HttpClient) { }

  getAllbooks() {
    return this.http.get(`http://127.0.0.1:3000/books`);
  }

  getBooksWithPagination(page: Number) {
    return this.http.get(`http://127.0.0.1:3000/books?page=${page}`);
  }

  getBook(_id : number) {
    return this.http.get(`http://127.0.0.1:3000/books/${_id}`);
  }

  createBook(data: Object) {
    return this.http.post(`http://127.0.0.1:3000/books`, data);
  }

  deleteBook(id : string) {
    return this.http.delete(`http://127.0.0.1:3000/books/${id}`);
  }

  updateBook(id : string, data: Object) {
    return this.http.patch(`http://127.0.0.1:3000/books/${id}`, data);
  }

  createReview(id : string, data: Object) {
    return this.http.post(`http://127.0.0.1:3000/books/${id}/reviews`, data);
  }

  updateUserRate(userId: string, bookId: string, data: any) {
    return this.http.post(`http://127.0.0.1:3000/users/${userId}/book/${bookId}`, data);
  }
}
