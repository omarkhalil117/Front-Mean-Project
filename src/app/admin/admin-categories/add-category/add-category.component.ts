import { Component,Output, EventEmitter, Input, input } from '@angular/core';
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
import { AlertService } from '../../../../services/alert.service';
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
  errorMsg !: string
  constructor( private fb: FormBuilder, private _CategoriesService: CategoriesService, private AlertService: AlertService) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addCategory(){
    this._CategoriesService.addCategory(this.categoryForm.value).subscribe(
      data =>{
        this.isdata=true 
        this.categories.push(data)
        let successMessage = `you Add the category ${this.categoryForm.value.name} successfully` 
        this.AlertService.myAlert('success', 'Added Successfully',successMessage)
        this.categoryForm.markAsPristine()
        this.categoryForm.markAsUntouched();
      },
      error => {
        this.errorMsg=error.error.message 
        this.AlertService.myAlert('error', 'Something wrong!',this.errorMsg)
      }
    )
  }


}







