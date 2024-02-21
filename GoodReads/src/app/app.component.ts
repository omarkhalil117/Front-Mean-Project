import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksComponent } from '../components/books/books.component';
import { HeaderComponent } from '../components/header/header.component';
import { BookDetailsComponent } from '../components/book-details/book-details.component';
import { RatingModule } from 'primeng/rating';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksComponent, BookDetailsComponent, HeaderComponent, RatingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoodReads';
}
