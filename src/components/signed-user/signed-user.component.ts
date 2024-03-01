import { AdminService } from './../../services/admin.service';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { JwtTokenService } from '../../services/jwt-token.service';

@Component({
  selector: 'app-signed-user',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './signed-user.component.html',
  styleUrl: './signed-user.component.css'
})
export class SignedUserComponent {
@Output() isLogged = new EventEmitter()
user:any;
url = environment.apiurl;
constructor(private router:Router, private AdminService:AdminService, private JwtTokenService:JwtTokenService){}

ngOnInit(){
  const payload:any = this.JwtTokenService.decodeToken(localStorage.getItem('token'))
  this.AdminService.getUser(payload?.id).subscribe(
    data=>{
      this.user= data.data.user
}
  )
 }
logout(){
    localStorage.clear()
    this.router.navigate(['login'])
    this.isLogged.emit(false)
  }
}
