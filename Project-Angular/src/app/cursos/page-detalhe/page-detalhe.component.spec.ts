import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetalheComponent } from './page-detalhe.component';

describe('PageDetalheComponent', () => {
  let component: PageDetalheComponent;
  let fixture: ComponentFixture<PageDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
