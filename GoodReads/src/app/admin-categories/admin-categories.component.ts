import { CategoriesService } from './../services/admin/categories.service';
import { Component, inject, TemplateRef, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-categories',
  standalone: true,
  imports: [],
  templateUrl: './admin-categories.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './admin-categories.component.css'
})
export class AdminCategoriesComponent {
	private modalService = inject(NgbModal);
  categories:any
  constructor(private _CategoriesService:CategoriesService){
    
  }

  ngOnInit(){
    this._CategoriesService.displayBooks().subscribe(
      data => {
          this.categories = data
      }
    )
  }
  openBackDropCustomClass(content: TemplateRef<any>) {
		this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
	}

	openWindowCustomClass(content: TemplateRef<any>) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	openSm(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'sm' });
	}

	openLg(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'lg' });
	}

	openXl(content: TemplateRef<any>) {
		this.modalService.open(content, { size: 'xl' });
	}

	openFullscreen(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
	}

	openVerticallyCentered(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}

	openScrollableContent(longContent:TemplateRef<any>) {
		this.modalService.open(longContent, { scrollable: true });
	}

	openModalDialogCustomClass(content: TemplateRef<any>) {
		this.modalService.open(content, { modalDialogClass: 'dark-modal' });
	}
}
