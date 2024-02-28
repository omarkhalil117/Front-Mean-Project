import { Component } from '@angular/core';
import { BooksRequestsService } from '../../services/book-services/books-requests.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ActivatedRoute } from '@angular/router';
import { Book } from './../../models/interface/book';
import { RatingComponent } from '../rating/rating.component';

import { Router } from '@angular/router';


@Component({
  selector: 'books',
  standalone: true,
  imports: [ RatingComponent, ReactiveFormsModule, FormsModule, RatingModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  reviewForm : FormGroup;

  newRating?: any;

  book !: Book;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private booksRequestsService: BooksRequestsService
    ){
      this.reviewForm = this.fb.group({
        reviews: ['', [Validators.required]],
        rating: ['', [Validators.required]]
      })
    }

  ngOnInit(){
    const id = this.activateRoute.snapshot.params['_id'];
    this.booksRequestsService.getBook(id).subscribe((res: any) => {
      this.book = res.data.book;
      console.log(this.book);

    })
  }


  redirectToAuthorDetails(authorId: String){
    this.router.navigate(['authors', authorId]);
  }

  redirectToCategoryDetails(categoryId: String){
    this.router.navigate(['categories', categoryId]);
  }

  addReview() {
    if (this.reviewForm.valid) {
      const formData = {
        ratingBook: +this.reviewForm.value.rating,      // Convert rating to number
        reviewBook: this.reviewForm.value.reviews
      };
      this.booksRequestsService.createReview(this.book._id, formData).subscribe((res) => {
        console.log(res);
        console.log(formData);
      });
    }
  }

  handleSubmitForm() {
    console.log(this.reviewForm.value);
  }
/*
  async updateBookShelve(e:any, bookId:String, fullId:String)
  {
    console.log(e.target.value,bookId)
    this.http.patch(`http://localhost:3000/users/65d2e73c85d0e459ad9f7c3b/book/${bookId}`, { shelve:e.target.value} ).subscribe((d)=> console.log(d));
    this.books = this.books.map((el:any)=> {
      if(el._id !== fullId) {
        return el;
      }
      el.shelve = e.target.value;
      return el;
    })
    console.log(this.books)
  }
*/
}
