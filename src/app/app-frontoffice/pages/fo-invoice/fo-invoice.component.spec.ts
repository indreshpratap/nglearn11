import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoInvoiceComponent } from './fo-invoice.component';

describe('FoInvoiceComponent', () => {
  let component: FoInvoiceComponent;
  let fixture: ComponentFixture<FoInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
