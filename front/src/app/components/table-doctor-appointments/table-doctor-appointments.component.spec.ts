import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDoctorAppointmentsComponent } from './table-doctor-appointments.component';

describe('TableDoctorAppointmentsComponent', () => {
  let component: TableDoctorAppointmentsComponent;
  let fixture: ComponentFixture<TableDoctorAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDoctorAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDoctorAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
