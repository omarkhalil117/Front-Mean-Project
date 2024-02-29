import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private http : HttpClient) { }

  getCategoriesList(){
    return this.http.get(`${environment.apiurl}/categories`);
  }

  getCategoriesListByUser(id:string){
    return this.http.get(`${environment.apiurl}/categories/user/${id}`);
  }

//test--------------------
  getBooks(page: number,id:string) {
    //const startIndex = (page - 1) * limit;
   // const endIndex = startIndex + limit;
    return this.http.get(`${environment.apiurl}/categories/page/${id}?page=${page}`);
  }
//test------------------
    getPopularCategory(){
    return this.http.get(`${environment.apiurl}/categories/popular`);
  }


  getPopularAuthor(){
    return this.http.get(`${environment.apiurl}/authors/popular`);
  }

  getBooksByCategoryId(id : string){
    return this.http.get(`${environment.apiurl}/categories/${id}` , {})
  }


  addCategory(name :any){
    return this.http.post('http://localhost:3000/categories' , {name})
  }
}





