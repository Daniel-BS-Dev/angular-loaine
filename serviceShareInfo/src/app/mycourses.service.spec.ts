import { TestBed } from '@angular/core/testing';

import { MycoursesService } from './mycourses.service';

describe('MycoursesService', () => {
  let service: MycoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
