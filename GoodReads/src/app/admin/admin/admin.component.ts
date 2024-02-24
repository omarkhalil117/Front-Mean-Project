import { Component, EventEmitter, Output } from '@angular/core';
import { AdminNavBarComponent } from '../../admin-nav-bar/admin-nav-bar.component';
import { AdminCategoriesComponent } from '../../admin-categories/admin-categories.component';
import { BookAdminComponent } from '../../book-admin/book-admin.component';
import { RouterOutlet } from '@angular/router';
import { AuthorAdminComponent } from '../authors/author-admin/author-admin.component';
import { LoginAdminComponent } from '../../login-admin/login-admin.component';
import { BooksComponent } from '../books/books/books.component';

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
