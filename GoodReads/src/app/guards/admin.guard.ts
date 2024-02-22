import { CanActivateFn } from '@angular/router';
import { JwtTokenService } from '../services/jwt-token.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const jwtTokenService = inject(JwtTokenService)
  console.log(jwtTokenService.decodeToken(localStorage.getItem('token')))
  if( JSON.parse(JSON.stringify(jwtTokenService.decodeToken(localStorage.getItem('token'))))?.role === 'admin'){
    return true
  }
  else{
    // router.navigate(['/signup'])
    console.log("You are not unotherized")
    return false
  } 
};

