import { AuthorsService } from './../../../services/admin/authors.service';
import { Component , Input } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule , Validators ,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Authors } from '../../../models/authors';
@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css'
})
export class AuthorFormComponent {
  authorForm !: FormGroup;
  dateChange: Boolean = false;
  sendFormData =  new FormData()
  image?: any;
  response!:any;
  @Input() authors !: Authors[]
  constructor(private AuthorsService:AuthorsService){}
  ngOnInit(){
    this.authorForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      dob: new FormControl('', [
        Validators.required
      ]),
      photo: new FormControl()
  })
  }

  printDate(e:any)
  {
    this.dateChange = true;
  }


  registerPhoto(e:any)
  {
    this.sendFormData.append('photo',e.target.files[0])
  }

   async addAuthor(){
    for(const property in this.authorForm.value){
          this.sendFormData.append(property,this.authorForm.value[property])
    }
    await this.AuthorsService.addAuthors(this.sendFormData).subscribe(
      async data =>{
        this.authors.push(data)

      },
      error => {
      }
    )

  }

}