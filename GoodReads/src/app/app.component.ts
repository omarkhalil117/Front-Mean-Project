import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { AdminComponent } from './admin/admin.component';
import { AdminNavBarComponent } from './admin-nav-bar/admin-nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,HeaderComponent, MyBooksComponent, AdminComponent, AdminNavBarComponent],
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
        this.currentUrl = event.url.split('/')[1]
      }
    }
    )
  }
}
