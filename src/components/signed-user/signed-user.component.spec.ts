import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedUserComponent } from './signed-user.component';

describe('SignedUserComponent', () => {
  let component: SignedUserComponent;
  let fixture: ComponentFixture<SignedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignedUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
