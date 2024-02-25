
import { Component, inject, TemplateRef, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFormComponent } from '../add-form/add-form.component';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { Books } from '../../../../models/books';
import { BookService } from '../../../../services/admin/book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [AddFormComponent,UpdateFormComponent],
  templateUrl: './books.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './books.component.css'
})
export class BooksComponent {
	private modalService = inject(NgbModal);
  books!:Books[]
  deletedMessage!:string
  bookData !: Books

constructor(private _BookService:BookService){}



  ngOnInit(){
    //! Display books
    this.displayBooks()
  }

  //! Display Books
  displayBooks(){
    this._BookService.displayBooks().subscribe(
      data => {
        console.log(data.data.books)
          this.books = data.data.books
      }
    )
  }
  //! Delete Categories
   deleteBook(id:String){
    this._BookService.deleteBooks(id).subscribe(
      data =>{
          this.deletedMessage = data.message     
        //! display id okay
        this.books = this.books.filter(el => el._id !== id)
      },
      error =>{
        console.log(error)
        this.deletedMessage = error.error.message
      }
    )
  }


  //! Modal Function from ng Bootstrap
	openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
  openVerticallyCentered2(content: TemplateRef<any>,category:any) {
		this.modalService.open(content, { centered: true });
	}

  openVerticallyCentered3(content: TemplateRef<any>,book:any) {
    // console.log(category)
		this.modalService.open(content, { centered: true });
    this.bookData = book
    
	}
}
