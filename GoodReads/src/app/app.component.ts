import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorsComponent } from '../components/authors/authors.component';
import { BookRowComponent } from '../components/book-row/book-row.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
import { UserAuthorComponent } from '../components/user-author/user-author.component';
import { AuthorFormComponent } from '../components/author-form/author-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorsComponent, AuthorFormComponent , UserDashboardComponent, BookRowComponent, UserAuthorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoodReads';
}
