import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-user-author-book',
  standalone: true,
  imports: [],
  templateUrl: './user-author-book.component.html',
  styleUrl: './user-author-book.component.css'
})
export class UserAuthorBookComponent {
@ Input() bookInfo:any;
}
