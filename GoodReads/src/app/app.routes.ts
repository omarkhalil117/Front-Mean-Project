import { Routes } from '@angular/router';
import { ShowCategoriesComponent } from './components/show-categories/show-categories.component';
import { BooksCategoryComponent } from './components/books-category/books-category.component';

export const routes: Routes = [

  {
    path:'',
    component: ShowCategoriesComponent,
    title: "Categories List page"
},
{
    path: "categories/:categoryId",
    component: BooksCategoryComponent,
    title: "BooksOfCategory"
},

];
