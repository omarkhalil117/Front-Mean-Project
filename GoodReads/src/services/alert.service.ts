import { Injectable } from '@angular/core';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  myAlert(alertType:string,message:string, text:string ){
    swal({
      title: message,
      buttons: ['false'],
      text: text,
      icon: alertType,
      // dangerMode: true,
          timer: 10000
    });
  }
}
