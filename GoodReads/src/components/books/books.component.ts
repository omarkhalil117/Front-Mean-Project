import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BooksRequestsService } from '../../services/book-services/books-requests.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books : any = [
    {
      "id": 1,
      "authorName": "Haruki Murakami",
      "categoryName": "Literary Fiction",
      "name": "Kafka on the Shore",
      "avgRate": 4.5,
      "rating": 0,
      "cover": "https://m.media-amazon.com/images/I/81tdbrewW0L._AC_UF894,1000_QL80_.jpg",
      "shelve": "read"
    },
    {
      "id": 2,
      "authorName": "Toni Maguire",
      "categoryName": "Biography",
      "name": "Don't Tell Mummy",
      "avgRate": 3,
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
      "avgRate": 5,
      "rating": 0,
      "cover": "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF894,1000_QL80_.jpg",
      "shelve": "read"
    },
    {
      "id": 5,
      "authorName": "F. Scott Fitzgerald",
      "categoryName": "Classic Literature",
      "name": "The Great Gatsby",
      "avgRate": 4,
      "rating": 0,
      "cover": "https://www.thebookdesigner.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-14-at-3.22.45-PM.png",
      "shelve": "to-read"
    },
    {
      "id": 6,
      "authorName": "Harper Lee",
      "categoryName": "Classics",
      "name": "To Kill a Mockingbird",
      "avgRate": 4,
      "rating": 0,
      "cover": "https://m.media-amazon.com/images/I/51xGF07qJXL.jpg",
      "shelve": "read"
    },
    {
      "id": 7,
      "authorName": "J.D. Salinger",
      "categoryName": "Literary Fiction",
      "name": "The Catcher in the Rye",
      "avgRate": 4.5,
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

  constructor(
    private router: Router,
    private booksRequestsService: BooksRequestsService
    ){}

    ngOnInit(){
      this.booksRequestsService.getAllbooks().subscribe((res) => {
        console.log(res);
      })
    }

  redirectToBookDetails(id : number) {
    this.router.navigate(['app-book-details', id]);
  }
}
