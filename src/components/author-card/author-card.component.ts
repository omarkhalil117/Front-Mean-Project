import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-author-card',
  standalone: true,
  imports: [],
  templateUrl: './author-card.component.html',
  styleUrl: './author-card.component.css'
})
export class AuthorCardComponent {
  @Input() authorInfo:any;
  url = environment.apiurl;
  
  constructor(private router : Router){}

  redirectAuthorPage(id:string)
  {
    console.log(id)
    this.router.navigate(['/authors',id])
  }
} 
