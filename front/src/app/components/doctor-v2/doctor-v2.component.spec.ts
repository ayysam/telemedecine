import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorV2Component } from './doctor-v2.component';

describe('DoctorV2Component', () => {
  let component: DoctorV2Component;
  let fixture: ComponentFixture<DoctorV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
