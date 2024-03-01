import { Component } from '@angular/core';
import { BooksRequestsService } from '../../services/book-services/books-requests.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})

export class RatingComponent {

//  faStar = faStar;
  books ?: any;
  stars?: boolean[];

  constructor(
    private activateRoute: ActivatedRoute,
    private booksRequestsService: BooksRequestsService
    ){}

  ngOnInit(){
    const id = this.activateRoute.snapshot.params['_id'];

    this.booksRequestsService.getBook(id).subscribe((res: any) => {
      this.books = res.data.book;

      ///////////////////     star-rating     ///////////////////
      const fullStars = Math.floor(this.books.avgRate || 0); // null -> 0
      const decimalStar = this.books.avgRate ? this.books.avgRate - fullStars : 0; // Get the decimal part if avgRate not null

      this.stars = Array(5).fill(false);

      // Fill full stars
      for (let i = 0; i < fullStars; i++) {
        this.stars[i] = true;
      }

      // Fill the next star if there is a decimal part
      if (decimalStar > 0) {
        const nextStar = fullStars;
        const filledWidth = decimalStar * 100; // Convert decimal part to percentage
        this.stars[nextStar] = filledWidth > 50; // Fill the star if the filled width is more than 50%
      }
    })
  }

}
