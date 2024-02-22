import { Component } from '@angular/core';
import { UserAuthorBookComponent } from '../user-author-book/user-author-book.component';
@Component({
  selector: 'app-user-author',
  standalone: true,
  imports: [UserAuthorBookComponent],
  templateUrl: './user-author.component.html',
  styleUrl: './user-author.component.css'
})
export class UserAuthorComponent {
books = [
  {
    id:1,
    bookName:"clean code",
    rating:4
  },
  {
    id:2,
    bookName:"clean Arch",
    rating:4
  },
  {
    id:3,
    bookName:"Head First",
    rating:4
  },
]
}
