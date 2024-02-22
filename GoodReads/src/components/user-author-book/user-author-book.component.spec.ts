import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthorBookComponent } from './user-author-book.component';

describe('UserAuthorBookComponent', () => {
  let component: UserAuthorBookComponent;
  let fixture: ComponentFixture<UserAuthorBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAuthorBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAuthorBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
