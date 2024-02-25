import { Component } from '@angular/core';
import { BookRowComponent } from '../book-row/book-row.component';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
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
  status:String = 'All';

  constructor(private userData : UserDataService,
              private router : Router,
              private http : HttpClient){}  

  ngOnInit()
  {
    this.userData.getUserInfo('65d2e73c85d0e459ad9f7c3b').subscribe((data) => {
      this.data = data;
      this.books = this.data.fullInfo.books;
      this.temp = this.books;
      console.log(this.data)
    });
  }

  getAll()
  {
    this.books = this.temp;
    this.status = 'All';
  }

  getReadBook()
  {
    this.books = this.temp.filter((el:any)=> el.shelve === "Read")
    this.status = 'Read';
  }

  getWantToReadBooks()
  {
    this.books = this.temp.filter((el:any)=> el.shelve === "Want to Read")
    this.status = 'Want to Read';
  }

  getReadingBooks()
  {
    this.books = this.temp.filter((el:any)=> el.shelve === "Currently read")
    this.status = 'Currently read';
  }

  redirectAuthorPage(id:string)
  {
    this.router.navigate(['/authors',id])
  }

  redirectBookPage(id:String)
  {
    this.router.navigate(['/books',id]); 
  }

  async updateBookShelve(e:any, bookId:String, fullId:String)
  {
    console.log(e.target.value,bookId)
    this.http.patch(`http://localhost:3000/users/65d2e73c85d0e459ad9f7c3b/book/${bookId}`, { shelve:e.target.value} ).subscribe((d)=> console.log(d));
    this.books = this.books.map((el:any)=> {
      if(el._id !== fullId) {
        return el;
      } 
      el.shelve = e.target.value;
      return el;
    })
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