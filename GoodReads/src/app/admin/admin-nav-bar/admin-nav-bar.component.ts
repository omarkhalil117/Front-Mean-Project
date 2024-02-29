import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from '../../../services/admin.service';
import { JwtTokenService } from './../../../services/jwt-token.service';
import { AdminComponent } from './../admin/admin.component';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgbModule],
  templateUrl: './admin-nav-bar.component.html',
  styleUrl: './admin-nav-bar.component.css'
})
export class AdminNavBarComponent {
@Output() isLogged = new EventEmitter()
user:any
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
    this.router.navigate(['admin'])
    this.isLogged.emit(false)
  }
}
