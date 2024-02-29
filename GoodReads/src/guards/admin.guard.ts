import { AlertService } from './../services/alert.service';
import { CanActivateFn, Router } from '@angular/router';
import { JwtTokenService } from '../services/jwt-token.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const jwtTokenService = inject(JwtTokenService)
  if( JSON.parse(JSON.stringify(jwtTokenService.decodeToken(localStorage.getItem('token'))))?.role === 'admin'){
    return true
  }
  else{
    const router = inject(Router)
    const alertService = inject(AlertService)
    alertService.myAlert('error','Unauthorized !', 'Please log in')
    router.navigate(['/admin'])
    return false
  } 
};

