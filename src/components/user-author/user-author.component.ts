import { authGuard } from './../../guards/auth.guard';
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
  authorBooks: any ;
  url = environment.apiurl;
  userId: any
  constructor(private authorInfo : AuthorServicesService,
    private jwt : JwtTokenService){}
  colors = ['red','blue','green']
  ngOnInit()
  {
    this.authorInfo.getAuthorWithBooks(this.id).subscribe((d:any)=>{
      this.author = d.author[0];
      this.authorBooks = d.authorbooks;
      console.log('books',this.authorBooks)
    })
  }
}
