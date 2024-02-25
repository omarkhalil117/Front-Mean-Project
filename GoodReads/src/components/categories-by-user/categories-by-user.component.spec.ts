import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesByUserComponent } from './categories-by-user.component';

describe('CategoriesByUserComponent', () => {
  let component: CategoriesByUserComponent;
  let fixture: ComponentFixture<CategoriesByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesByUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
