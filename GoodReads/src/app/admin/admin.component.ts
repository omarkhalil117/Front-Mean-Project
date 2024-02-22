import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavBarComponent } from '../admin-nav-bar/admin-nav-bar.component';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';
import { BookAdminComponent } from '../book-admin/book-admin.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,AdminNavBarComponent,AdminCategoriesComponent,BookAdminComponent, LoginAdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  isLogged !: boolean

  isLoggedorNot(isLoggedFromChild:boolean){
    this.isLogged=isLoggedFromChild
  }
  
  
}
