import { AddAuthHeaderService } from './add-auth-header.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthorServicesService {

  constructor(private http : HttpClient,
    private auth:AddAuthHeaderService) { }

  getAuthorWithBooks(id: String)
  {
    return this.http.get(`${environment.apiurl}/authors/${id}`);
  }

  getAllAuthors()
  {
    return this.http.get(`${environment.apiurl}/authors`);
  }


}
