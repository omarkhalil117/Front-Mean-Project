import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { Books } from '../../models/books';
import { Authors } from '../../models/authors';
import {CategoriesApiService } from '../../services/categories-api.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { BooksRequestsService } from '../../services/books-requests.service';



@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [  RouterLink],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
  categories !: Array<Category>;
  books !:Array<Books>;
  authors !: Array<Authors>;
  constructor(private categoriesRequests: CategoriesApiService,private booksRequestsService: BooksRequestsService,private router : Router) {}

  ngOnInit() {
  // this.categoriesRequests.getCategoriesList().subscribe((res :any) => this.categories = res.filter((book:any) => book.rating >  0));
///////////////////////////////////////////////////////////////////////////

this.categoriesRequests.getPopularCategory().subscribe((res :any) =>{return this.categories = res.map((item:any)=>item.category);}) //console.log(this.categories) }  )

this.categoriesRequests.getPopularAuthor().subscribe((res :any) =>{console.log(res);return this.authors = res.map((item:any)=>item.author);})

////////////////////////////////////////////////////////////////////////////////
    this.booksRequestsService.getAllbooks().subscribe((res:any) => {
      console.log(11111,res);
      this.books = res.data.books.sort((a: any, b: any) => b.rating - a.rating).slice(0, 5);
      console.log("books",this.books);
      })
  }

  redirectToBooks(categoryId : String){
    this.router.navigate(['categories' , categoryId])
 }

 redirectToBookDetails(id : String) {
  this.router.navigate(['/books', id]);
}

redirectToAuthorDetails(id : String) {
  this.router.navigate(['authors', id]);
}
}