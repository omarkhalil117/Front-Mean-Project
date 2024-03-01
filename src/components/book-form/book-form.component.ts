import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksRequestsService } from '../../services/book-services/books-requests.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  bookForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private booksRequestsService: BooksRequestsService,
    private http: HttpClient) {


    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(3)]],
      category: ['', [Validators.required]],
      author: ['', [Validators.required]],
      cover: ['', [Validators.required]]
    })
  }

  upload(event: any) {

    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('image', file);

    this.http.post(`${environment.apiurl}/image`, formData).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }


  addBook() {
    this.booksRequestsService.createBook(this.bookForm.value).subscribe((res) => {
      console.log(res);
    })
  }

  handleSubmitForm() {
    console.log(this.bookForm.value);
  }


}
