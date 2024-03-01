import { Routes, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AuthorAdminComponent } from './admin/authors/author-admin/author-admin.component';
import { AdminComponent } from './admin/admin/admin.component';
import { adminGuard } from '../guards/admin.guard';
import { AuthorsComponent } from '../components/authors/authors.component';
import { UserBooksComponent } from '../components/user-books/user-books.component';
import { UserAuthorComponent } from '../components/user-author/user-author.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
import { BooksComponent } from './admin/books/books/books.component';
import { BookDetailsComponent } from '../components/book-details/book-details.component'
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { ShowCategoriesComponent } from '../components/show-categories/show-categories.component';
import { BooksCategoryComponent } from '../components/books-category/books-category.component';
import { UserHomeComponent } from '../components/user-home/user-home.component';
import { CategoriesByUserComponent } from '../components/categories-by-user/categories-by-user.component';
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
  path: "categories/user/:userId",
  component: CategoriesByUserComponent,
  title: "addcategory"
},

{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
    path: "home",
    component: UserHomeComponent,
    title:"Home"
},
{
    path:"login",
    component: LoginComponent,
    title: "Log in"
},
{
    path:"signup",
    component: SignupComponent,
    title: "Sign up"
},
{
    path:"admin",
    component: AdminComponent,
    title: "Admin",
    children:[
        {
            path:"books",
            component: BooksComponent,
            canActivate: [adminGuard]
        },
        {
            path: "categories",
            component: AdminCategoriesComponent,
            canActivate: [adminGuard]

        },
        {
            path:"authors",
            component: AuthorAdminComponent,
            canActivate: [adminGuard]

        },
        {
            path:"add-admin",
            component: SignupComponent,
            canActivate: [adminGuard]

        }
    ]
},    
    {
    path:'authors',
    component: AuthorsComponent,
    title : "all authors"
    },
    {
    path:'authors/:id',
    component: UserAuthorComponent,
    title : "author page"       
    },
    {
    path:'users',
    component: UserDashboardComponent,
    title : "Dashboard"       
    },
  {
    path: "books",
    component: UserBooksComponent,
    title: "Book"
  },
  {
    path: "books/:_id",
    component: BookDetailsComponent,
    title: "Book details",
    //canActivate : [authGuard],
  },
 
{
    path:"**",
    component: NotFoundComponent
}

];
