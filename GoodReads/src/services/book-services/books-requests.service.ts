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

  getBook(id : number) {
    return this.http.get(`http://127.0.0.1:3000/books/${id}`);
  }

  createBook(data: Object) {
    return this.http.post(`http://127.0.0.1:3000/books`, data);
  }

  deleteBook(ID : number) {
    return this.http.delete(`http://127.0.0.1:3000/books/:${ID}`);
  }

  updateBook(ID : number, data: Object) {
    return this.http.patch(`http://127.0.0.1:3000/books/:${ID}`, data);
  }
}
