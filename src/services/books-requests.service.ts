import { HttpClient } from '@angular/common/http';
import { Binary } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksRequestsService {

  constructor(private http : HttpClient) { }

  getAllbooks() {
    return this.http.get(`${environment.apiurl}/books`);
  }

  getBook() {
    return this.http.get(`${environment.apiurl}/books`);
  }

  createBook(data: Object) {
    return this.http.post(`${environment.apiurl}/books`, data);
  }

  deleteBook() {
    return this.http.delete(`${environment.apiurl}/books`);
  }

  updateBook(data: Object) {
    return this.http.patch(`${environment.apiurl}/books`, data);
  }


}
