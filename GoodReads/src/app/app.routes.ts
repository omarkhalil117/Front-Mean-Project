import { BooksComponent } from './admin/books/books/books.component';
import { Routes } from '@angular/router';
import { MyBooksComponent } from '../components/my-books/my-books.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AuthorAdminComponent } from './admin/authors/author-admin/author-admin.component';
import { AdminComponent } from './admin/admin/admin.component';
import { adminGuard } from '../guards/admin.guard';
import { authGuard } from '../guards/auth.guard';
import { AuthorsComponent } from '../components/authors/authors.component';
import { AppComponent } from './app.component';
import { UserAuthorComponent } from '../components/user-author/user-author.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';

export const routes: Routes = [

{ path: '', redirectTo: 'home', pathMatch: 'full' },
{
    path: "home",
    component: HomeComponent,
    title:"Home"
},
{
    path: "my-books",
    component:MyBooksComponent,
    title: "My books",
    canActivate: [authGuard]
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
    path:"**",
    component: NotFoundComponent
}

];

