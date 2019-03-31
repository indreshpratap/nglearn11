import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmEditInventoryComponent } from './adm-edit-inventory.component';

describe('AdmEditInventoryComponent', () => {
  let component: AdmEditInventoryComponent;
  let fixture: ComponentFixture<AdmEditInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmEditInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmEditInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
