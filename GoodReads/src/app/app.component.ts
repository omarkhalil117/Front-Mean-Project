import { Component } from '@angular/core';
import { AuthorsComponent } from '../components/authors/authors.component';
import { BookRowComponent } from '../components/book-row/book-row.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
import { UserAuthorComponent } from '../components/user-author/user-author.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/header/header.component';
import { MyBooksComponent } from '../components/my-books/my-books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorsComponent, UserDashboardComponent, BookRowComponent, UserAuthorComponent,HomeComponent,HeaderComponent, MyBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoodReads';
  currentUrl!:string
  constructor(private router:Router){
    console.log(router.url)
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        console.log(event.url.split('/')[1])
        this.currentUrl= event.url.split('/')[1]
      }
    }
    )
  }
}
