import { Component } from '@angular/core';
import { category } from '../../models/category';
import { Book } from '../../models/book';
import {CategoriesApiService } from '../../services/categories-api.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { pipe } from 'rxjs';
import { filter, take} from 'rxjs/operators';




import { BooksRequestsService } from '../../services/books-requests.service';



@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [  RouterLink],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  categories !: Array<category>;
  books !: Array<Book>;
  constructor(private categoriesRequests: CategoriesApiService,private booksRequestsService: BooksRequestsService,private router : Router) {}

  ngOnInit() {
  // this.categoriesRequests.getCategoriesList().subscribe((res :any) => this.categories = res.filter((book:any) => book.rating >  0));
///////////////////////////////////////////////////////////////////////////

this.categoriesRequests.getPopularCategory().subscribe((res :any) =>{return this.categories = res.map((item:any)=>item.category);}) //console.log(this.categories) }  )



////////////////////////////////////////////////////////////////////////////////
    this.booksRequestsService.getAllbooks().subscribe((res:any) => {
      console.log(res);
      return this.books = res.data.books.sort((a: any, b: any) => b.rating - a.rating).slice(0, 5);;

    })
  }

  redirectToBooks(categoryId : string){
    this.router.navigate(['categories' , categoryId])
 }

 redirectToBookDetails(id : number) {
  this.router.navigate(['app-book-details', id]);
}
}
