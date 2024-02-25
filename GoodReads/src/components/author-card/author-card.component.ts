import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-card',
  standalone: true,
  imports: [],
  templateUrl: './author-card.component.html',
  styleUrl: './author-card.component.css'
})
export class AuthorCardComponent {
  @Input() authorInfo:any;
  
  constructor(private router : Router){}

  redirectAuthorPage(id:string)
  {
    console.log(id)
    this.router.navigate(['/authors',id])
  }
} 
