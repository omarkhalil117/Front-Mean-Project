import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private http : HttpClient) { }

  getCategoriesList(){
    return this.http.get('' , {
      params: {},
      headers: {
        Authorization: 'TOKEN_VALUE_HERE'
       }
    });
  }


}





