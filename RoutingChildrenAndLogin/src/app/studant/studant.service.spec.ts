import { TestBed } from '@angular/core/testing';

import { StudantService } from './studant.service';

describe('StudantService', () => {
  let service: StudantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
