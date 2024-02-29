import { Component, EventEmitter, Output } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { JwtTokenService } from '../../services/jwt-token.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login !: FormGroup
  errorMessage!:string
  constructor(private router: Router,private _AdminService:AdminService, private _JwtTokenService:JwtTokenService, private AlertService:AlertService){
    this.login = new FormGroup({
      userName: new FormControl('',[Validators.required, Validators.maxLength(30)]),
      password: new FormControl('',[Validators.required, Validators.maxLength(50)])
    })
  }

  redirectToHome(){
    this._AdminService.login(this.login.value,'user').subscribe(
      data => {    
          this.router.navigate(['/home'])
      },
      error => { 
        this.errorMessage =  error.error.message
        this.AlertService.myAlert('error','Unauthorized !', this.errorMessage)

      }
    )
  }


  handleSubmitForm(){

  }
}
