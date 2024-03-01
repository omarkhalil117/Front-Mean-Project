import { AlertService } from './../../../../services/alert.service';

import { Component,Output, EventEmitter, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Category } from '../../../../models/category';
import { CategoriesService } from '../../../../services/admin/categories.service';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent {
  categoryForm !: FormGroup;
  isdata !: boolean
  submitted =true
  errorMsg !: string
  @Input() categoryData !: Category
  @Input()categories !: Category[]

  constructor( private fb: FormBuilder, private _CategoriesService: CategoriesService, private AlertService: AlertService) {
    
  }
  //! must recieve categoryData i n oninit if in constructor it will throw error as category undefinde لسه ما اتبعتش من ال admin categories
  ngOnInit(){
    this.categoryForm = this.fb.group({
      name: [this.categoryData?.name, [Validators.required, Validators.minLength(3)]],
    });
  }

  updateCategory(){
    this._CategoriesService.updateCategory(this.categoryForm.value, this.categoryData._id).subscribe(
      data =>{
        this.isdata=true 
        this.categories.map(el =>{
          if(this.categoryData._id === el._id){
            el.name = this.categoryForm.value.name            
        let successMessage = `you update  the category ${this.categoryForm.value.name} successfully` 
        this.AlertService.myAlert('success', 'Updated Successfully',successMessage)
        this.categoryForm.markAsPristine()
        this.categoryForm.markAsUntouched();
          }
        })
      },
      error => {
        this.errorMsg=error.error.message 
        this.AlertService.myAlert('error', 'Something wrong!',this.errorMsg)
      }
    )
  }

  


}







