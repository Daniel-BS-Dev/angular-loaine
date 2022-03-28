import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveElvisComponent } from './directive-elvis.component';

describe('DirectiveElvisComponent', () => {
  let component: DirectiveElvisComponent;
  let fixture: ComponentFixture<DirectiveElvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveElvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveElvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
