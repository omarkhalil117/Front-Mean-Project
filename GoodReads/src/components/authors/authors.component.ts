import { Component } from '@angular/core';
import { AuthorCardComponent } from '../author-card/author-card.component';
@Component({
  selector: 'app-author',
  standalone: true,
  imports: [AuthorCardComponent],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {

  authors: any[] = [
    {
      photo:null,
      name:"Linus Travoldas"
    },
    {
      photo:null,
      name:"Mohamed Hammad"
    },
    {
      photo:null,
      name:"Mohamed El-desouqy"
    }
  ];
}
