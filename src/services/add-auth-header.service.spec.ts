import { TestBed } from '@angular/core/testing';

import { AddAuthHeaderService } from './add-auth-header.service';

describe('AddAuthHeaderService', () => {
  let service: AddAuthHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAuthHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
