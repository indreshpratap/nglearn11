import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmItemDetailsComponent } from './adm-item-details.component';

describe('AdmItemDetailsComponent', () => {
  let component: AdmItemDetailsComponent;
  let fixture: ComponentFixture<AdmItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
