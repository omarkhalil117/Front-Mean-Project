import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCategoryComponent } from './books-category.component';

describe('BooksCategoryComponent', () => {
  let component: BooksCategoryComponent;
  let fixture: ComponentFixture<BooksCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
