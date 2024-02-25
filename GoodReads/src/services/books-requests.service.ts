import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksRequestsService {

  constructor(private http : HttpClient) { }

  getAllbooks() {
    return this.http.get(`http://localhost:3000/books`,{});
  }

  getBook() {
    return this.http.get(`http://127.0.0.1:3000/books`);
  }

  createBook(data: Object) {
    return this.http.post(`http://127.0.0.1:3000/books`, data);
  }

  deleteBook() {
    return this.http.delete(`http://127.0.0.1:3000/books`);
  }

  updateBook(data: Object) {
    return this.http.patch(`http://127.0.0.1:3000/books`, data);
  }
}
