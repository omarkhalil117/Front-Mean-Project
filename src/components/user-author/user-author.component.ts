import { JwtTokenService } from '../../services/jwt-token.service';
import { Component , Input} from '@angular/core';
import { UserAuthorBookComponent } from '../user-author-book/user-author-book.component';
import { AuthorServicesService } from '../../services/author-services.service';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-user-author',
  standalone: true,
  imports: [UserAuthorBookComponent],
  templateUrl: './user-author.component.html',
  styleUrl: './user-author.component.css'
})
export class UserAuthorComponent {
  @Input() id!:String;
  authorData:any = [] ;
  author:any = {};
  books: any[] = [];
  url = environment.apiurl;
  userId: any
  constructor(private authorInfo : AuthorServicesService,
    private jwt : JwtTokenService){}

  ngOnInit()
  {
    this.userId = this.jwt.decodeToken(localStorage.getItem('token'));
    this.authorInfo.getAuthorWithBooks(this.userId.id).subscribe((d)=>{
      console.log(d);
    })
  }
}
