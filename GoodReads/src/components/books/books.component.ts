import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BooksRequestsService } from '../../services/book-services/books-requests.service';
import { Book } from './../../app/interface/book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books ?: Array<Book>

  constructor(
    private router: Router,
    private booksRequestsService: BooksRequestsService
    ){}

    ngOnInit(){
      this.booksRequestsService.getAllbooks().subscribe((res: any) => {
        return this.books = res.data.books;
        console.log(res);
      })
    }

  redirectToBookDetails(id : string) {
    this.router.navigate(['app-book-details', id]);
  }
}
