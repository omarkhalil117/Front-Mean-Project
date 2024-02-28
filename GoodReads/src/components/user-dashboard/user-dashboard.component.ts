import { Component } from '@angular/core';
import { BookRowComponent } from '../book-row/book-row.component';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesServiceService } from '../../services/pages-service.service';
import { StarRateComponent } from '../star-rate/star-rate.component';
@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [BookRowComponent, FontAwesomeModule , StarRateComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  data: any;
  books: any;
  temp: any;
  userToken: String = '';
  status: String = 'All';
  bookAvgRating: number = 0;
  userRating: number = 0;
  rate = 3; 
  page = 0 ;

  constructor(private userData : UserDataService,
              private router : Router,
              private http : HttpClient,
              private BookPage : PagesServiceService){}  

  ngOnInit()
  {
    if(this.page == 0)
    {

      this.BookPage.getUserBooksPages('65d2e73c85d0e459ad9f7c3b','1').subscribe((data: any) => {
        this.data = data.fullInfo;
        this.temp = data.fullInfo;
        console.log(this.data)
      });
    }
  }

  // getReadBook()
  // {
  //   this.books = this.temp.filter((el:any)=> el.shelve === "Read")
  //   this.status = 'Read';
  // }

  // getWantToReadBooks()
  // {
  //   this.books = this.temp.filter((el:any)=> el.shelve === "Want to Read")
  //   this.status = 'Want to Read';
  // }

  // getReadingBooks()
  // {
  //   this.books = this.temp.filter((el:any)=> el.shelve === "Currently read")
  //   this.status = 'Currently read';
  // }
  

  filterByShelve(e:any)
  {
    if(this.temp.length === 1 )
    {
      if(e.target.innerHTML !== this.temp[0]._id.shelve.shelve)
      {
        this.temp = []; 
      }
    }
    else{

      console.log(e.target.innerHTML)
      this.books = this.temp.foreach((el:any) => { 
        //  el._id.shelve === e.target.innerHTML
        console.log(el)
      })
      this.status = e.target.innerHTML;
    }
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

  UserRatingStar(rating:number)
  {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let html = '';

    for (let i = 0; i < fullStars; i++) {
      html += '<fa-icon [icon]="faStar" ></i> ';
    }

    if (halfStar) {
      html += '<fa-icon [icon]="faStarHalf"  ></fa-icon> ';
    }

    for (let i = 0; i < emptyStars; i++) {
      html += '<fa-icon [icon]="farStar"  ></fa-icon> ';
    }

    return html;
  
  }

    changePage(e:any)
  {  
      console.log(e.target.innerText)
      this.BookPage.getUserBooksPages('65d2e73c85d0e459ad9f7c3b',e.target.innerText).subscribe((res:any) => {
      this.data = res.fullInfo;
      console.log(this.data)
      });
      this.page = e.target.innerText;
  }
}
