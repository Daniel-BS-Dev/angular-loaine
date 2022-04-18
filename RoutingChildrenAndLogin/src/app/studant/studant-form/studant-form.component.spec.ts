import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantFormComponent } from './studant-form.component';

describe('StudantFormComponent', () => {
  let component: StudantFormComponent;
  let fixture: ComponentFixture<StudantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudantFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
