
import { Component, TemplateRef, ViewEncapsulation, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthorFormComponent } from '../author-form/author-form.component';
import { UpdateFormComponent } from '../update-form/update-form.component';
import { CommonModule } from '@angular/common';
import { Authors } from '../../../../models/authors';
import { AuthorsService } from '../../../../services/admin/authors.service';

@Component({
  selector: 'app-author-admin',
  standalone: true,
  imports: [AuthorFormComponent,UpdateFormComponent,CommonModule],
  templateUrl: './author-admin.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './author-admin.component.css'
})
export class AuthorAdminComponent {
  authors !: Authors[]
  deletedMessage !:String
  authorData !: Authors

	private modalService = inject(NgbModal);
  constructor(private _AuthorService:AuthorsService){
  }
  
  ngOnInit(){
      this.displayAuthors()
  }




    //! Display Categories
    displayAuthors(){
      this._AuthorService.displayAuthors().subscribe(
        data => {
          console.log(data)
            this.authors = data
        }
      )
    }
    //! Delete Author
     deleteAuthor(id:String){
      this._AuthorService.deleteAuthors(id).subscribe(
        data =>{
            this.deletedMessage = data.message     
          //! display id okay
          this.authors = this.authors.filter(el => el._id !== id)
        },
        error =>{
          console.log(error)
          this.deletedMessage = error.error.message
        }
      )
    }


  //! Modal Function from ng Bootstrap
	openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true,animation: true });
	}
  openVerticallyCentered2(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true, animation: true });
	}

  openVerticallyCentered3(content: TemplateRef<any>,author:any) {
    console.log(author)
		this.modalService.open(content, { centered: true , animation: true});
    this.authorData = author
    
	}
  
}
