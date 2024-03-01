import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { JwtTokenService } from '../services/jwt-token.service';
import { AlertService } from '../services/alert.service';

export const authGuard: CanActivateFn = (route, state) => {
  const jwtTokenService = inject(JwtTokenService)
  if( JSON.parse(JSON.stringify(jwtTokenService.decodeToken(localStorage.getItem('token'))))?.role === 'user'){
    return true
  }
  else{
    const router = inject(Router)
    const alertService = inject(AlertService)
    alertService.myAlert('error','Unauthorized !', 'Please log in')
    router.navigate(['/login'])
    return false
  } 
};
