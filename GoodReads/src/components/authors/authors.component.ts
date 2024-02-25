import { Component } from '@angular/core';
import { AuthorCardComponent } from '../author-card/author-card.component';
import { HttpClient } from '@angular/common/http';
import { AuthorServicesService } from '../../services/author-services.service';
@Component({
  selector: 'app-author',
  standalone: true,
  imports: [AuthorCardComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {

  authors:any;
  constructor(private authorService: AuthorServicesService){}

  ngOnInit()
  {
    this.authorService.getAllAuthors().subscribe((data)=> this.authors = data)
  } 
}
