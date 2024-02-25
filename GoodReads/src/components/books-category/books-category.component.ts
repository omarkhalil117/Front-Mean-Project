
import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import {CategoriesApiService } from '../../services/categories-api.service';

@Component({
  selector: 'app-books-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './books-category.component.html',
  styleUrl: './books-category.component.css'
})
export class BooksCategoryComponent {
  books !: Array<Book>;
  categoryname !:String

  constructor(private activateRoute: ActivatedRoute,private categoriesRequests: CategoriesApiService,private router : Router) {}
//hold id param from route using activaterouter
  ngOnInit(){
   // this.activateRoute.paramMap.subscribe({
   //  next:(params)=>{
   //     const id = params.get('categoryId');
   //   console.log('Route parameter id:',id);
  //   }
   // });

    const idfromroute = this.activateRoute.snapshot.params['categoryId'];
    console.log(idfromroute)
    this.categoriesRequests.getBooksByCategoryId(idfromroute).subscribe((res : any) => {this.books = res.booksbycategory; this.categoryname=res.categorycontent.name; console.log(this.books)});
//i need make api-service to get realybook


}
}














