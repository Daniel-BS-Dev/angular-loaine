import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgClassComponent } from './directive-ng-class.component';

describe('DirectiveNgClassComponent', () => {
  let component: DirectiveNgClassComponent;
  let fixture: ComponentFixture<DirectiveNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveNgClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
