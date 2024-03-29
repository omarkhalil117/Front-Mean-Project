import { AlertService } from './../../services/alert.service';

import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { JwtTokenService } from '../../services/jwt-token.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup
  errorMessage?: string;
  sendData = new FormData()
  constructor(private router: Router, private _authServiceService : AuthServiceService, private AlertService:AlertService, 
    private JwtTokenService : JwtTokenService ){

    this.signupForm = new FormGroup({
    userName: new FormControl('',[
      Validators.required, 
      Validators.pattern(/^[A-Za-z][A-Za-z0-9_]{7,29}$/)
    ]),
    firstName: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[a-zA-Z]+$/),
      Validators.minLength(2),
      Validators.maxLength(200)
    ]),
        lastName: new FormControl('', [
      Validators.required, 
      Validators.pattern(/^[a-zA-Z]+$/),
      Validators.minLength(2),
      Validators.maxLength(200)
    
    ]),
      email: new FormControl('',[
        Validators.required, 
        Validators.email,
        Validators.maxLength(200)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/), 
        Validators.maxLength(50)
      ]),
      confirmPassword: new FormControl('',[
        Validators.required
      ]),
        image: new FormControl()
      },
      {
        validators: this.matchPassword
      }
      
      )
  }


  matchPassword : ValidatorFn = (control:AbstractControl) : ValidationErrors | null => {

    let password = control.get('password')
    let confirmPassword = control.get('confirmPassword')

    if(password && confirmPassword && password?.value !== confirmPassword?.value)
    return {
        passwordNotMatch: true
    }

    return null
  }


  registerPhoto(e:any)
  {
    this.sendData.append('image',e.target.files[0])
  }

  signup(){
      for(const property in this.signupForm.value){
        this.sendData.append(property,this.signupForm.value[property])
  }
      this._authServiceService.registe(this.sendData).subscribe(
        data => {    
          if(JSON.parse(JSON.stringify(this.JwtTokenService.decodeToken(data.token))).role!=='admin'){
            JSON.parse(JSON.stringify(this.JwtTokenService.decodeToken(data.token)))
            localStorage.setItem('token',data.token)
          }
          this.sendData = new FormData()  
          this.AlertService.myAlert('success',`Welcome ${data.data.newUser.firstName}`,'You registered sucessfully')      
        },
        error => { 
          this.errorMessage =  error.error.message
          this.sendData = new FormData()
          this.AlertService.myAlert('error','Error',this.errorMessage!) 
        },
      )
  }
}
