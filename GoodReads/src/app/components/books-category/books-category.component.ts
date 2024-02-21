
import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books-category',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './books-category.component.html',
  styleUrl: './books-category.component.css'
})
export class BooksCategoryComponent {
  books !: Array<Book>;
  constructor(private activateRoute: ActivatedRoute) {}
//hold id param from route using activaterouter
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe({
     next:(params)=>{
      const id = params.get('categoryId');
      console.log('Route parameter id:',id);
     }
    });
//i need make api-service to get realybook


}
}














