import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantDetailsComponent } from './studant-details.component';

describe('StudantDetailsComponent', () => {
  let component: StudantDetailsComponent;
  let fixture: ComponentFixture<StudantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudantDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
