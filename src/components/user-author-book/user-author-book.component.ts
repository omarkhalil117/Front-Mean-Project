import { Component , Input } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-user-author-book',
  standalone: true,
  imports: [],
  templateUrl: './user-author-book.component.html',
  styleUrl: './user-author-book.component.css'
})
export class UserAuthorBookComponent {
@ Input() bookInfo:any;
url = environment.apiurl;

  ngOnInit()
  {
    console.log(this.bookInfo)
  }
}
