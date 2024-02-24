import { Component } from '@angular/core';
import { BookRowComponent } from '../book-row/book-row.component';
import { UserDataService } from '../../services/user-data.service';
@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [BookRowComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  data:any;
  userToken:String = '';
  constructor(private userData : UserDataService){}  

  ngOnInit()
  {
    this.userData.getUserInfo('65d8f826d9f7850808bdd6ad').subscribe((data) => {
      this.data= data
      console.log(this.data)
    });
  }


}

// data: any[] = [
//   {
//   id:1,
//   cover:null,
//   name:"Clean Code",
//   Author:"John doe",
//   AvgRating:"3.5",
//   Rating:"4",
//   Shelve:"reading"
//   },
//   {
//   id:2,  
//   cover:null,
//   name:"Clean Arch",
//   Author:"John doe",
//   AvgRating:"3.5",
//   Rating:"4",
//   Shelve:"reading"
//   },
//   {
//   id:3,
//   cover:null,
//   name:"Head first",
//   Author:"John doe",
//   AvgRating:"3.5",
//   Rating:"4",
//   Shelve:"reading"
//   },
// ]