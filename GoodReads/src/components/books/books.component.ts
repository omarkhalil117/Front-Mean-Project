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
  books ?: Array<Book>;
  currentPage: number = 1;
  lastPage: number = 1;

  constructor(
    private router: Router,
    private booksRequestsService: BooksRequestsService
    ){}

    ngOnInit(){
      this.showBooks();
    }

    showBooks(){
      this.booksRequestsService.getBooksWithPagination(this.currentPage).subscribe((res: any) => {
        this.books = res.data.books;
        this.lastPage = Math.ceil(res.result / 6);
      })
    }

    previousPage(){
      if(this.currentPage > 1) {
        this.currentPage--;
        this.showBooks();
      }
    }

    nextPage(){
      if(this.currentPage < this.lastPage) {
        this.currentPage++;
        this.showBooks();
      }
    }

  redirectToBookDetails(id : string) {
    this.router.navigate(['books', id]);
  }

  redirectToAuthorDetails(authorId: String){
    this.router.navigate(['authors', authorId]);
  }

}
