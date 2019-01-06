import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmNewInventoryComponent } from './adm-new-inventory.component';

describe('AdmNewInventoryComponent', () => {
  let component: AdmNewInventoryComponent;
  let fixture: ComponentFixture<AdmNewInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmNewInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmNewInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
