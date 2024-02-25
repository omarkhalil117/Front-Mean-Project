import { Component } from '@angular/core';
import { AuthorCardComponent } from '../author-card/author-card.component';
import { HttpClient } from '@angular/common/http';
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
    this.authorService.getAllAuthors().subscribe((data)=> this.authors = data)
  } 

  changePage(e:any)
  {  
      this.pageService.getAuthorPages(e.target.innerText).subscribe((res) => {
      this.authors = res;
      console.log(this.authors)
      });
  }
}