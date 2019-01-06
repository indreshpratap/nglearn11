import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoOrderProcessComponent } from './fo-order-process.component';

describe('FoOrderProcessComponent', () => {
  let component: FoOrderProcessComponent;
  let fixture: ComponentFixture<FoOrderProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoOrderProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoOrderProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
