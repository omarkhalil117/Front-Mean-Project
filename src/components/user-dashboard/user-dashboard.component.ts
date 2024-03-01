import { JwtTokenService } from './../../services/jwt-token.service';
import { Component } from '@angular/core';
import { BookRowComponent } from '../book-row/book-row.component';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagesServiceService } from '../../services/pages-service.service';
import { StarRateComponent } from '../star-rate/star-rate.component';
import { environment } from '../../environments/environment';
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
  url = environment.apiurl;
  rate = 3; 
  page = 0 ;
  jwt:any;
  constructor(private userData : UserDataService,
              private router : Router,
              private http : HttpClient,
              private BookPage : PagesServiceService,
              private JwtTokenService : JwtTokenService){}  

  ngOnInit()
  {

    if(this.page == 0)
    {
      this.jwt = this.JwtTokenService.decodeToken(localStorage.getItem('token'));
      if(this.jwt)
      {
        this.BookPage.getUserBooksPages(this.jwt,'1').subscribe((data: any) => {
          this.data = data.fullInfo;
          this.temp = data.fullInfo;
        });
      }          //console.log(this.temp)
    }
  }


  filterByShelve(e:any)
  {
    this.status = e.target.innerHTML; 
    if(this.status === 'All')
    {
      this.data = this.temp;
    }
    else{
      this.data = this.temp.filter( (el:any) => el._id.shelve.shelve === this.status );
    }
  } 


  redirectAuthorPage(id:string)
  {
    this.router.navigate(['authors',id])
  }

  redirectBookPage(id:String)
  {
    this.router.navigate(['books',id]); 
  }

  async updateBookShelve(e:any, bookId:String, fullId:String)
  {
    console.log(e.target.value,bookId)
    this.http.patch(`${this.url}/users/${this.jwt.id}/book/${bookId}`, { shelve:e.target.value} ).subscribe((d)=> console.log(d));
    this.books = this.temp.map((el:any)=> {
      if(el._id !== fullId) {
        return el;
      } 
      el._id.shelve.shelve = e.target.value;
      console.log(el._id.shelve.shelve)
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
      this.BookPage.getUserBooksPages(this.jwt.id,e.target.innerText).subscribe((res:any) => {
      this.data = res.fullInfo;
      console.log(this.data)
      });
      this.page = e.target.innerText;
  }
}
