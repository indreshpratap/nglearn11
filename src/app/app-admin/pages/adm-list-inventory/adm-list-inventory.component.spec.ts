import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmListInventoryComponent } from './adm-list-inventory.component';

describe('AdmListInventoryComponent', () => {
  let component: AdmListInventoryComponent;
  let fixture: ComponentFixture<AdmListInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmListInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmListInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
