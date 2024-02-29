import { Component } from '@angular/core';
import { Category } from '../../models/category';
import {CategoriesApiService } from '../../services/categories-api.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-by-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories-by-user.component.html',
  styleUrl: './categories-by-user.component.css'
})
export class CategoriesByUserComponent {
  categories !: Array<Category>;

  constructor(private activateRoute: ActivatedRoute,private categoriesRequests: CategoriesApiService,private router : Router) {}

  ngOnInit() {

    const idfromroute = this.activateRoute.snapshot.params['userId'];
    console.log(idfromroute)
    this.categoriesRequests.getCategoriesListByUser(idfromroute).subscribe((res : any) =>{  this.categories = res; console.log(this.categories)});


  }



}



