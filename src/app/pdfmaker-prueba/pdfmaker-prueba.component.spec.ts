import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfMakerPruebaComponent } from './pdfmaker-prueba.component';

describe('PdfMakerPruebaComponent', () => {
  let component: PdfMakerPruebaComponent;
  let fixture: ComponentFixture<PdfMakerPruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfMakerPruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfMakerPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

