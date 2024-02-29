
import { Component } from '@angular/core';
import { Books } from '../../models/books';
import { Book } from '../../models/book';
import { RouterLink } from '@angular/router';
import { Category } from '../../models/category';
import {CategoriesApiService } from '../../services/categories-api.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-books-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './books-category.component.html',
  styleUrl: './books-category.component.css'
})
export class BooksCategoryComponent {
  books !: Array<Books>;
  categoryname !:String

  arr !: Array<Books>;
  page !:any;


  constructor(private activateRoute: ActivatedRoute,private categoriesRequests: CategoriesApiService,private router : Router) {

 this.router.events.pipe(
  filter(event => event instanceof NavigationEnd)
).subscribe(() => {
  this.loadBooks();
});
  }

  ngOnInit(){}

loadBooks() {
  const idfromroute = this.activateRoute.snapshot.params['categoryId'];
  this.page = this.activateRoute.snapshot.queryParamMap.get('page');
  this.categoriesRequests.getBooks(this.page ,idfromroute)
  .subscribe((res : any) => {this.arr = res.booksbycategory; this.categoryname=res.categorycontent.name; console.log(res)});

}

nextPage(): void {
  let page = this.page;
  page++;
  this.page = page;
  console.log(page);
  const idfromroute = this.activateRoute.snapshot.params['categoryId'];
  this.router.navigate(['categories', idfromroute], { queryParams:{page} });

}



prevPage(): void {
  if (this.page > 1) {
    let page = this.page;
    page--;
   console.log(page);
    const idfromroute = this.activateRoute.snapshot.params['categoryId'];
    this.router.navigate(['categories', idfromroute], { queryParams:{page} });

  }
}


redirectToBookDetails(id : String) {
  this.router.navigate(['/books', id]);
}

redirectToAuthorDetails(id : String) {
  this.router.navigate(['author', id]);
}
}
















