import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorServicesService {

  constructor(private http : HttpClient) { }

  getAuthorWithBooks(id: String)
  {
    return this.http.get(`http://localhost:3000/authors/${id}`);
  }

  getAllAuthors()
  {
    return this.http.get("http://localhost:3000/authors");
  }


}
