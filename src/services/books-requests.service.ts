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
}
