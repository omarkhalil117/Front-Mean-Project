import { Routes } from '@angular/router';
import { AuthorsComponent } from '../components/authors/authors.component';
import { AppComponent } from './app.component';
import { UserAuthorComponent } from '../components/user-author/user-author.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';

export const routes: Routes = [
    {
    path:'',
    component: AppComponent,
    title : "Home"
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
    }
];
