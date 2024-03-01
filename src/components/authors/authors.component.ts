import { JwtTokenService } from '../../services/jwt-token.service';
import { Component } from '@angular/core';
import { AuthorCardComponent } from '../author-card/author-card.component';
import { AuthorServicesService } from '../../services/author-services.service';
import { PagesServiceService } from '../../services/pages-service.service';
@Component({
  selector: 'app-author',
  standalone: true,
  imports: [AuthorCardComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {

  authors:any;
  page:number = 0;
  token:any;
  userId:any;
  constructor(private authorService: AuthorServicesService ,
    private pageService : PagesServiceService, 
    private jwt : JwtTokenService){}

  ngOnInit()
  {
    this.token = localStorage.getItem('token')
    this.userId = this.jwt.decodeToken(this.token)
    if(this.page == 0)
    {
      this.pageService.getUserAuthors('1', this.userId.id).subscribe((data)=> { 
      this.authors = data
      console.log(this.authors)
      })
    }
  } 

  changePage(e:any)
  {  
      this.pageService.getUserAuthors(e.target.innerText , this.userId.id).subscribe((res:any) => {
      this.authors = res;
      console.log(this.authors)
      this.page = 1;
      });
  }
}