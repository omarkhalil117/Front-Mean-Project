import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor() { }

  jwtToken!: string;
  decodedToken!: { [key: string]: string };
  setToken(token: string) {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken(token:string|null) {
    if(token !== null){
      return jwt_decode.jwtDecode(token);
    }
    else{
      return null
    }
    
  }

  // getDecodeToken() {
  //   return jwt_decode(this.jwtToken);
  // }

  // getUser() {
  //   this.decodeToken();
  //   return this.decodedToken ? this.decodedToken.role : null;
  // }

 

  // getExpiryTime() {
  //   this.decodeToken();
  //   return this.decodedToken ? this.decodedToken.exp : null;
  // }

  // isTokenExpired(): boolean {
  //   const expiryTime: number = this.getExpiryTime();
  //   if (expiryTime) {
  //     return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
  //   } else {
  //     return false;
  //   }
  // }
}

