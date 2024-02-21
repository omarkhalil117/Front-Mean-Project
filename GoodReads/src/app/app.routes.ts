import { Routes, RouterLink, RouterLinkActive } from '@angular/router';
import { BooksComponent } from '../components/books/books.component';
import { BookDetailsComponent } from '../components/book-details/book-details.component'
import { NotFoundComponent } from '../components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: "app-books",
    component: BooksComponent,
    title: "Book"
  },
  {
    path: "app-book-details/:id",
    component: BookDetailsComponent,
    title: "Book details"
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
