import { Component } from '@angular/core';
import { BooksRequestsService } from '../../services/book-services/books-requests.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { Book } from './../../models/interface/book';
import { RatingComponent } from '../rating/rating.component';


@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [FormsModule, RatingModule, RatingComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  books ?: any;
  newRating?: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private booksRequestsService: BooksRequestsService
    ){}

  ngOnInit(){
    const id = this.activateRoute.snapshot.params['_id'];
    this.booksRequestsService.getBook(id).subscribe((res: any) => {
      this.books = res.data.book;
    })
  }

  updateRating(newRating: number) {
    this.books.rating = newRating;
    console.log(newRating);
  }


}
