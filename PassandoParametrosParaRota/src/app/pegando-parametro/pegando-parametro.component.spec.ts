import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegandoParametroComponent } from './pegando-parametro.component';

describe('PegandoParametroComponent', () => {
  let component: PegandoParametroComponent;
  let fixture: ComponentFixture<PegandoParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegandoParametroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PegandoParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
