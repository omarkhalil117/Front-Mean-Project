import { Component , Input } from '@angular/core';
import { FormControl, FormGroup , ReactiveFormsModule , Validators ,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css'
})
export class AuthorFormComponent {
  authorForm: FormGroup;
  dateChange: Boolean = false;
  image?: any;
  response!:any;
  constructor(private http:HttpClient)
  {
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

  async submitAuthor(data:any,event:any)
  {
    data.photo = this.image.name;
    console.log(data);

    const formData = new FormData();
    formData.append("image",this.image);
    console.log(data)

    await this.http.post('http://localhost:3000/authors',data).subscribe(
          (d)=> console.log(d)
          );

    const res = await this.http.post(`http://localhost:3000/upload-author-image/${data.photo}`,formData).subscribe((res)=> this.response = res)

    console.log(this.response)
    console.log(res)
  }

  registerPhoto(e:any)
  {
    console.log(e.target.files[0]) 
    this.image =  e.target.files[0]
   
  }
}