import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SignupComponent, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
