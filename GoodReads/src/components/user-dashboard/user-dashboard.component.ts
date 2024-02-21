import { Component } from '@angular/core';
import { BookRowComponent } from '../book-row/book-row.component';
import { book } from '../../app/models/book.model';
@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [BookRowComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
data: book[] = [
  {
  id:1,
  cover:null,
  BookName:"Clean Code",
  Author:"John doe",
  AvgRating:"3.5",
  Rating:"4",
  Shelve:"reading"
  },
  {
  id:2,  
  cover:null,
  BookName:"Clean Arch",
  Author:"John doe",
  AvgRating:"3.5",
  Rating:"4",
  Shelve:"reading"
  },
  {
  id:3,
  cover:null,
  BookName:"Head first",
  Author:"John doe",
  AvgRating:"3.5",
  Rating:"4",
  Shelve:"reading"
  },
]
}
