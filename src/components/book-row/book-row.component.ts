import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-row',
  standalone: true,
  imports: [],
  templateUrl: './book-row.component.html',
  styleUrl: './book-row.component.css'
})
export class BookRowComponent {
@Input() info:any;
}
