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
  constructor(private authorInfo : AuthorServicesService){}
}
