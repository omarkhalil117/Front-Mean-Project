import { AlertService } from './../../../services/alert.service';
import { Component, inject, TemplateRef, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthorFormComponent } from '../authors/author-form/author-form.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { CategoriesService } from '../../../services/admin/categories.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [AddCategoryComponent,UpdateCategoryComponent],
  templateUrl: './admin-categories.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './admin-categories.component.css'
})
export class AdminCategoriesComponent {
	private modalService = inject(NgbModal);
  categories!:Category[]
  isResponse : boolean =false
  deletedMessage!: String
  categoryData !: Category
  constructor(private _CategoriesService:CategoriesService){}

  ngOnInit(){
    //! Display categories
    this.displayCategories()
  }

  //! Display Categories
  displayCategories(){
    this._CategoriesService.displayCategories().subscribe(
      data => {
          this.categories = data
      }
    )
  }
  //! Delete Categories
   deleteCategory(id:string){
    this._CategoriesService.deleteCategory(id).subscribe(
      data =>{
          this.deletedMessage = data.message     
        //! display id okay
        this.categories = this.categories.filter(el => el._id !== id)
      },
      error =>{
        console.log(error)
        this.deletedMessage = error.error.message
      }
    )
  }






  //! Modal Function from ng Bootstrap
	openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
  openVerticallyCentered2(content: TemplateRef<any>,category:any) {
		this.modalService.open(content, { centered: true });
	}

  openVerticallyCentered3(content: TemplateRef<any>,category:any) {
    console.log(category)
		this.modalService.open(content, { centered: true });
    this.categoryData = category
    
	}

}
