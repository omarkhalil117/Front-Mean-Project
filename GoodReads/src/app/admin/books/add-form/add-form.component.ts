import { AuthorsService } from './../../../../services/admin/authors.service';
import { CategoriesService } from './../../../../services/admin/categories.service';

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Books } from '../../../../models/books';
import { BookService } from '../../../../services/admin/book.service';
import { Category } from '../../../../models/category';
import { Author } from '../../../../models/author';
import { Authors } from '../../../../models/authors';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  bookForm !: FormGroup;
  errorMsg !: string
  dateChange: Boolean = false;
  sendFormData =  new FormData()
  image?: any;
  response!:any;

  @Input() books : Books[] =[]
  categories !: Category[] 
  authors !: Authors[]
  constructor(private BookService:BookService,private fb: FormBuilder, private CategoriesService:CategoriesService,private AuthorsService:AuthorsService, private AlertService:AlertService){
    
  }
  ngOnInit(){
  this.CategoriesService.displayCategories().subscribe(
    data => {
      this.categories=data
    }
  )

  this.AuthorsService.displayAuthors().subscribe(
    data => {
      console.log(data)
        this.authors = data
    }
  )
    this.bookForm = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(30),Validators.minLength(3)]],
      categories: ['',Validators.required],
      authors: ['',Validators.required],
      cover: ['',Validators.required]
    })
  }

  printDate(e:any)
  {
    this.dateChange = true;
  }

  getCategoryId(e:any){
    this.sendFormData.append('categoryID',e)
  }
  getAuthorId(e:any){
    this.sendFormData.append('authorID',e)
  }

  registerPhoto(e:any)
  {
    this.sendFormData.append('cover',e.target.files[0])
  }
  async addBook(){
    for(let property in this.bookForm.value){
      if(property !== 'categories' && property !== 'authors')
          this.sendFormData.append(property,this.bookForm.value[property])
    }
     this.BookService.addBooks(this.sendFormData).subscribe(
         data =>{
            this.books.push(data.data.Book)
            let successMessage = `you Added the book ${this.bookForm.value.name} successfully` 
          this.sendFormData = new FormData()
        this.AlertService.myAlert('success', 'Added Successfully',successMessage)
        this.bookForm.reset()
      },
      error => {
        this.sendFormData = new FormData()
        this.errorMsg=error.error.message 
        this.AlertService.myAlert('error', 'Something wrong!',this.errorMsg)

      }
    )

  }


}
