import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorComponent } from '../components/authors/authors.component';
import { BookRowComponent } from '../components/book-row/book-row.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorComponent , UserDashboardComponent, BookRowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoodReads';
}
