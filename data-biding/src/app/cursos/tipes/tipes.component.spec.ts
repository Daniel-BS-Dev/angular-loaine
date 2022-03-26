import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipesComponent } from './tipes.component';

describe('TipesComponent', () => {
  let component: TipesComponent;
  let fixture: ComponentFixture<TipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
