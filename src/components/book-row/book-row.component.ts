import { Component, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-book-row',
  standalone: true,
  imports: [],
  templateUrl: './book-row.component.html',
  styleUrl: './book-row.component.css'
})
export class BookRowComponent {
  url = environment.apiurl;
@Input() info:any;
}
