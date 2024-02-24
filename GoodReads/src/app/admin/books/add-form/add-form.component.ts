import { BookService } from './../../../services/admin/book.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Books } from '../../../models/books';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  bookForm !: FormGroup;
  dateChange: Boolean = false;
  sendFormData =  new FormData()
  image?: any;
  response!:any;
  @Input() books : Books[] =[]
  constructor(private BookService:BookService,private fb: FormBuilder){
    
  }
  ngOnInit(){
    this.bookForm = this.fb.group({
      name: ['', [Validators.required]],
      categoryID: ['', [Validators.required]],
      authorID: ['', [Validators.required]],
      cover: ['', [Validators.required]]
    })
  }
  printDate(e:any)
  {
    this.dateChange = true;
  }
  registerPhoto(e:any)
  {
    this.sendFormData.append('cover',e.target.files[0])
  }
  async addBook(){
    for(const property in this.bookForm.value){
          this.sendFormData.append(property,this.bookForm.value[property])
    }
     this.BookService.addBooks(this.sendFormData).subscribe(
         data =>{
          console.log(data.data)
            this.books.push(data.data.Book)
        
      },
      error => {
      }
    )

  }

}
