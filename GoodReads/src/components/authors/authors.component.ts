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
  constructor(private authorService: AuthorServicesService ,
    private pageService : PagesServiceService){}

  ngOnInit()
  {
    if(this.page == 0)
    {
      this.pageService.getUserAuthors('1', "65d2e73c85d0e459ad9f7c3b").subscribe((data)=> { 
       this.authors = data
      console.log(this.authors)
      })
    }
  } 

  changePage(e:any)
  {  
      this.pageService.getUserAuthors(e.target.innerText , "65d2e73c85d0e459ad9f7c3b").subscribe((res:any) => {
      this.authors = res;
      console.log(this.authors)
      this.page = 1;
      });
  }
}