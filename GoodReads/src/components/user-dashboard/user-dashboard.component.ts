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
  books:any;
  temp:any;
  userToken:String = '';
  constructor(private userData : UserDataService){}  

  ngOnInit()
  {
    this.userData.getUserInfo('65d2e73c85d0e459ad9f7c3b').subscribe((data) => {
      this.data= data
      this.books = this.data.fullInfo.books
      this.temp = this.books
      console.log(this.data)
    });
  }

  getAll()
  {
    this.books = this.temp;
  }
  getReadBook()
  {
    this.books = this.temp.filter((el:any)=> el.shelve === "Read")
    console.log(this.books)
  }

  getWantToReadBooks()
  {
    this.books = this.temp.filter((el:any)=> el.shelve === "Want to Read")
    console.log(this.books)
  }
  getReadingBooks()
  {
    this.books = this.temp.filter((el:any)=> el.shelve === "Currently Read")
    console.log(this.books)
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