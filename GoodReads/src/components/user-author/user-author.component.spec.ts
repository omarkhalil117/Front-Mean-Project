import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthorComponent } from './user-author.component';

describe('UserAuthorComponent', () => {
  let component: UserAuthorComponent;
  let fixture: ComponentFixture<UserAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAuthorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
