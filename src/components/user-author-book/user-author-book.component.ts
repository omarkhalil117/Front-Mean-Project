import { HttpClient } from '@angular/common/http';
import { Component , Input } from '@angular/core';
import { environment } from '../../environments/environment';
import { StarRateComponent } from '../star-rate/star-rate.component';
import { JwtTokenService } from '../../services/jwt-token.service';
@Component({
  selector: 'app-user-author-book',
  standalone: true,
  imports: [StarRateComponent],
  templateUrl: './user-author-book.component.html',
  styleUrl: './user-author-book.component.css'
})
export class UserAuthorBookComponent {
@ Input() bookInfo:any;
url = environment.apiurl;
userId:any;
  constructor(private jwt : JwtTokenService,
    private http : HttpClient){}
  ngOnInit()
  {
    console.log(this.bookInfo)
    this.userId = this.jwt.decodeToken(localStorage.getItem('token'))
  }

  async updateBookShelve(e:any, bookId:String)
  {
    console.log(e.target.value,bookId)
    this.http.patch(`${this.url}/users/${this.userId}/book/${bookId}`, { shelve:e.target.value} ).subscribe((d)=> console.log(d));
  }
}
