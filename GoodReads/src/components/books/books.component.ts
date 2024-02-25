import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BooksRequestsService } from '../../services/book-services/books-requests.service';
import { Book } from './../../models/interface/book';

@Component({
  selector: 'books',
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
        console.log(res);
        return this.books = res.data.books;

      })
    }

  redirectToBookDetails(id : string) {
    this.router.navigate(['books', id]);
  }
}
