
import { Component } from '@angular/core';
import { Books } from '../../models/books';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Category } from '../../models/category';
import {CategoriesApiService } from '../../services/categories-api.service';

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

this.loadBooks();
}



loadBooks() {
  const idfromroute = this.activateRoute.snapshot.params['categoryId'];
  this.page = this.activateRoute.snapshot.queryParamMap.get('page');
  this.categoriesRequests.getBooks(this.page ,idfromroute)
  .subscribe((res : any) => {this.arr = res.booksbycategory; this.categoryname=res.categorycontent.name; console.log(res)});
 // .subscribe((res:any) =>{console.log(res);  this.arr = res});
}

nextPage(): void {
  let page = this.page;
  page++;
  console.log(page);
  const idfromroute = this.activateRoute.snapshot.params['categoryId'];
  this.router.navigate(['categories', idfromroute], { queryParams:{page} });
  this.loadBooks();
}

//clickPage(e:any)
//{
 // console.log(e.target.innerHTML);

 // let page = this.page;
 // if(e.target.innerHTML=='Previous'){
 //   page--;
 // }else if(e.target.innerHTML=='Next'){
 //   page++;
 // }
 // console.log(page);
 // const idfromroute = this.activateRoute.snapshot.params['categoryId'];
//  this.router.navigate(['categories', idfromroute], { queryParams:{page} });
//  this.loadBooks();
//}

prevPage(): void {
  if (this.page > 1) {
    let page = this.page;
    page--;
   console.log(page);
    const idfromroute = this.activateRoute.snapshot.params['categoryId'];
    this.router.navigate(['categories', idfromroute], { queryParams:{page} });
    this.loadBooks();
  }
}


redirectToBookDetails(id : String) {
  this.router.navigate(['/books', id]);
}

redirectToAuthorDetails(id : String) {
  this.router.navigate(['author', id]);
}
}
















