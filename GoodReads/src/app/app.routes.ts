import { BooksComponent } from './admin/books/books/books.component';
import { authGuard } from './guards/auth.guard';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MyBooksComponent } from './my-books/my-books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookAdminComponent } from './book-admin/book-admin.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AuthorAdminComponent } from './admin/authors/author-admin/author-admin.component';
import { adminGuard } from './guards/admin.guard';
import { AdminComponent } from './admin/admin/admin.component';

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
    path:"**",
    component: NotFoundComponent
}

];
