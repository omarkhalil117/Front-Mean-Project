import { SignedUserComponent } from '../components/signed-user/signed-user.component';
import { Component } from '@angular/core';
import { AuthorsComponent } from '../components/authors/authors.component';
import { BookRowComponent } from '../components/book-row/book-row.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
import { UserAuthorComponent } from '../components/user-author/user-author.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { BookDetailsComponent } from '../components/book-details/book-details.component';
import { RatingComponent } from '../components/rating/rating.component';
import { UserBooksComponent } from '../components/user-books/user-books.component';
import { RatingModule } from 'primeng/rating';
import { LoginComponent } from '../components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthorsComponent, UserDashboardComponent, BookRowComponent, UserAuthorComponent, RouterOutlet, BookDetailsComponent, HeaderComponent, RatingModule, RatingComponent , UserBooksComponent, HeaderComponent, SignedUserComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GoodReads';
  currentUrl!:string;
  token: any;
  constructor(private router:Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.currentUrl= event.url.split('/')[1]
      }
    }
    )
  }

  ngOnInit()
  {
    this.token = localStorage.getItem('token');
  }
}
