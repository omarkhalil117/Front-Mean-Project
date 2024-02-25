import { Routes } from '@angular/router';
import { ShowCategoriesComponent } from '../components/show-categories/show-categories.component';
import { BooksCategoryComponent } from '../components/books-category/books-category.component';
import {AddCategoryComponent  } from '../components/add-category/add-category.component';
import {UserHomeComponent } from '../components/user-home/user-home.component';
import {CategoriesByUserComponent} from '../components/categories-by-user/categories-by-user.component';

export const routes: Routes = [
  {
    path:'',
    component: UserHomeComponent,
    title: "Categories List page"
},
  {
    path:'categories',
    component: ShowCategoriesComponent,
    title: "Categories List page"
},
{
    path: "categories/:categoryId",
    component: BooksCategoryComponent,
    title: "BooksOfCategory"
},
{
  path: "addcategory",
  component: AddCategoryComponent,
  title: "addcategory"
},
{
  path: "categories/user/:userId",
  component: CategoriesByUserComponent,
  title: "addcategory"
},

];
