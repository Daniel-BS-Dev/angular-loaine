import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusandoInputComponent } from './reusando-input.component';

describe('ReusandoInputComponent', () => {
  let component: ReusandoInputComponent;
  let fixture: ComponentFixture<ReusandoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusandoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusandoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
