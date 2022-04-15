import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseCreatedComponent } from './view-course-created.component';

describe('ViewCourseCreatedComponent', () => {
  let component: ViewCourseCreatedComponent;
  let fixture: ComponentFixture<ViewCourseCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourseCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCourseCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
