import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, RatingModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  faStar = faStar;

  books : any = [
    {
      "id": 1,
      "authorName": "Haruki Murakami",
      "categoryName": "Literary Fiction",
      "name": "Kafka on the Shore",
      "avgRate": 3.6,
      "rating": 0,
      "cover": "https://m.media-amazon.com/images/I/81tdbrewW0L._AC_UF894,1000_QL80_.jpg",
      "shelve": "read"
    },
    {
      "id": 2,
      "authorName": "Toni Maguire",
      "categoryName": "Biography",
      "name": "Don't Tell Mummy",
      "avgRate": 2,
      "rating": 0,
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1391824814i/589118.jpg",
      "shelve": "to-read"
    },
    {
      "id": 3,
      "authorName": "J.K. Rowling",
      "categoryName": "Fantasy",
      "name": "Harry Potter and the Philosopher's Stone",
      "avgRate": 4,
      "rating": 0,
      "cover": "https://m.media-amazon.com/images/I/81IV--KF2yL._AC_UF1000,1000_QL80_.jpg",
      "shelve": "to-read"
    },
    {
      "id": 4,
      "authorName": "George Orwell",
      "categoryName": "Dystopian Fiction",
      "name": "1984",
      "avgRate": 3.6,
      "rating": 0,
      "cover": "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF894,1000_QL80_.jpg",
      "shelve": "read"
    },
    {
      "id": 5,
      "authorName": "F. Scott Fitzgerald",
      "categoryName": "Classic Literature",
      "name": "The Great Gatsby",
      "avgRate": 3.2,
      "rating": 0,
      "cover": "https://www.thebookdesigner.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-14-at-3.22.45-PM.png",
      "shelve": "to-read"
    },
    {
      "id": 6,
      "authorName": "Harper Lee",
      "categoryName": "Classics",
      "name": "To Kill a Mockingbird",
      "avgRate": 4.7,
      "rating": 0,
      "cover": "https://m.media-amazon.com/images/I/51xGF07qJXL.jpg",
      "shelve": "read"
    },
    {
      "id": 7,
      "authorName": "J.D. Salinger",
      "categoryName": "Literary Fiction",
      "name": "The Catcher in the Rye",
      "avgRate": 4.2,
      "rating": 0,
      "cover": "https://cdn.britannica.com/94/181394-050-2F76F7EE/Reproduction-cover-edition-The-Catcher-in-the.jpg",
      "shelve": "to-read"
    },
    {
      "id": 8,
      "authorName": "Jane Austen",
      "categoryName": "Romance",
      "name": "Pride and Prejudice",
      "avgRate": 4.5,
      "rating": 0,
      "cover": "https://thequeensreadingroom.co.uk/wp-content/uploads/2022/04/Jane-Austen-Pride-And-Prejudice-Book-Cover.jpg",
      "shelve": "read"
    }
  ]

  bookDetails : any;

  stars?: boolean[];

  newRating?: any;


  constructor(private activateRoute: ActivatedRoute){}

  ngOnInit(){
    const id = +this.activateRoute.snapshot.params['id'];
    this.bookDetails = this.books.find((book : any) => book.id === id);


    ///////////////////     star-rating     ///////////////////
    const fullStars = Math.floor(this.bookDetails.avgRate || 0); // null -> 0
    const decimalStar = this.bookDetails.avgRate ? this.bookDetails.avgRate - fullStars : 0; // Get the decimal part if avgRate not null

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
  }

  updateRating(newRating: number) {
    this.bookDetails.rating = newRating;
    console.log(newRating);
  }


}
