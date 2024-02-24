import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthorsService } from '../../../services/admin/authors.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Authors } from '../../../models/authors';

@Component({
  selector: 'app-update-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './update-form.component.html',
  styleUrl: './update-form.component.css'
})
export class UpdateFormComponent {
  isAnyFieldChange : boolean = true
  authorForm !: FormGroup;
  @Input() authorData !: Authors
  image?: any;
  photoChanged = false
  isData !: boolean;
  response!:any;
  sendFormData =  new FormData()
  @Input() authors !: Authors[]
  constructor(private http:HttpClient, private AuthorsService:AuthorsService)
  {
  }

  ngOnInit(){
    this.authorForm = new FormGroup({
      firstName: new FormControl(this.authorData.firstName, [
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      lastName: new FormControl(this.authorData.lastName, [
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      dob: new FormControl( new Date(this.authorData.dob)  , [
      ]),
      photo: new FormControl(this.authorData.photo)
  })

   
  }

  registerPhoto(e:any)
  {
    this.sendFormData.append('photo',e.target.files[0])
    this.photoChanged = true
  }
//! بتاخد ال object القديم وتقارنه بالجديد وتشوف التغيير حصل فين وترجع اللى حصل عليه تغيير
  checkFieldsChanges(originalObject:any, modifiedObject:any) {
        for (const property in originalObject) {
        if(modifiedObject.hasOwnProperty(`${property}`) && modifiedObject[property] !== originalObject[property] && property !== 'photo'){
          this.sendFormData.append(property,originalObject[property]) 
        }
    }
  }

  updateAuthor(form:FormGroup){
    this.checkFieldsChanges(form.value,this.authorData)
        this.AuthorsService.updateAuthors(this.sendFormData, this.authorData._id).subscribe(
      data =>{
        this.isData=true 
        this.authors.map((el:any) =>{
          if(data._id === el._id){
            //! throw error about file type
            for (const property in data){
              if(el.hasOwnProperty(property)){
                    el[property]= data[property]
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