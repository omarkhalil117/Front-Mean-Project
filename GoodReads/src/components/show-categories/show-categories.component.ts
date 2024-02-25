import { Component } from '@angular/core';
import { Category } from '../../models/category';
import {CategoriesApiService } from '../../services/categories-api.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-categories.component.html',
  styleUrl: './show-categories.component.css'
})
export class ShowCategoriesComponent {
  categories !: Array<Category>;
  constructor(private categoriesRequests: CategoriesApiService,private router : Router) {}

  ngOnInit() {
    this.categoriesRequests.getCategoriesList().subscribe((res : any) => this.categories = res);
  }

  redirectToBooks(categoryId : string){
    this.router.navigate(['categories' , categoryId])
 }
}




