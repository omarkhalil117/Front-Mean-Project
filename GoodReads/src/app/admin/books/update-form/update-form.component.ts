import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Books } from '../../../../models/books';
import { BookService } from '../../../../services/admin/book.service';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  isAnyFieldChange : boolean = true
  bookForm !: FormGroup;
  @Input() bookData  !: Books
  @Input() books !: Books[]
  image?: any;
  photoChanged = false
  sendFormData =  new FormData()
  isData !: boolean;


  constructor( private BookService:BookService,private fb: FormBuilder){}
  ngOnInit(){
    console.log(this.bookData)
    this.bookForm = this.fb.group({
      name: [this.bookData.name],
      categoryID: [this.bookData.categoryID],
      authorID: [this.bookData.authorID],
      cover: ["",]
    })
  }



  registerPhoto(e:any)
  {
    this.sendFormData.append('cover',e.target.files[0])
    this.photoChanged = true
  }

  //! بتاخد ال object القديم وتقارنه بالجديد وتشوف التغيير حصل فين وترجع اللى حصل عليه تغيير
  checkFieldsChanges(originalObject:any, modifiedObject:any) {
        for (const property in originalObject) {
        if(modifiedObject.hasOwnProperty(`${property}`) && modifiedObject[property] !== originalObject[property] && property !== 'cover'){
          this.sendFormData.append(property,originalObject[property]) 
        }
    }
  }


  updateBooks(form:FormGroup){
    this.checkFieldsChanges(form.value,this.bookData)
    this.sendFormData.forEach(el => console.log(el))
        this.BookService.updateBooks(this.sendFormData, this.bookData._id).subscribe(
      data =>{
        this.isData=true 
        console.log(data.data.updatedBook)
        this.books.map((el:any) =>{
          if(data.data.updatedBook._id === el._id){
            //! throw error about file type
            for (const property in data.data.updatedBook){
              if(el.hasOwnProperty(property)){
                    el[property] = data.data.updatedBook[property]
              }
            }
          }
        })
      },
      error => {
        // this.errorMsg=error.error.message 
      }
    )
  }
}
