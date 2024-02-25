import { Component, EventEmitter, Output } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { JwtTokenService } from '../../../services/jwt-token.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  adminLogin !: FormGroup
  errorMessage!:string
  @Output() isLogged = new EventEmitter()
  constructor(private router: Router,private _AdminService:AdminService, private _JwtTokenService:JwtTokenService){
    this.adminLogin = new FormGroup({
      userName: new FormControl('',[Validators.required, Validators.maxLength(30)]),
      password: new FormControl('',[Validators.required, Validators.maxLength(50)])
    })
  }

  redirectToAdminDashBoard(){
    this._AdminService.login(this.adminLogin.value).subscribe(
      data => {    
        localStorage.setItem('token',JSON.stringify(data.token))
        this.router.navigate(['admin/categories'],{ skipLocationChange: true })
        const jwt = this._JwtTokenService.decodeToken(localStorage.getItem('token'))
        JSON.stringify(jwt) 
        if(JSON.parse(JSON.stringify(jwt)).role === 'admin'){
          this.isLogged.emit(true)
        } 
        else{
          this.isLogged.emit(false)
        }

      },
      error => { 
        console.log(error.error.message)
        this.errorMessage =  error.error.message
      }
    )
  }


  handleSubmitForm(){

  }
}
