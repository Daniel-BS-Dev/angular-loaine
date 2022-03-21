import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCursoComponent } from './page-curso.component';

describe('PageCursoComponent', () => {
  let component: PageCursoComponent;
  let fixture: ComponentFixture<PageCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
