import { Component } from '@angular/core';
import { BooksRequestsService } from '../../services/book-services/books-requests.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { Book } from './../../models/interface/book';
import { RatingComponent } from '../rating/rating.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'books',
  standalone: true,
  imports: [FormsModule, RatingModule, RatingComponent, ReactiveFormsModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  reviewForm : FormGroup;

  books !: Book;
  newRating?: any;

  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private booksRequestsService: BooksRequestsService
    ){
      this.reviewForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
        category: ['', [Validators.required]],
        author: ['', [Validators.required]],
        cover: ['', [Validators.required]]
      })
    }

  ngOnInit(){
    const id = this.activateRoute.snapshot.params['_id'];
    this.booksRequestsService.getBook(id).subscribe((res: any) => {
      this.books = res.data.book;

      console.log(this.books);
    })
  }

  updateRating(newRating: number) {
    this.books.rating = newRating;
    console.log(newRating);
  }

  addReview() {
    this.booksRequestsService.createReview(this.reviewForm.value).subscribe((res) => {
      console.log(res);
    })
  }

  handleSubmitForm() {
    console.log(this.reviewForm.value);
  }


}
