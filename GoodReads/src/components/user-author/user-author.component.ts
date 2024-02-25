import { Component , Input} from '@angular/core';
import { UserAuthorBookComponent } from '../user-author-book/user-author-book.component';
import { AuthorServicesService } from '../../services/author-services.service';
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
  constructor(private authorInfo : AuthorServicesService){}

  ngOnInit()
  {
    console.log(this.id)
    this.authorInfo.getAuthorWithBooks(this.id).subscribe((data) => {
      this.authorData =data 
      console.log(this.authorData.authorbooks)
    })

  }
}
