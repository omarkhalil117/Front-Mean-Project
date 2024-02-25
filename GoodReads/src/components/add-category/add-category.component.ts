
import { Component,Output, EventEmitter, Input, input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/admin/categories.service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryForm : FormGroup;
  @Input() categories !: Category[]  
  isdata !: boolean
  errorMsg !: String
  constructor( private fb: FormBuilder, private _CategoriesService: CategoriesService) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addCategory(){
    console.log(this.categoryForm.value)
    this._CategoriesService.addCategory(this.categoryForm.value).subscribe(
      data =>{
        // console.log(data)
        this.isdata=true 
        this.categories.push(data)

      },
      error => {
        // console.log(error)
        this.errorMsg=error.error.message 
      }
    )
  }


}







