import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private http : HttpClient) { }

  getCategoriesList(){
    return this.http.get('http://localhost:3000/categories' , {
      params: {},
      headers: {
        Authorization: 'TOKEN_VALUE_HERE'
      }
    });
  }

  getCategoriesListByUser(id:string){
    return this.http.get(`http://localhost:3000/categories/user/${id}` , {
      params: {},
      headers: {
        Authorization: 'TOKEN_VALUE_HERE'
      }
    });
  }

    getPopularCategory(){
    return this.http.get('http://localhost:3000/categories/popular' , {
      params: {},
      headers: {
        Authorization: 'TOKEN_VALUE_HERE'
      }
    });
  }

  getBooksByCategoryId(id : string){
    return this.http.get(`http://localhost:3000/categories/${id}` , {})
  }


  addCategory(name :any){
    return this.http.post('http://localhost:3000/categories' , {name})
  }
}





