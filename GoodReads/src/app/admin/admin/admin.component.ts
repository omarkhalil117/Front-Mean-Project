import { JwtTokenService } from './../../../services/jwt-token.service';
import { AdminService } from './../../../services/admin.service';
import { BooksComponent } from './../books/books/books.component';
import { AdminNavBarComponent } from '../admin-nav-bar/admin-nav-bar.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminCategoriesComponent } from '../admin-categories/admin-categories.component';
import { AuthorAdminComponent } from '../authors/author-admin/author-admin.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminNavBarComponent,AdminCategoriesComponent,BooksComponent,RouterOutlet,AuthorAdminComponent,LoginAdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
isLogged !: boolean



recieveFromChild(para:boolean){
  this.isLogged= para
}
}
