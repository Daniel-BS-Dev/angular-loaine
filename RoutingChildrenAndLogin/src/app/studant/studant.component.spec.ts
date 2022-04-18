import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantComponent } from './studant.component';

describe('StudantComponent', () => {
  let component: StudantComponent;
  let fixture: ComponentFixture<StudantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
