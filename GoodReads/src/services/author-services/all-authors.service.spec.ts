import { TestBed } from '@angular/core/testing';

import { AllAuthorsService } from './all-authors.service';

describe('AllAuthorsService', () => {
  let service: AllAuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
